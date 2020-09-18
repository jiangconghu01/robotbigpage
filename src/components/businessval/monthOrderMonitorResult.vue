<template>
  <div class="month-order-monitor-result-box">
    <ul class="left">
      <li class="item" v-for="item in list" :key="item.name" :class="[item.iscur ? 'current' : '']">
        {{ item.name }}
      </li>
    </ul>
    <div class="right">
      <div class="right-top">
        <span class="succss">提交成功</span>
        <span class="manual">转人工处理</span>
      </div>
      <div class="charts-box">
        <ul class="title">
          <li>上月期末累计量</li>
          <li>本月新增量</li>
          <li>本月期末累计量</li>
        </ul>
        <div class="layer"></div>
        <div class="charts">
          <div class="scroll">
            <div class="before-month">
              <div class="l chart" id="before-chart-succss"></div>
              <div class="r chart" id="before-chart-manual"></div>
            </div>
            <div class="current-month">
              <div class="l chart" id="current-chart-succss"></div>
              <div class="r chart" id="current-chart-manual"></div>
            </div>
            <div class="after-month">
              <div class="l chart" id="after-chart-succss"></div>
              <div class="r chart" id="after-chart-manual"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { orderMonitorResultList } from '@/views/page.static.js'
import { option_before_succ, option_before_manaul, option_current_succ, option_current_manaul, option_after_succ, option_after_manaul } from '@/chartconfig/parabar.js'
export default {
  name: 'monthOrderMonitorResult',
  data() {
    return {
      list: orderMonitorResultList
    }
  },
  created() {},
  components: {},
  computed: {},
  methods: {
    initCharts() {
      const box1_1 = this.$echarts.init(document.getElementById('before-chart-succss'))
      box1_1.setOption(option_before_succ)
      const box1_2 = this.$echarts.init(document.getElementById('before-chart-manual'))
      box1_2.setOption(option_before_manaul)
      const box2_1 = this.$echarts.init(document.getElementById('current-chart-succss'))
      box2_1.setOption(option_current_succ)
      const box2_2 = this.$echarts.init(document.getElementById('current-chart-manual'))
      box2_2.setOption(option_current_manaul)
      const box3_1 = this.$echarts.init(document.getElementById('after-chart-succss'))
      box3_1.setOption(option_after_succ)
      const box3_2 = this.$echarts.init(document.getElementById('after-chart-manual'))
      box3_2.setOption(option_after_manaul)
    }
  },
  mounted() {
    // const cur = { name: this.list[0].name, iscur: true }
    // this.$set(this.list, 0, cur)
    this.list[0].iscur = true
    this.initCharts()
  }
}
</script>
<style lang="scss" scoped>
.month-order-monitor-result-box {
  width: 100%;
  height: 100%;
  //   padding-top: 15 * $height;
  display: flex;
  .left {
    width: 250 * $width;
    height: 450 * $height;
    overflow-y: hidden;
    .item {
      width: 244 * $width;
      height: 50 * $height;
      line-height: 50 * $height;
      font-size: 16 * $font;
      padding-left: 35 * $width;
      //   margin-top: 5 * $height;
      font-family: Microsoft YaHei;
      font-weight: bold;
    }
    .item.current {
      background-color: rgba(65, 189, 255, 0.314);
      border-left: 4 * $width solid #41beff;
      border-radius: 0 3px 3px 0;
    }
  }
  .right {
    flex: 1;
    .right-top {
      height: 50 * $height;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      span {
        font-size: 12 * $font;
        font-weight: 400;
        width: 100 * $width;
        margin-right: 30 * $width;
        // text-align: right;
        position: relative;
        &::before {
          display: inline-block;
          content: '';
          position: absolute;
          width: 10 * $width;
          height: 10 * $height;
          left: -20 * $width;
          top: 1 * $height;
        }
      }
      .succss::before {
        background-color: #41beff;
      }
      .manual::before {
        background-color: #5defda;
      }
    }
    .charts-box {
      position: relative;
      .title {
        height: 22 * $height;
        li {
          float: left;
          width: 33%;
          text-align: center;
          font-weight: 400;
        }
      }
      .layer {
        position: absolute;
        left: 194 * $width;
        top: -4 * $height;
        width: 140 * $width;
        height: 412 * $height;
        background-color: rgba(0, 174, 255, 0.226);
        border: 1 * $width solid rgba(255, 255, 255, 0.39);
        border-top: 2 * $width solid rgba(92, 228, 221, 0.863);
      }
      .charts {
        position: relative;
        width: 100%;
        height: 384 * $height;
        overflow: hidden;
        .scroll {
          position: absolute;
          left: 0;
          top: 0;
          display: flex;
          animation: business-center-charts1 17s linear infinite forwards;
          & > div {
            display: flex;
          }
          .before-month {
            width: 194 * $width;
            .l {
              width: 124 * $width;
            }
          }
          .current-month {
            width: 140 * $width;
          }
          .current-month {
            width: 140 * $width;
          }
          .chart {
            width: 70 * $width;
            height: 850 * $height;
          }
        }
      }
    }
  }
}

@keyframes business-center-charts1 {
  0% {
    top: 0 * $height;
    opacity: 1;
  }
  90% {
    top: -466 * $height;
    opacity: 1;
  }
  100% {
    top: -470 * $height;
    opacity: 0;
  }
}
</style>
