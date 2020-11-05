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
          <liquidfill :color="'rgba(0, 210, 255, 1)'" :percent="0.55">
            机器人作业率
          </liquidfill>
        </div>
        <div class="liq">
          <liquidfill :color="'rgba(244, 166, 40, 1)'" :percent="0.35">
            机器人闲置率
          </liquidfill>
        </div>
        <div class="liq">
          <liquidfill :color="'rgba(4, 228, 196, 1)'" :percent="0.75">
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
          <!-- <li class="lengend">运行小时</li> -->
        </ul>
        <div class="chart-line-list" id="list-1">
          <!-- <scrollBox :options="{ allNum: 4, itemHeight: 70, selector: '#list-1 .termi-line-item' }">
            <chartScrollItem class="termi-line-item scroll-item" :index="1">租赁类资产稽核表编制流程</chartScrollItem>
            <chartScrollItem class="termi-line-item scroll-item" :index="2">支付失败清单整理流程</chartScrollItem>
            <chartScrollItem class="termi-line-item scroll-item" :index="3">支付失败清单整理流程</chartScrollItem>
            <chartScrollItem class="termi-line-item scroll-item" :index="4">支付失败清单整理流程</chartScrollItem>
            <chartScrollItem class="termi-line-item scroll-item" :index="1">支付失败清单整理流程</chartScrollItem>
            <chartScrollItem class="termi-line-item scroll-item" :index="2">支付失败清单整理流程</chartScrollItem>
            <chartScrollItem class="termi-line-item scroll-item" :index="3">支付失败清单整理流程</chartScrollItem>
            <chartScrollItem class="termi-line-item scroll-item" :index="4">支付失败清单整理流程</chartScrollItem>
          </scrollBox> -->
          <chartScrollItem class="termi-line-item scroll-item" :index="1">支付失败清单整理</chartScrollItem>
          <chartScrollItem class="termi-line-item scroll-item" :index="2">资产转资确认流程</chartScrollItem>
          <chartScrollItem class="termi-line-item scroll-item" :index="3">竣工决算辅助审核流程</chartScrollItem>
          <!-- <chartScrollItem class="termi-line-item scroll-item" :index="4">租赁类资产稽核表编制流程</chartScrollItem>
          <chartScrollItem class="termi-line-item scroll-item" :index="5">现金流量表编制流程 </chartScrollItem> -->
        </div>
        <div class="parallel-box" id="parallel-exc-box"></div>
      </div>
      <!-- <div class="left-chart3 bg_temp_1 padding-layout">
        <chartTitle>各单位资源使用情况</chartTitle>
        <div class="title_part_line"></div>
        <div class="table-box">
          <ul class="table-title">
            <li>单位名称</li>
            <li>累计终端使用时长</li>
            <li>本月终端使用时长</li>
            <li>环比</li>
          </ul>
          <ul class="table-body" id="unit-source-use-status">
            <li v-for="(item, index) in unitTimernalSourceList" :key="index">
              <span class="name">{{ item.name }}</span>
              <span class="accumulate">{{ item.accumulateTime }}</span>
              <span class="curmonth">{{ item.curMonthTime }}</span>
              <span class="relativeratio">{{ item.relativeRatio }}</span>
            </li>
          </ul>
        </div>
      </div> -->
      <div class="left-chart4 bg_temp_1">
        <div class="title">
          <chartTitle>资源占用情况</chartTitle>
          <div class="title_part_line"></div>
        </div>
        <div class="charts-box">
          <termianlSourceLeftBottom></termianlSourceLeftBottom>
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
        <terminalDaytopView></terminalDaytopView>
      </div>
      <!-- <div class="right-chart2 bg_temp_1 padding-layout">
        <chartTitle>终端异常情况（日）</chartTitle>
        <div class="title_part_line"></div>
        <terminalDayExc></terminalDayExc>
      </div> -->
      <div class="right-chart3 bg_temp_1 padding-layout">
        <chartTitle>终端实时运行状态 </chartTitle>
        <div class="title_part_line"></div>
        <div class="table-box">
          <ul class="table-title">
            <li class="index">机器人编号</li>
            <li class="termicode">终端IP</li>
            <li class="ip">运行流程</li>
            <li class="ip">运行单位</li>
            <li class="status">状态</li>
          </ul>
          <div class="table-body-layout">
            <ul class="table-body">
              <li v-for="(item, index) in timernalRunStatus" :key="index">
                <span class="index">{{ item.index }}</span>
                <span class="ip">{{ item.ip }}</span>
                <span class="termicode">{{ item.termicode }}</span>
                <span class="depart">{{ item.depart }}</span>

                <span class="status" v-if="item.status == 'run'"> <i class="run button">运行</i></span>
                <span class="status" v-else-if="item.status == 'free'"><i class="free button">闲置</i></span>
                <span class="status" v-else-if="item.status == 'wait'"><i class="wait button">排队</i></span>
                <span class="status" v-else><i class="exc button">异常</i></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="right-chart2 bg_temp_1 padding-layout">
        <chartTitle>流程异常情况（日）</chartTitle>
        <div class="title_part_line"></div>
        <!-- <terminalDayExc></terminalDayExc> -->
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
import terminalDayExc from '@/components/monitor/terminalDayExc.vue'
import terminalDaytopView from '@/components/monitor/terminalDaytopView.vue'
import scrollBox from '@/components/scrollBox'
import centerMap from '@/components/centerMap'
export default {
  data() {
    return {
      unitTimernalSourceList: [
        { name: '某某某某单位', accumulateTime: 2992, curMonthTime: 222, relativeRatio: '55%' },
        { name: '某某某某单位2', accumulateTime: 155, curMonthTime: 22, relativeRatio: '55%' }
      ],
      //执行，排队，异常
      timernalRunStatus: [
        { index: 1, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', depart: 'a单位', status: 'run' },
        { index: 2, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', depart: 'a单位', status: 'wait' },
        { index: 3, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', depart: 'a单位', status: 'exc' },
        { index: 4, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', depart: 'a单位', status: 'run' },
        { index: 5, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', depart: 'a单位', status: 'run' },
        { index: 6, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', depart: 'a单位', status: 'exc' },
        { index: 7, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', depart: 'a单位', status: 'wait' },
        { index: 8, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', depart: 'a单位', status: 'free' },
        { index: 9, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', depart: 'a单位', status: 'wait' },
        { index: 10, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', depart: 'a单位', status: 'run' },
        { index: 11, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', depart: 'a单位', status: 'run' },
        { index: 12, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', depart: 'a单位', status: 'run' },
        { index: 13, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', depart: 'a单位', status: 'exc' },
        { index: 14, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', depart: 'a单位', status: 'run' },
        { index: 15, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', depart: 'a单位', status: 'exc' },
        { index: 16, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', depart: 'a单位', status: 'wait' },
        { index: 17, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', depart: 'a单位', status: 'exc' },
        { index: 18, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', depart: 'a单位', status: 'wait' },
        { index: 19, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', depart: 'a单位', status: 'exc' },
        { index: 20, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', depart: 'a单位', status: 'wait' },
        { index: 21, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', depart: 'a单位', status: 'run' },
        { index: 22, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', depart: 'a单位', status: 'wait' },
        { index: 23, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', depart: 'a单位', status: 'exc' },
        { index: 24, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', depart: 'a单位', status: 'wait' }
      ]
    }
  },
  created() {},
  components: { layoutTitle, chartTitle, liquidfill, scrollBox, chartScrollItem, terminalDayExc, terminalDaytopView, termianlSourceLeftBottom, centerMap },
  computed: {},
  methods: {},
  mounted() {}
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
          font-weight: 400;
          padding-left: 12 * $width;
          position: relative;
          margin-left: 30 * $width;
          &::before {
            content: '';
            display: block;
            position: absolute;
            width: 6 * $width;
            height: 6 * $height;
            background-color: #00aeff;
            border-radius: 6 * $width;
            left: 0;
            top: 3 * $height;
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
        height: 390 * $height;
        .termi-line-item {
          margin-top: 20 * $height;
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
      }
      .charts-box {
        margin-top: 15 * $height;
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
    .right-chart1 {
    }
    .right-chart2 {
      height: 250 * $height;
      margin-top: 8 * $height;
    }
    .right-chart3 {
      height: 490 * $height;
      margin-top: 8 * $height;
      .table-title {
        .index {
          flex: 3;
        }
        .status {
          flex: 3;
        }
        .termicode {
          flex: 4;
        }
        .depart {
          flex: 4;
        }
        .ip {
          flex: 4;
        }
      }
      .table-body-layout {
        position: relative;
        height: 352 * $height;
        overflow: hidden;
        margin-top: 15 * $height;
      }
      .table-body {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        animation: monitor-right-chart3 17s linear infinite forwards;
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
          .index {
            flex: 3;
          }
          .status {
            flex: 3;
          }
          .termicode {
            flex: 4;
          }
          .depart {
            flex: 4;
          }
          .ip {
            flex: 4;
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
@keyframes monitor-right-chart3 {
  0% {
    top: 0 * $height;
    opacity: 1;
  }
  90% {
    top: -600 * $height;
    opacity: 1;
  }
  100% {
    top: -605 * $height;
    opacity: 0;
  }
}
</style>
