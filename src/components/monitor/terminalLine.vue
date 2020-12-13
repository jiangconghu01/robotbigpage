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
import {
  sdlist1,
  ldlist1,
  sdlist2,
  ldlist2,
  sdlist3,
  ldlist3,
  sdlist4,
  ldlist4,
  sdlist5,
  ldlist5,
  sdlist6,
  ldlist6,
  sdlist7,
  ldlist7,
  sdlist8,
  ldlist8,
  sdlist9,
  ldlist9,
  sdlist10,
  ldlist10
} from './linemock'
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
        if (this.index === 1) {
          echartData.push({
            name: index + 1,
            value1: index >= day ? 0 : sdlist1[index] ? sdlist1[index] : 0,
            value2: index >= day ? 0 : ldlist1[index] ? ldlist1[index] : 0
          })
        }
        if (this.index === 2) {
          echartData.push({
            name: index + 1,
            value1: index >= day ? 0 : sdlist2[index] ? sdlist2[index] : 0,
            value2: index >= day ? 0 : ldlist2[index] ? ldlist2[index] : 0
          })
        }
        if (this.index === 3) {
          echartData.push({
            name: index + 1,
            value1: index >= day ? 0 : sdlist3[index] ? sdlist3[index] : 0,
            value2: index >= day ? 0 : ldlist3[index] ? ldlist3[index] : 0
          })
        }
        if (this.index === 4) {
          echartData.push({
            name: index + 1,
            value1: index >= day ? 0 : sdlist4[index] ? sdlist4[index] : 0,
            value2: index >= day ? 0 : ldlist4[index] ? ldlist4[index] : 0
          })
        }
        if (this.index === 5) {
          echartData.push({
            name: index + 1,
            value1: index >= day ? 0 : sdlist5[index] ? sdlist5[index] : 0,
            value2: index >= day ? 0 : ldlist5[index] ? ldlist5[index] : 0
          })
        }
        if (this.index === 6) {
          echartData.push({
            name: index + 1,
            value1: index >= day ? 0 : sdlist6[index] ? sdlist6[index] : 0,
            value2: index >= day ? 0 : ldlist6[index] ? ldlist6[index] : 0
          })
        }
        if (this.index === 7) {
          echartData.push({
            name: index + 1,
            value1: index >= day ? 0 : sdlist7[index] ? sdlist7[index] : 0,
            value2: index >= day ? 0 : ldlist7[index] ? ldlist7[index] : 0
          })
        }
        if (this.index === 8) {
          echartData.push({
            name: index + 1,
            value1: index >= day ? 0 : sdlist8[index] ? sdlist8[index] : 0,
            value2: index >= day ? 0 : ldlist8[index] ? ldlist8[index] : 0
          })
        }
        if (this.index === 9) {
          echartData.push({
            name: index + 1,
            value1: index >= day ? 0 : sdlist9[index] ? sdlist9[index] : 0,
            value2: index >= day ? 0 : ldlist9[index] ? ldlist9[index] : 0
          })
        }
        if (this.index === 10) {
          echartData.push({
            name: index + 1,
            value1: index >= day ? 0 : sdlist10[index] ? sdlist10[index] : 0,
            value2: index >= day ? 0 : ldlist10[index] ? ldlist10[index] : 0
          })
        }
      }
      const xAxisData = echartData.map((v) => v.name)

      const yAxisData1 = echartData.map((v) => {
        v.value = v.value1
        return v
      })
      const yAxisData2 = echartData.map((v) => v.value2)
      const line_cp = JSON.parse(JSON.stringify(line))
      line_cp.series[0].label.formatter = function(p) {
        return ~~p.value
      }
      line_cp.xAxis[0].data = xAxisData
      line_cp.series[0].data = yAxisData1
      line_cp.series[1].data = yAxisData2
      return line_cp
    },
    getUpdateData() {
      //   const day = new Date().getDate()
      //   const echartData = []
      //   for (let index = 0; index < 30; index++) {
      //     echartData.push({
      //       name: index + 1,
      //       value: index >= day ? 0 : (Math.random() * 45).toFixed(0)
      //     })
      //   }
      //   return echartData
      return this.getLineDataOption().series[0].data
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
    // setTimeout(function fn() {
    //   fn.isd = !fn.isd
    //   box.setOption({
    //     series: [
    //       {
    //         name: '实时趋势',
    //         data: fn.isd ? _this.getUpdateData() : []
    //       }
    //     ]
    //   })
    //   setTimeout(fn, duration)
    // }, duration)
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
