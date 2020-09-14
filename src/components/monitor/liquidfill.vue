<template>
  <div class="liq-box">
    <div class="instance" ref="liq"></div>
    <div class="text">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import 'echarts-liquidfill'
import liq from '@/chartconfig/liq.js'
export default {
  props: {
    color: {
      type: String,
      required: false,
      default: 'rgba(31, 222, 225, 1)'
    },
    percent: {
      type: Number,
      required: false,
      default: 0.5
    }
  },
  data() {
    return {}
  },
  created() {},
  components: {},
  computed: {
    colors() {
      const colorArr = this.color.split(',')
      colorArr.length = colorArr.length - 1
      const str = colorArr.join(',')
      const t = [
        {
          offset: 1,
          color: str + ',0)'
        },
        {
          offset: 0.7,
          color: str + ',0.05)'
        },
        {
          offset: 0.3,
          color: str + ',.3)'
        },
        {
          offset: 0,
          color: str + ',1)'
        }
      ]
      return t
    }
  },
  methods: {},
  mounted() {
    const box = this.$echarts.init(this.$refs['liq'])
    const liq_c = JSON.parse(JSON.stringify(liq))
    liq_c.series[0].data = [this.percent, this.percent, this.percent]
    liq_c.series[1].data[0].itemStyle.normal.borderColor = this.color
    liq_c.series[0].itemStyle.color.colorStops = this.colors
    liq_c.series[0].label.normal.formatter = (this.percent * 100).toFixed(2) + '%'
    box.setOption(liq_c)
  }
}
</script>
<style lang="scss" scoped>
.liq-box {
  width: 100%;
  height: 100%;
  .instance {
    width: 100%;
    height: 75%;
  }
  .text {
    font-size: 14 * $font;
    line-height: 17 * $font;
    width: 62 * $width;
    text-align: center;
    font-weight: bold;
    margin: 0 auto;
    margin-top: -10 * $height;
  }
}
</style>
