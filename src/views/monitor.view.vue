<template>
  <div class="monitor-view">
    <div class="left">
      <div class="left-title">
        <layoutTitle :direction="'left'">
          <template v-slot:left>
            机器人统计（月）
          </template>
        </layoutTitle>
      </div>
      <div class="left-chart1 bg_temp_1">
        <div class="liq">
          <liquidfill :color="'rgba(0, 210, 255, 1)'" :percent="leftTopData.run_percent">
            机器人作业率
          </liquidfill>
        </div>
        <div class="liq">
          <liquidfill :color="'rgba(244, 166, 40, 1)'" :percent="leftTopData.free_percent">
            机器人闲置率
          </liquidfill>
        </div>
        <div class="liq">
          <liquidfill :color="'rgba(231, 67, 54,1)'" :percent="leftTopData.exc_percent">
            机器人异常率
          </liquidfill>
        </div>
      </div>
      <div class="left-chart2 bg_temp_1 padding-layout">
        <chartTitle>各流程运行时长</chartTitle>
        <div class="title_part_line"></div>
        <ul class="lengends">
          <li class="lengend">实时趋势</li>
          <li class="lengend cur">历史趋势</li>
        </ul>
        <div class="chart-line-list" id="list-1">
          <div class="inner-scroll-box">
            <chartScrollItem class="termi-line-item scroll-item" v-for="item in leftCenterList" :index="item.index" :list-obj="item" :key="item.name">{{ item.name }}</chartScrollItem>
          </div>
        </div>
        <div class="parallel-box" id="parallel-exc-box"></div>
      </div>
      <div class="left-chart4 bg_temp_1">
        <div class="title">
          <chartTitle>资源占用情况(当月)</chartTitle>
          <div class="title_part_line"></div>
          <div class="unit">合计占用:小时</div>
        </div>
        <div class="charts-box">
          <termianlSourceLeftBottom :list="leftBottomList"></termianlSourceLeftBottom>
        </div>
      </div>
    </div>
    <div class="center">
      <centerMap></centerMap>
    </div>
    <div class="right">
      <div class="right-title">
        <layoutTitle :direction="'right'">
          <template v-slot:right>
            终端监控（日）
          </template>
        </layoutTitle>
      </div>
      <div class="right-chart1 bg_temp_1">
        <terminalDaytopView :labeldata="rightTopData"></terminalDaytopView>
      </div>
      <div class="right-chart3 bg_temp_1 padding-layout">
        <chartTitle>终端实时运行状态 </chartTitle>
        <div class="title_part_line"></div>
        <div class="table-box">
          <ul class="table-title">
            <li class="termicode">编号</li>
            <li class="ip">终端IP</li>
            <li class="flow">运行流程</li>
            <li class="depart">运行单位</li>
            <li class="status">状态</li>
          </ul>
          <div class="table-body-layout">
            <ul class="table-body" id="monitor-right-chart2-box">
              <li v-for="(item, index) in timernalRunStatus" :key="index">
                <span class="termicode">{{ item.robotCode }}</span>
                <span class="ip">{{ item.robotIp ? item.robotIp : '无' }}</span>
                <span class="flow">{{ item.flowName ? item.flowName : '无' }}</span>
                <span class="depart">{{ item.companyName ? item.companyName : '无' }}</span>

                <span class="status" v-if="item.robotClient == '运行'">
                  <i class="run button">{{ item.robotClient }}</i></span
                >
                <span class="status" v-else-if="item.robotClient == '闲置'"
                  ><i class="free button">{{ item.robotClient }}</i></span
                >
                <span class="status" v-else-if="item.robotClient == '等待'"
                  ><i class="wait button">{{ item.robotClient }}</i></span
                >
                <span class="status" v-else-if="item.robotClient == '异常'"
                  ><i class="exc button">{{ item.robotClient }}</i></span
                >
                <span class="status" v-else
                  ><i class="wait button">{{ item.robotClient }}</i></span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import layoutTitle from '@/components/layoutTitle'
import chartTitle from '@/components/chartTitle'
import liquidfill from '@/components/monitor/liquidfill'
import chartScrollItem from '@/components/monitor/terminalLine.vue'
import termianlSourceLeftBottom from '@/components/monitor/termianlSourceLeftBottom.vue'
// import terminalDayExc from '@/components/monitor/terminalDayExc.vue'
import terminalDaytopView from '@/components/monitor/terminalDaytopView.vue'
// import scrollBox from '@/components/scrollBox'
import centerMap from '@/components/centerMap'
import { getKeyframes, getCurrentDate, round } from '@/util/comFunction'
import { flowCodeMap } from './page.static'

export default {
  name: 'Monitor',
  data() {
    return {
      leftTopData: {
        run_percent: 0,
        free_percent: 0,
        exc_percent: 0
      },
      leftCenterList: {},
      leftBottomList: {},
      rightTopData: {
        run_terminal: 0,
        run_perent: 0,
        free_terminal: 0,
        exc_terminal: 0
      },
      //执行，排队，异常
      timernalRunStatus: []
    }
  },
  created() {},
  components: { layoutTitle, chartTitle, liquidfill, chartScrollItem, terminalDaytopView, termianlSourceLeftBottom, centerMap },
  computed: {},
  methods: {
    initPage() {
      this.leftTop()
      this.leftCenter()
      this.leftBottom()
      this.centerBottom()
      this.rightTop()
      this.rightBottom()
    },
    setAnimationList(listLength) {
      const h = listLength * 50 - 610
      if (h < 50) {
        return
      }
      const s = (h / 1000) * 20
      const kf = getKeyframes('monitor-right-chart2')
      kf.styleSheet.deleteRule(kf.index)
      kf.styleSheet.insertRule(`@keyframes monitor-right-chart2 {
            0% {
                top: 0px;
                opacity: 1;
            }
            95% {
                top: -${h}px;
                opacity: 1;
            }
            100% {
                top: -${h + 5}px;
                opacity: 0;
            }
        }`)
      const ball = document.getElementById('monitor-right-chart2-box')
      ball.setAttribute('style', 'animation:monitor-right-chart2 ' + s + 's linear infinite forwards;')
      //   //修正IE中不生效问题s
      //   const ball = document.getElementById('monitor-right-chart2-box');
      //     ball.setAttribute('style','animation: monitor-right-chart2 160s linear infinite forwards;');
      //     setTimeout(_=>{
      //     // 1ms后纠正animation的名称
      //     ball.setAttribute('style','animation: amonitor-right-chart2 160s linear infinite forwards;');
      //     },1)
    },
    leftTop() {
      const date = getCurrentDate()
      const param1 = {
        targetCode: 'IT_000001',
        startDate: date.current,
        startTime: '',
        endDate: date.current,
        endTime: '',
        orgCode: '',
        flowCode: '',
        targetFlag: '',
        grade: ''
      }
      this.$http.post('/eas-robot/targetData/getTargetData', param1).then((res) => {
        const res_data = res.data.data
        this.leftTopData.run_percent = res_data[0] ? round(res_data[0].value / 100, 4) : 0
      })
      this.$http.post('/eas-robot/targetData/getTargetData', Object.assign(param1, { targetCode: 'IT_000002' })).then((res) => {
        const res_data = res.data.data
        this.leftTopData.free_percent = res_data[0] ? round(res_data[0].value / 100, 4) : 0
      })
      this.$http.post('/eas-robot/targetData/getTargetData', Object.assign(param1, { targetCode: 'IT_000003' })).then((res) => {
        const res_data = res.data.data
        this.leftTopData.exc_percent = res_data[0] ? round(res_data[0].value / 100, 4) : 0
      })
    },
    leftCenter() {
      const date = getCurrentDate()
      const param1 = {
        targetCode: 'IT_000004',
        startDate: date.first,
        startTime: '',
        endDate: date.last,
        endTime: '',
        orgCode: '',
        flowCode: '',
        targetFlag: '2',
        grade: ''
      }
      this.$http.post('/eas-robot/targetData/getTargetData', param1).then((res) => {
        const res_data = res.data.data
        // const lineListData = JSON.parse(JSON.stringify(flowCodeMap))
        const lineListData = {}
        Object.keys(flowCodeMap).forEach((val, index) => {
          lineListData[val] = { name: '', list: [], index: index + 1 }
        })
        res_data.forEach((element) => {
          lineListData[element.flowCode].name = element.flowName
          lineListData[element.flowCode].list.push({ name: element.flowName, code: element.flowCode, value: element.value, date: element.startDate })
        })
        this.leftCenterList = lineListData
      })
    },
    leftBottom() {
      const date = getCurrentDate()
      const param1 = {
        targetCode: 'IT_000005',
        startDate: date.first,
        startTime: '',
        endDate: date.last,
        endTime: '',
        orgCode: '',
        flowCode: '',
        targetFlag: '5',
        grade: ''
      }
      this.$http.post('/eas-robot/targetData/getTargetData', param1).then((res) => {
        const res_data = res.data.data
        this.leftBottomList = {
          start: date.first,
          end: date.last,
          arr: res_data
        }
      })
    },

    centerBottom() {},
    rightTop() {
      const date = getCurrentDate()
      const param1 = {
        targetCode: 'IT_000007',
        startDate: date.current,
        startTime: '',
        endDate: date.current,
        endTime: '',
        orgCode: '',
        flowCode: '',
        targetFlag: '1',
        grade: ''
      }
      this.$http.post('/eas-robot/targetData/getTargetData', param1).then((res) => {
        const res_data = res.data.data
        this.rightTopData.run_terminal = res_data[0] ? res_data[0].value : 0
      })
      this.$http.post('/eas-robot/targetData/getTargetData', Object.assign(param1, { targetCode: 'IT_000008' })).then((res) => {
        const res_data = res.data.data
        this.rightTopData.run_perent = res_data[0] ? res_data[0].value : 0
      })
      this.$http.post('/eas-robot/targetData/getTargetData', Object.assign(param1, { targetCode: 'IT_000009' })).then((res) => {
        const res_data = res.data.data
        this.rightTopData.free_terminal = res_data[0] ? res_data[0].value : 0
      })
      this.$http.post('/eas-robot/targetData/getTargetData', Object.assign(param1, { targetCode: 'IT_000010' })).then((res) => {
        const res_data = res.data.data
        this.rightTopData.exc_terminal = res_data[0] ? res_data[0].value : 0
      })
    },
    rightBottom() {
      const date = getCurrentDate()
      const param1 = {
        targetCode: 'IT_000011',
        startDate: date.current,
        startTime: '',
        endDate: date.current,
        endTime: '',
        orgCode: '',
        flowCode: '',
        targetFlag: '1',
        grade: ''
      }
      this.$http.post('/eas-robot/targetData/getTargetData', param1).then((res) => {
        const res_data = res.data.data
        this.timernalRunStatus = res_data
        this.setAnimationList(res_data.length)
      })
    }
  },

  mounted() {
    this.initPage()
  }
}
</script>
<style lang="scss" scoped>
.monitor-view {
  width: 100%;
  display: flex;
  justify-content: center;
  //   align-items: center;

  .left {
    width: 532 * $width;
    margin-left: 40 * $width;

    .left-title {
      height: 32 * $height;
    }
    .left-chart1 {
      height: 158 * $height;
      margin-top: 2 * $height;
      display: flex;
      .liq {
        height: 100%;
        flex: 1;
      }
    }
    .left-chart2 {
      height: 490 * $height;
      margin-top: 8 * $height;
      position: relative;
      overflow: hidden;
      .lengends {
        position: absolute;
        right: 30 * $width;
        top: 18 * $height;
        display: flex;
        li {
          font-size: 12 * $font;
          font-weight: bold;
          padding-left: 12 * $width;
          position: relative;
          margin-left: 30 * $width;
          &::before {
            content: '';
            display: block;
            position: absolute;
            width: 10 * $width;
            height: 10 * $height;
            background-color: #00aeff;
            border-radius: 10 * $width;
            left: -5 * $width;
            top: 1 * $height;
          }
        }
        li.cur {
          &::before {
            background-color: #dfa70f;
          }
        }
      }
      .chart-line-list {
        margin-top: 17 * $height;
        height: 410 * $height;
        position: relative;
        overflow: hidden;
        .inner-scroll-box {
          width: 100%;
          position: absolute;
          left: 0;
          top: 0;
          animation: monitor-left-chart2 25s linear infinite 1s forwards;
        }
      }
    }
    // .left-chart3 {
    //   height: 190 * $height;
    //   margin-top: 8 * $height;
    //   position: relative;
    //   .table-box {
    //     margin-top: 15 * $height;
    //     .table-body {
    //       li {
    //         padding: 8 * $height 0;
    //       }
    //     }
    //   }
    // }
    .left-chart4 {
      height: 250 * $height;
      margin-top: 8 * $height;
      .title {
        padding: 15 * $height 30 * $width;
        position: relative;
        .unit {
          width: 100 * $width;
          position: absolute;
          right: 0;
          bottom: 18 * $height;
          font-size: 13 * $font;
          font-weight: bold;
        }
      }
      .charts-box {
        // margin-top: 15 * $height;
        height: 175 * $height;
        padding: 0 * $height 10 * $width;
        // height: 110 * $height;
      }
    }
    .padding-layout {
      padding: 15 * $height 25 * $width;
    }
  }
  .center {
    flex: 1;
    padding: 0 10 * $width;
  }
  .right {
    width: 532 * $width;
    margin-right: 40 * $width;

    .right-title {
      height: 32 * $height;
    }
    .right-chart2 {
      height: 250 * $height;
      margin-top: 8 * $height;
    }
    .right-chart3 {
      height: 750 * $height;
      margin-top: 8 * $height;
      .table-title {
        .flow {
          flex: 25;
        }
        .status {
          flex: 15;
        }
        .termicode {
          flex: 10;
        }
        .depart {
          flex: 18;
        }
        .ip {
          flex: 20;
        }
      }
      .table-body-layout {
        position: relative;
        height: 610 * $height;
        overflow: hidden;
        margin-top: 15 * $height;
      }
      .table-body {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        // animation: monitor-right-chart3 160s linear infinite forwards;
        li {
          //   height: 50 * $height;
          //   line-height: 50 * $height;
          margin-top: 0 * $height;
          span {
            font-size: 14 * $font;
            .run {
              background-color: #07d79a;
            }
            .free {
              background-color: #00aeff;
            }
            .exc {
              background-color: #ff3330;
            }
            .wait {
              background-color: #00aeff;
            }
          }
          .flow {
            flex: 25;
          }
          .status {
            flex: 15;
          }
          .termicode {
            flex: 10;
          }
          .depart {
            flex: 18;
          }
          .ip {
            flex: 20;
          }
        }
      }
    }
    .padding-layout {
      padding: 15 * $height 30 * $width;
    }
  }
  #unit-source-use-status {
    animation: over-turn 5s linear infinite forwards 3s;
  }
}
// @keyframes monitor-right-chart3 {
//   0% {
//     top: 0 * $height;
//     opacity: 1;
//   }
//   98% {
//     top: -6240 * $height;
//     opacity: 1;
//   }
//   100% {
//     top: -6245 * $height;
//     opacity: 0;
//   }
// }
@keyframes monitor-left-chart2 {
  0% {
    top: 0 * $height;
    opacity: 1;
  }
  10% {
    top: 0 * $height;
    opacity: 1;
  }
  85% {
    top: -740 * $height;
    opacity: 1;
  }
  95% {
    top: -740 * $height;
    opacity: 1;
  }
  100% {
    top: -745 * $height;
    opacity: 0;
  }
}
</style>
