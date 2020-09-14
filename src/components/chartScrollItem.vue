<template>
  <div class="scroll-item-box">
    <div class="num">{{ index }}</div>
    <div class="text">
      <div>租赁类资产稽</div>
      <div>核表编制流程</div>
    </div>
    <div class="chart">
      <el-progress :stroke-width="18" :percentage="70"></el-progress>
      <!-- <div class="shadow"></div> -->
    </div>
  </div>
</template>
<script>
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
  mounted() {}
}
</script>
<style lang="scss" scoped>
.scroll-item-box {
  height: 120 * $height;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    margin: 0 10 * $width;
  }
  .num {
    font-size: 20 * $font;
    background-color: rgb(40, 161, 236);
    padding: $height * 10 $width * 15;
    border-radius: 25% 0 25% 0;
    color: rgb(255, 255, 255);
  }
  .text {
    font-size: 15 * $font;
    color: rgba(255, 255, 255, 0.534);
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
}
</style>
