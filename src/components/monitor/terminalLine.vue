<template>
  <div class="line-box">
    <div class="num">{{ index }}</div>
    <div class="text">
      <div><slot></slot></div>
    </div>
    <div class="chart" ref="line-chart"></div>
  </div>
</template>
<script>
import line from '@/chartconfig/line.js'
export default {
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {}
  },
  created() {},
  components: {},
  computed: {},
  methods: {
    getLineDataOption() {
      const day = new Date().getDate()
      const echartData = []
      for (let index = 0; index < 30; index++) {
        echartData.push({
          name: index + 1,
          value1: index >= day ? 0 : (Math.random() * 45).toFixed(0),
          value2: index >= day ? 0 : (Math.random() * 68).toFixed(0)
        })
      }
      const xAxisData = echartData.map((v) => v.name)

      const yAxisData1 = echartData.map((v) => {
        v.value = v.value1
        return v
      })
      const yAxisData2 = echartData.map((v) => v.value2)
      const line_cp = JSON.parse(JSON.stringify(line))
      line_cp.xAxis[0].data = xAxisData
      line_cp.series[0].data = yAxisData1
      line_cp.series[1].data = yAxisData2
      return line_cp
    },
    getUpdateData() {
      const day = new Date().getDate()
      const echartData = []
      for (let index = 0; index < 30; index++) {
        echartData.push({
          name: index + 1,
          value: index >= day ? 0 : (Math.random() * 45).toFixed(0)
        })
      }
      return echartData
    }
  },
  mounted() {
    const line_cp = this.getLineDataOption()
    line_cp.series[0].animationDelay = function(idx) {
      return idx * 80
    }
    // line_cp.series[0].animationDelayUpdate = function(idx) {
    //   return idx * 80
    // }
    line_cp.animationEasing = 'elasticOut'
    // line_cp.animationDelayUpdate = function(idx) {
    //   return idx * 50
    // }
    line_cp.animationDelayUpdate = 1000
    const box = this.$echarts.init(this.$refs['line-chart'])
    box.setOption(line_cp)
    let duration = 3000
    const _this = this
    setTimeout(function fn() {
      fn.isd = !fn.isd
      //   duration = Math.random() * 2000 + 2000
      box.setOption({
        series: [
          {
            name: '实时趋势',
            data: fn.isd ? _this.getUpdateData() : []
          }
        ]
      })
      setTimeout(fn, duration)
    }, duration)
  }
}
</script>
<style lang="scss" scoped>
.line-box {
  height: 115 * $height;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .num {
    font-size: 16 * $font;
    background-color: rgb(40, 161, 236);
    padding: $height * 5 $width * 10;
    border-radius: 25% 0 25% 0;
    color: rgb(255, 255, 255);
  }
  .text {
    width: 70 * $width;
    line-height: 18 * $font;
    margin: 0 10 * $width;
    font-size: 14 * $font;
    color: rgba(255, 255, 255, 0.76);
  }
  .chart {
    flex: 1;
    height: 100%;
  }
}
</style>
