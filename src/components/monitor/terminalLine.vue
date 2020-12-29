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
    },
    listObj: {
      type: Object,
      default: () => {
        return {
          name: '',
          list: []
        }
      }
    }
  },
  data() {
    return {
      chartBox: null
    }
  },
  created() {},
  components: {},
  computed: {},
  methods: {
    initLine() {
      const line_cp = JSON.parse(JSON.stringify(line))
      const box = this.$echarts.init(this.$refs['line-chart'])
      this.chartBox = box
      line_cp.series[0].data = this.getUpdateData().data
      line_cp.xAxis[0].data = this.getUpdateData().xAxis
      box.setOption(line_cp)
    },
    getUpdateData() {
      this.listObj.list.sort(function(a, b) {
        return a.date - b.date
      })
      const xarr = this.listObj.list.map((v) => {
        return v.date.slice(-2)
      })
      return {
        xAxis: xarr,
        data: this.listObj.list
      }
      //   return this.listObj.list.
    }
  },
  mounted() {
    this.initLine()
    // const line_cp = this.getLineDataOption()
    // line_cp.series[0].animationDelay = function(idx) {
    //   return idx * 80
    // }
    // line_cp.animationEasing = 'elasticOut'
    // line_cp.animationDelayUpdate = 1000
    // const box = this.$echarts.init(this.$refs['line-chart'])
    // box.setOption(line_cp)
    // let duration = 3000
    // const _this = this
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
