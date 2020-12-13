<template>
  <div class="scroll-item-box">
    <div class="num">{{ index }}</div>
    <div class="text">
      <slot></slot>
    </div>
    <div class="chart">
      <el-progress :stroke-width="18" :percentage="per" :text-inside="true"></el-progress>
      <!-- <div class="shadow"></div> -->
    </div>
    <div class="real-num">
      {{ datanum }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0
    },
    datanum: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {}
  },
  created() {},
  components: {},
  computed: {
    per() {
      return Number(((this.datanum / this.max) * 100).toFixed(1))
    }
  },
  methods: {},
  mounted() {}
}
</script>
<style lang="scss" scoped>
.scroll-item-box {
  height: 60 * $height;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    margin: 0 10 * $width;
  }
  .num {
    display: inline-block;
    font-size: 20 * $font;
    min-width: 43 * $width;
    background-color: rgb(40, 161, 236);
    padding: $height * 10 $width * 10;
    border-radius: 25% 0 25% 0;
    color: rgb(255, 255, 255);
    text-align: center;
  }
  .text {
    font-size: 15 * $font;
    // color: rgba(255, 255, 255, 0.534);
    color: #fff;
  }
  .real-num {
    width: 50px;
    font-size: 20px;
  }
  .chart {
    flex: 1;
    position: relative;
    .shadow {
      position: absolute;
      content: '';
      display: inline-block;
      background-color: rgb(0, 245, 253);
      width: 40 * $width;
      height: 18 * $height;
      left: calc(70% - 71px);
      top: 0;
      border-radius: 100px;
      box-shadow: -1px 0px 5px 5px rgb(0, 245, 253);
    }
  }
  .persent {
    color: rgb(255, 255, 255);
  }
  /deep/ .el-progress__text {
    color: rgb(255, 255, 255);
  }
  /deep/ .el-progress-bar__outer {
    background-color: #0ca0d638;
  }
  /deep/ .el-progress-bar__inner {
    background-image: linear-gradient(to right, rgb(5, 88, 164), rgb(0, 245, 253));
    // box-shadow: -1px 0px 5px 5px rgb(0, 245, 253);
    // &::before {
    // }
  }
  /deep/ .el-progress-bar__innerText {
    color: #fff;
    // color: rgba(12, 0, 0, 0.582);
  }
}
</style>
