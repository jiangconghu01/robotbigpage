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
  methods: {},
  mounted() {
    const line_cp = JSON.parse(JSON.stringify(line))
    const box = this.$echarts.init(this.$refs['line-chart'])
    box.setOption(line_cp)
  }
}
</script>
<style lang="scss" scoped>
.line-box {
  height: 65 * $height;
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
    width: 90 * $width;
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
