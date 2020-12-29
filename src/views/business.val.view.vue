<template>
  <div class="businessval-view">
    <div class="left">
      <div class="left-title">
        <layoutTitle :direction="'left'">
          <template v-slot:left>
            作业统计(截止目前)
          </template>
        </layoutTitle>
      </div>
      <div class="left-num1 bg_temp_1 padding-layout">
        <chartTitle>累计作业执行量（笔）</chartTitle>
        <div class="title_part_line"></div>
        <ul class="drowp-list accumulate-work">
          <li v-for="(item, index) in workNumArr" :key="index" :class="typeof item === 'number' ? 'num' : 'text'">
            <i>{{ item }}</i>
          </li>
        </ul>
      </div>
      <div class="left-num2 bg_temp_1 padding-layout">
        <chartTitle>节省人时（小时）</chartTitle>
        <div class="title_part_line"></div>
        <ul class="drowp-list accumulate-work">
          <li v-for="(item, index) in cutDownTimeArr" :key="index" :class="typeof item === 'number' ? 'num' : 'text'">
            <i>{{ item }}</i>
          </li>
        </ul>
      </div>
      <div class="left-chart3 bg_temp_1">
        <div class="title">
          <chartTitle>各流程累计作业量(笔)</chartTitle>
          <div class="title_part_line"></div>
        </div>
        <div class="bar-list-layout">
          <unitDayWorkStatus :list="leftBottomList"></unitDayWorkStatus>
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
            作业监控（日）
          </template>
        </layoutTitle>
      </div>
      <div class="right-chart1 bg_temp_1">
        <workRightTop :data="rightTopData"></workRightTop>
      </div>

      <div class="right-chart2 bg_temp_1">
        <div class="title">
          <chartTitle>各流程当日作业量占比</chartTitle>
          <div class="title_part_line"></div>
        </div>
        <div class="bar-list-layout">
          <div class="bar-list-box">
            <barScrollItem class="bar-list" :index="index + 1" :datanum="Number(item.value)" v-for="(item, index) in rightCenterArr" :key="item.flowName" :name="item.flowName"> </barScrollItem>
            <!-- <barScrollItem class="bar-list" :index="2" :datanum="0" :max="62">
              <div>资产转资确认</div>
              <div>流程</div>
            </barScrollItem>
            <barScrollItem class="bar-list" :index="3" :datanum="0" :max="62">
              <div>竣工决算辅助</div>
              <div>审核流程</div>
            </barScrollItem>
            <barScrollItem class="bar-list" :index="4" :datanum="1" :max="62">
              <div>租赁类资产稽</div>
              <div>核表编制流程</div>
            </barScrollItem>
            <barScrollItem class="bar-list" :index="5" :datanum="7" :max="62">
              <div>现金流量表编</div>
              <div>制流程</div>
            </barScrollItem>
            <barScrollItem class="bar-list" :index="6" :datanum="23" :max="62">
              <div>月末关账检查</div>
              <div>流程</div>
            </barScrollItem>
            <barScrollItem class="bar-list" :index="7" :datanum="0" :max="62">
              <div>开账关账管理</div>
              <div>流程</div>
            </barScrollItem>
            <barScrollItem class="bar-list" :index="8" :datanum="3" :max="62">
              <div>应交增值税结</div>
              <div>转计提流程</div>
            </barScrollItem>
            <barScrollItem class="bar-list" :index="9" :datanum="18" :max="62">
              <div>纳税申报流程</div>
              <div></div>
            </barScrollItem>
            <barScrollItem class="bar-list" :index="10" :datanum="1" :max="62">
              <div>关联交易表填</div>
              <div>报流程</div>
            </barScrollItem> -->
          </div>
        </div>
      </div>
      <div class="right-chart3 bg_temp_1 padding-layout">
        <chartTitle>各单位实时作业状态</chartTitle>
        <div class="title_part_line"></div>
        <div class="table-box">
          <ul class="table-title">
            <li class="index">序号</li>
            <li class="unitname">单位名称</li>
            <li class="workflow">作业流程</li>
            <li class="status">状态</li>
          </ul>
          <div class="table-body">
            <ul class="table-body-scroll" id="business-right-charts3-box">
              <li v-for="(item, index) in rightBottomList" :key="index">
                <span class="index">{{ index + 1 }}</span>
                <span class="unitname">{{ item.companyName }}</span>
                <span class="workflow">{{ item.flowName }}</span>

                <span class="status" v-if="item.robotClient == '完成'">
                  <i class="finish button">{{ item.robotClient }}</i></span
                >
                <span class="status" v-else-if="item.robotClient == '执行'"
                  ><i class="exe button">{{ item.robotClient }}</i></span
                >
                <span class="status" v-else-if="item.robotClient == '预占'"
                  ><i class="beforhandle button">{{ item.robotClient }}</i></span
                >
                <span class="status" v-else-if="item.robotClient == '排队'"
                  ><i class="lineup button">{{ item.robotClient }}</i></span
                >
                <span class="status" v-else-if="item.robotClient == '异常'"
                  ><i class="exc button">{{ item.robotClient }}</i></span
                >
                <span class="status" v-else></span>
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
import workRightTop from '@/components/businessval/workRightTop.vue'
import unitDayWorkStatus from '@/components/businessval/unitDayWorkStatus2.vue'
import barScrollItem from '@/components/chartScrollItem.vue'
import centerMap from '@/components/centerMap' //路由缓存后不会刷新，静态页面演示时候用
import { busLastList } from './mockdata'
import { getKeyframes, getCurrentDate, round } from '@/util/comFunction'
export default {
  name: 'Businessval',
  data() {
    return {
      leftTopData: {
        work_num: 0,
        cutdown_time: 0
      },
      leftBottomList: [],
      rightTopData: {
        current: 0,
        finish: 0,
        exc: 0
      },
      rightCenterList: [],
      rightBottomList: [],
      //执行 ，排队，异常
      unitWorkingStatus: busLastList,
      unitTimernalSourceList: [
        { name: '某某某某单位', accumulateTime: 2992, curMonthTime: 222, relativeRatio: '55%' },
        { name: '某某某某单位2', accumulateTime: 155, curMonthTime: 22, relativeRatio: '55%' }
      ]
    }
  },
  created() {},
  components: { layoutTitle, chartTitle, workRightTop, unitDayWorkStatus, barScrollItem, centerMap },
  computed: {
    workNumArr() {
      const list = (this.leftTopData.work_num + '').split('')
      //   const temp = [0, 0, 0, 0, '亿', 0, 0, 0, 0, '万', 0, 0, 0, 0]
      const temp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      const len = temp.length
      let list_start = 0
      for (let index = len - 1; index >= 0; index--) {
        if (list[list_start] !== undefined) {
          temp[index] = Number(list[list_start])
          list_start++
        } else {
          break
        }
      }
      return [...temp.slice(0, 4), '亿', ...temp.slice(4, 8), '万', ...temp.slice(-4)]
    },
    cutDownTimeArr() {
      const list = (this.leftTopData.cutdown_time + '').split('')
      const temp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      const len = temp.length
      let list_start = 0
      for (let index = len - 1; index >= 0; index--) {
        if (list[list_start] !== undefined) {
          temp[index] = Number(list[list_start])
          list_start++
        } else {
          break
        }
      }
      return [...temp, 'h']
    },
    rightCenterArr() {
      const sum = this.rightCenterList.reduce((pre, curr) => {
        return (pre += Number(curr.value))
      }, 0)
      return this.rightCenterList.map((val) => {
        if (sum === 0 || !sum) {
          val.percent = 0
        } else {
          val.percent = val.value / sum
        }
        return val
      })
    }
  },
  methods: {
    initPage() {
      this.leftTop()
      this.leftBottom()
      //   this.centerMap()
      //   this.centerBottom()
      this.rightTop()
      this.rightCenter()
      this.rightBottom()
    },
    setAnimationList(listLength) {
      const h = listLength * 50 - 255
      if (h < 50) {
        return
      }
      const s = (h / 1000) * 40
      const kf = getKeyframes('business-right-charts3', 2)
      kf.styleSheet.deleteRule(kf.index)
      kf.styleSheet.insertRule(`@keyframes business-right-charts3 {
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
      const ball = document.getElementById('business-right-charts3-box')
      ball.setAttribute('style', 'animation:business-right-charts3 ' + s + 's linear infinite forwards;')
    },
    leftTop() {
      const date = getCurrentDate()
      const param1 = {
        targetCode: 'YW_000001',
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
        this.leftTopData.work_num = res_data[0] ? round(res_data[0].value, 0) : 0
      })
      this.$http.post('/eas-robot/targetData/getTargetData', Object.assign(param1, { targetCode: 'YW_000002' })).then((res) => {
        const res_data = res.data.data
        this.leftTopData.cutdown_time = res_data[0] ? round(res_data[0].value, 0) : 0
      })
    },

    leftBottom() {
      const date = getCurrentDate()
      const param1 = {
        targetCode: 'YW_000003',
        startDate: date.current,
        startTime: '',
        endDate: date.current,
        endTime: '',
        orgCode: '',
        flowCode: '',
        targetFlag: '4',
        grade: ''
      }
      const req_current_month = this.$http.post('/eas-robot/targetData/getTargetData', param1)
      const req_before_month = this.$http.post('/eas-robot/targetData/getTargetData', Object.assign(param1, { targetCode: 'YW_000004' }))
      const req_relative_month = this.$http.post('/eas-robot/targetData/getTargetData', Object.assign(param1, { targetCode: 'YW_000005' }))
      Promise.all([req_current_month, req_before_month, req_relative_month]).then(([res1, res2, res3]) => {
        this.leftBottomList = [res1.data.data, res2.data.data, res3.data.data]
      })
    },
    rightTop() {
      const date = getCurrentDate()
      const param1 = {
        targetCode: 'YW_000007',
        startDate: date.current,
        startTime: '',
        endDate: date.current,
        endTime: '',
        orgCode: '',
        flowCode: '',
        targetFlag: '4',
        grade: ''
      }
      const req_current_month = this.$http.post('/eas-robot/targetData/getTargetData', param1)
      const req_before_month = this.$http.post('/eas-robot/targetData/getTargetData', Object.assign(param1, { targetCode: 'YW_000008' }))
      const req_relative_month = this.$http.post('/eas-robot/targetData/getTargetData', Object.assign(param1, { targetCode: 'YW_000009' }))
      Promise.all([req_current_month, req_before_month, req_relative_month]).then(([res1, res2, res3]) => {
        this.rightTopData = {
          current: res1.data.data[0].value,
          finish: res2.data.data[0].value,
          exc: res3.data.data[0].value
        }
      })
    },
    rightCenter() {
      const date = getCurrentDate()
      const param1 = {
        targetCode: 'YW_000010',
        startDate: date.current,
        startTime: '',
        endDate: date.current,
        endTime: '',
        orgCode: '',
        flowCode: '',
        targetFlag: '4',
        grade: ''
      }
      this.$http.post('/eas-robot/targetData/getTargetData', param1).then((res) => {
        const res_data = res.data.data
        this.rightCenterList = res_data
      })
    },
    rightBottom() {
      const date = getCurrentDate()
      const param1 = {
        targetCode: 'YW_000011',
        startDate: date.current,
        startTime: '',
        endDate: date.current,
        endTime: '',
        orgCode: '',
        flowCode: '',
        targetFlag: '4',
        grade: ''
      }
      this.$http.post('/eas-robot/targetData/getTargetData', param1).then((res) => {
        const res_data = res.data.data
        this.rightBottomList = res_data
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
.businessval-view {
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
    .left-num1 {
      height: 118 * $height;
      margin-top: 2 * $height;
      padding-left: 20 * $width;
      padding-right: 0 * $width;
    }
    .left-num2 {
      height: 118 * $height;
      margin-top: 8 * $height;
      padding-left: 20 * $width;
      padding-right: 0 * $width;
    }
    .left-chart3 {
      height: 661 * $height;
      margin-top: 8 * $height;
      .title {
        padding: 15 * $height 30 * $width;
      }
      .bar-list-layout {
        height: 590 * $height;
        position: relative;
        overflow: hidden;
      }
      .bar-list-box {
        // animation: business-left-chart2 17s linear infinite forwards;
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
      }
      .bar-list {
        padding-left: 10 * $width;
        padding-right: 0;
      }
    }
    // .left-chart4 {
    //   height: 190 * $height;
    //   margin-top: 8 * $height;
    //   .table-box {
    //     margin-top: 15 * $height;
    //     .table-body {
    //       li {
    //         padding: 8 * $height 0;
    //       }
    //     }
    //   }
    // }
    // .left-chart5 {
    //   height: 125 * $height;
    //   margin-top: 8 * $height;
    //   padding: 5 * $height 10 * $width;
    //   display: flex;
    //   .robot-left {
    //     width: 135 * $width;
    //     font-size: 14 * $font;
    //     .t1 {
    //       height: 75 * $height;
    //       line-height: 75 * $height;
    //       font-weight: 400;
    //       //   text-align: center;
    //     }
    //     .t2 {
    //       height: 37 * $height;
    //       line-height: 37 * $height;
    //       font-weight: 400;
    //       //   text-align: center;
    //     }
    //   }
    //   .robot-list {
    //     flex: 1;
    //     overflow: hidden;
    //     .table-box {
    //       width: 100%;
    //       height: 100%;
    //       ul {
    //         width: 100%;
    //         white-space: nowrap;
    //       }
    //       .item {
    //         padding: 0 5 * $width;
    //         // float: left;
    //         display: inline-block;
    //         span {
    //           display: block;
    //         }
    //         .icon {
    //           height: 46 * $height;
    //         }
    //         .name {
    //           height: 24 * $height;
    //           line-height: 24 * $height;
    //         }
    //         .num {
    //           height: 20 * $height;
    //           line-height: 20 * $height;
    //           text-align: center;
    //         }
    //       }
    //     }
    //   }
    // }
    .drowp-list {
      margin-top: 25 * $height;
      li.num {
        &:nth-child(1) {
          margin-left: 0;
        }
        width: 32 * $width;
        height: 39 * $height;
        line-height: 39 * $height;
        background: rgba(0, 174, 255, 0.8);
        font-size: 34 * $font;
        font-family: Arial;
        font-weight: bold;
        text-align: center;
        margin-left: 6 * $width;
        float: left;
      }
      li.text {
        font-size: 12 * $font;
        font-weight: bold;
        height: 39 * $height;
        width: 10 * $width;
        margin-left: 5 * $width;
        float: left;
        position: relative;
        i {
          position: absolute;
          bottom: 0;
        }
      }
    }
  }
  .center {
    flex: 1;
    padding: 0 10 * $width;
    // .top-chart {
    //   margin-top: 40 * $height;
    //   height: 600 * $height;
    //   .title {
    //     width: 100%;
    //     height: 105 * $height;
    //     padding: 20 * $height 30 * $width;
    //     padding-top: 30 * $height;
    //     position: relative;
    //     .title_part_line {
    //       top: 85 * $height;
    //     }
    //   }
    //   .container {
    //     height: 489 * $height;
    //   }
    // }
    // .bottom-line {
    //   margin-top: 8 * $height;
    //   height: 258 * $height;
    //   background-color: rgba(0, 0, 0, 0.384);
    //   .title {
    //     padding: 15 * $height 30 * $width;
    //     position: relative;
    //     .title_part_line {
    //       top: 60 * $height;
    //     }
    //     .lengends {
    //       position: absolute;
    //       right: 30 * $width;
    //       top: 18 * $height;
    //       display: flex;
    //       li {
    //         font-size: 12 * $font;
    //         font-weight: 400;
    //         padding-left: 12 * $width;
    //         position: relative;
    //         margin-left: 30 * $width;
    //         &::before {
    //           content: '';
    //           display: block;
    //           position: absolute;
    //           width: 10 * $width;
    //           height: 10 * $height;
    //           background-color: #eea42c;
    //           left: -5 * $width;
    //           top: 1 * $height;
    //         }
    //       }
    //       li.cur {
    //         &::before {
    //           background-color: #669aff;
    //         }
    //       }
    //     }
    //   }
    //   .parallel-box {
    //     position: absolute;
    //     top: 60 * $height;
    //     left: 0;
    //     height: 198 * $height;
    //     width: 100%;
    //   }
    // }
  }
  .right {
    width: 532 * $width;
    margin-right: 40 * $width;
    .right-title {
      height: 32 * $height;
    }
    .right-chart1 {
      height: 158 * $height;
      margin-top: 2 * $height;
    }
    .right-chart2 {
      height: 350 * $height;
      //   height: 661 * $height;
      margin-top: 8 * $height;
      .title {
        padding: 15 * $height 30 * $width;
      }
      .bar-list-layout {
        height: 260 * $height;
        position: relative;
        overflow: hidden;
      }
      .bar-list-box {
        animation: business-right-chart2 17s linear infinite forwards;
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
      }
      .bar-list {
        padding-left: 10 * $width;
        padding-right: 0;
      }
    }
    .right-chart3 {
      height: 388 * $height;
      margin-top: 8 * $height;
      .table-title {
        .index {
          flex: 2;
        }
        .status {
          flex: 3;
        }
        .unitname {
          flex: 3;
        }
        .workflow {
          flex: 4;
        }
      }
      .table-body {
        margin-top: 15 * $height;
        height: 255 * $height;
        overflow: hidden;
        position: relative;
        li {
          //   height: 50 * $height;
          //   line-height: 50 * $height;
          margin-top: 0 * $height;
          span {
            font-size: 14 * $font;
            .finish {
              background-color: #1d7fc4;
            }
            .exe {
              background-color: #6699ff;
            }
            .beforhandle {
              background-color: #f4a527;
            }
            .lineup {
              background-color: #5defda;
            }
            .exc {
              background-color: #ff3330;
            }
          }
          .index {
            flex: 2;
          }
          .status {
            flex: 3;
          }
          .unitname {
            flex: 3;
          }
          .workflow {
            flex: 4;
          }
        }
      }
      .table-body-scroll {
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        // animation: business-right-charts3 15s linear infinite forwards;
      }
    }
  }
  .padding-layout {
    padding: 15 * $height 30 * $width;
  }
  #unit-work-run-status {
    animation: over-turn 5s linear infinite forwards 3s;
  }
}

@keyframes business-right-chart2 {
  0% {
    top: 0 * $height;
    opacity: 1;
  }
  90% {
    top: -340 * $height;
    opacity: 1;
  }
  100% {
    top: -345 * $height;
    opacity: 0;
  }
}
</style>
