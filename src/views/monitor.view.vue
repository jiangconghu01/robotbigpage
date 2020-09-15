<template>
  <div class="monitor-view">
    <div class="left">
      <div class="left-title">
        <layoutTitle :direction="'left'">
          <template v-slot:left>
            资源池统计
          </template>
        </layoutTitle>
      </div>
      <div class="left-chart1 bg_temp_1">
        <div class="liq">
          <liquidfill :color="'rgba(0, 210, 255, 1)'" :percent="0.55">
            业务资源等待率
          </liquidfill>
        </div>
        <div class="liq">
          <liquidfill :color="'rgba(244, 166, 40, 1)'" :percent="0.35">
            业务资源等待率
          </liquidfill>
        </div>
        <div class="liq">
          <liquidfill :color="'rgba(4, 228, 196, 1)'" :percent="0.75">
            终端资源活跃率
          </liquidfill>
        </div>
        <div class="liq">
          <liquidfill :percent="0.15">
            终端资源周转率
          </liquidfill>
        </div>
      </div>
      <div class="left-chart2 bg_temp_1 padding-layout">
        <chartTitle>分流程分时终端占用情况</chartTitle>
        <div class="title_part_line"></div>
        <ul class="lengends">
          <li class="lengend">历史趋势</li>
          <li class="lengend cur">实时趋势</li>
        </ul>
        <div class="chart-line-list" id="list-1">
          <scrollBox :options="{ allNum: 4, itemHeight: 70, selector: '#list-1 .termi-line-item' }">
            <chartScrollItem class="termi-line-item scroll-item" :index="1">租赁类资产稽核表编制流程</chartScrollItem>
            <chartScrollItem class="termi-line-item scroll-item" :index="2">支付失败清单整理流程</chartScrollItem>
            <chartScrollItem class="termi-line-item scroll-item" :index="3">支付失败清单整理流程</chartScrollItem>
            <chartScrollItem class="termi-line-item scroll-item" :index="4">支付失败清单整理流程</chartScrollItem>
            <chartScrollItem class="termi-line-item scroll-item" :index="1">支付失败清单整理流程</chartScrollItem>
            <chartScrollItem class="termi-line-item scroll-item" :index="2">支付失败清单整理流程</chartScrollItem>
            <chartScrollItem class="termi-line-item scroll-item" :index="3">支付失败清单整理流程</chartScrollItem>
            <chartScrollItem class="termi-line-item scroll-item" :index="4">支付失败清单整理流程</chartScrollItem>
          </scrollBox>
        </div>
      </div>
      <div class="left-chart3 bg_temp_1 padding-layout">
        <chartTitle>各单位资源使用情况</chartTitle>
        <div class="title_part_line"></div>
        <div class="table-box">
          <ul class="table-title">
            <li>单位名称</li>
            <li>累计终端使用时长</li>
            <li>本月终端使用时长</li>
            <li>环比</li>
          </ul>
          <ul class="table-body">
            <li v-for="(item, index) in unitTimernalSourceList" :key="index">
              <span class="name">{{ item.name }}</span>
              <span class="accumulate">{{ item.accumulateTime }}</span>
              <span class="curmonth">{{ item.curMonthTime }}</span>
              <span class="relativeratio">{{ item.relativeRatio }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="left-chart4 bg_temp_1 padding-layout">
        <chartTitle>终端资源使用情况</chartTitle>
        <div class="title_part_line"></div>
        <div class="charts-box">
          <termianlSourceLeftBottom></termianlSourceLeftBottom>
        </div>
      </div>
    </div>
    <div class="center">
      <div class="top-map">
        <div id="china-map" class="map-container"></div>
        <div class="map-scale-title">业务量热力级别</div>
        <div class="scale">
          <ul>
            <li v-for="(item, index) in Array.from({ length: 10 })" :key="index">{{ index + 1 }}</li>
          </ul>
        </div>
      </div>
      <div class="bottom-list">
        <dv-border-box-8 :reverse="true">
          <div class="company-list">
            <ul>
              <li v-for="item in companyList" :key="item.name + (Math.random() * 100).toFixed(1)" :style="{ backgroundColor: item.color }">
                <span class="company">{{ item.name }}</span>
                <span class="value">业务量：{{ item.value }}笔</span>
              </li>
            </ul>
          </div>
        </dv-border-box-8>
      </div>
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
      <div class="right-chart2 bg_temp_1 padding-layout">
        <chartTitle>终端异常情况（日）</chartTitle>
        <div class="title_part_line"></div>
        <terminalDayExc></terminalDayExc>
      </div>
      <div class="right-chart3 bg_temp_1 padding-layout">
        <chartTitle>终端实时运行状态 </chartTitle>
        <div class="title_part_line"></div>
        <div class="table-box">
          <ul class="table-title">
            <li class="index">序号</li>
            <li class="termicode">终端编号</li>
            <li class="ip">IP</li>
            <li class="status">状态</li>
          </ul>
          <ul class="table-body">
            <li v-for="(item, index) in timernalRunStatus" :key="index">
              <span class="index">{{ item.index }}</span>
              <span class="termicode">{{ item.termicode }}</span>
              <span class="ip">{{ item.ip }}</span>

              <span class="status" v-if="item.status == 'run'"> <i class="run button">运行</i></span>
              <span class="status" v-else-if="item.status == 'free'"><i class="free button">闲置</i></span>
              <span class="status" v-else><i class="exc button">异常</i></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import layoutTitle from '@/components/layoutTitle'
import chartTitle from '@/components/chartTitle'
import liquidfill from '@/components/monitor/liquidfill'
import map from '@/chartconfig/map.js'
import chinajson from '@/assets/json/china.json'
import chartScrollItem from '@/components/monitor/terminalLine.vue'
import termianlSourceLeftBottom from '@/components/monitor/termianlSourceLeftBottom.vue'
import terminalDayExc from '@/components/monitor/terminalDayExc.vue'
import terminalDaytopView from '@/components/monitor/terminalDaytopView.vue'
import scrollBox from '@/components/scrollBox'
export default {
  data() {
    return {
      companyList: [
        { name: 'IT公司', value: 99, color: '#E74335' },
        { name: '互联网', value: 99, color: '#E56B09' },
        { name: '铁通公司', value: 99, color: '#F1C54F' },
        { name: '集团本部', value: 99, color: '#03D9D1' },
        { name: '杭研院', value: 99, color: '#1D7FC3' },
        { name: '咪咕文化', value: 99, color: '#1D7FC3' },
        { name: '物联网', value: 99, color: '#1D7FC3' },
        { name: '物联网', value: 99, color: '#1D7FC3' },
        { name: '物联网', value: 99, color: '#1D7FC3' },
        { name: '物联网', value: 99, color: '#1D7FC3' }
      ],
      unitTimernalSourceList: [
        { name: '某某某某单位', accumulateTime: 2992, curMonthTime: 222, relativeRatio: '55%' },
        { name: '某某某某单位2', accumulateTime: 155, curMonthTime: 22, relativeRatio: '55%' }
      ],
      timernalRunStatus: [
        { index: 1, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', status: 'run' },
        { index: 2, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', status: 'free' },
        { index: 3, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', status: 'exc' },
        { index: 4, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', status: 'free' },
        { index: 5, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', status: 'free' }
      ]
    }
  },
  created() {},
  components: { layoutTitle, chartTitle, liquidfill, scrollBox, chartScrollItem, terminalDayExc, terminalDaytopView, termianlSourceLeftBottom },
  computed: {},
  methods: {
    inintMap() {
      const map_box = this.$echarts.init(document.getElementById('china-map'))
      this.$echarts.registerMap('china', chinajson)
      map_box.setOption(map)
    }
  },
  mounted() {
    this.inintMap()
  }
}
</script>
<style lang="scss" scoped>
.monitor-view {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

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
      height: 350 * $height;
      margin-top: 8 * $height;
      position: relative;
      overflow-y: hidden;
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
        height: 280 * $height;
      }
    }
    .left-chart3 {
      height: 190 * $height;
      margin-top: 8 * $height;
      position: relative;
      .table-box {
        margin-top: 15 * $height;
        .table-body {
          li {
            padding: 8 * $height 0;
          }
        }
      }
    }
    .left-chart4 {
      height: 190 * $height;
      margin-top: 8 * $height;
      .charts-box {
        margin-top: 15 * $height;
        height: 110 * $height;
      }
    }
    .padding-layout {
      padding: 15 * $height 25 * $width;
    }
  }
  .center {
    flex: 1;
    padding: 0 10 * $width;

    .top-map {
      margin-top: 60 * $height;
      height: 660 * $height;
      position: relative;
      .map-container {
        width: 100%;
        height: 100%;
      }
      .map-scale-title {
        position: absolute;
        padding-left: 5 * $width;
        width: 225 * $width;
        height: 29 * $height;
        line-height: 29 * $height;
        font-size: 14 * $font;
        left: 15 * $width;
        bottom: 70 * $height;
        background: linear-gradient(90deg, #1d7fc3 0%, rgba(80, 236, 255, 0) 100%);
      }
      .scale {
        position: absolute;
        width: 225 * $width;
        height: 20 * $height;
        font-size: 12 * $font;
        left: 15 * $width;
        bottom: 0 * $height;
        ul {
          width: 100%;
          height: 100%;
          display: flex;
          li {
            flex: 1;
            text-align: center;
          }
        }
      }
    }
    .bottom-list {
      margin-top: 8 * $height;
      height: 164 * $height;
      .company-list {
        height: 100%;
        ul {
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          //   align-content: center;
          flex-wrap: wrap;
          li {
            margin: 0 15 * $width;
            width: 120 * $width;
            height: 64 * $height;
            padding: 5 * $height 0;
            box-shadow: -2px 2px 8px 2px rgba(0, 0, 0, 0.26);
            // border: 1 * $width solid rgba(255, 255, 255, 0.438);
            // display: flex;
            // flex-direction: column;
            & > span {
              //   flex: 1;
              display: block;
              height: 25 * $height;
              line-height: 25 * $height;
              font-size: 13 * $font;
              font-weight: 400;
              padding-left: 8 * $width;
            }
          }
        }
      }
    }
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
      height: 350 * $height;
      margin-top: 8 * $height;
    }
    .right-chart3 {
      height: 388 * $height;
      margin-top: 8 * $height;
      .table-title {
        .index {
          flex: 2;
        }
        .status {
          flex: 2;
        }
        .termicode {
          flex: 4;
        }
        .ip {
          flex: 4;
        }
      }
      .table-body {
        margin-top: 15 * $height;
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
          }
          .index {
            flex: 2;
          }
          .status {
            flex: 2;
          }
          .termicode {
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
}
</style>
