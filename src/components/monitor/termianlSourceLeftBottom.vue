<template>
  <div class="termi-source-left-bottom">
    <!-- <div class="pie-title t">当前使用率</div> -->
    <!-- <div class="line-title t">资源池占用比趋势</div> -->
    <!-- <div class="pie" id="monitor-left-bottom-pie">pie</div> -->
    <div class="line" id="monitor-left-bottom-line"></div>
  </div>
</template>
<script>
import { option2 as parallel } from '@/chartconfig/parallel.js'
import pie from '@/chartconfig/pie.js'

export default {
  data() {
    return {}
  },
  created() {},
  components: {},
  computed: {},
  methods: {
    setParallelSource() {
      const box = this.$echarts.init(document.getElementById('monitor-left-bottom-line'))
      const para_config = JSON.parse(JSON.stringify(parallel))
      box.setOption(para_config)
      const countLength = para_config.parallelAxis.length
      let center = 0
      let flag = 'to'
      ;(function loop() {
        flag === 'to' && (center += 2)
        flag === 'back' && (center -= 2)
        center > countLength - 4 && flag === 'to' && (flag = 'back')
        center < 4 && flag === 'back' && (flag = 'to')
        // console.log(center)
        // box.setOption({ parallel: [{ axisExpandCenter: center }, { axisExpandCenter: center }] })
        box.setOption({ parallel: { axisExpandCenter: center } })
        setTimeout(function() {
          loop()
        }, 800)
      })()
    }
  },
  mounted() {
    this.setParallelSource()
  }
}
</script>
<style lang="scss" scoped>
.termi-source-left-bottom {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  .t {
    position: absolute;
    left: 0;
    top: 0;
    width: 16 * $width;
    font-size: 12 * $font;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.767);
  }
  .pie-title {
    top: 15 * $height;
  }
  .line-title {
    left: 45%;
  }
  //   & > div {
  //     flex: 1;
  //   }
  .pie {
    width: 45%;
  }
  .line {
    height: 100%;
    width: 100%;
  }
}
</style>
