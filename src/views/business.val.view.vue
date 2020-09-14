<template>
  <div class="businessval-view">
    <div class="left">
      <div class="left-title"></div>
      <div class="left-num1"></div>
      <div class="left-num2"></div>
      <div class="left-chart3"></div>
      <div class="left-chart4"></div>
      <div class="left-chart5"></div>
    </div>
    <div class="center">
      <div class="top-chart"></div>
      <div class="bottom-line"></div>
    </div>
    <div class="right">
      <div class="right-title"></div>
      <div class="right-chart1"></div>
      <div class="right-chart2"></div>
      <div class="right-chart3"></div>
    </div>
  </div>
</template>
<script>
export default {
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
.businessval-view {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .left {
    width: 532 * $width;
    margin-left: 40 * $width;
    & > div {
      background-color: rgba(159, 228, 240, 0.473);
    }
    .left-title {
      height: 32 * $height;
    }
    .left-num1 {
      height: 118 * $height;
      margin-top: 2 * $height;
    }
    .left-num2 {
      height: 118 * $height;
      margin-top: 8 * $height;
    }
    .left-chart3 {
      height: 330 * $height;
      margin-top: 8 * $height;
    }
    .left-chart4 {
      height: 190 * $height;
      margin-top: 8 * $height;
    }
    .left-chart5 {
      height: 125 * $height;
      margin-top: 8 * $height;
    }
  }
  .center {
    flex: 1;
    padding: 0 10 * $width;
    & > div {
      background-color: rgba(159, 228, 240, 0.473);
    }
    .top-chart {
      margin-top: 40 * $height;
      height: 600 * $height;
    }
    .bottom-line {
      margin-top: 8 * $height;
      height: 258 * $height;
    }
  }
  .right {
    width: 532 * $width;
    margin-right: 40 * $width;
    & > div {
      background-color: rgba(159, 228, 240, 0.473);
    }
    .right-title {
      height: 32 * $height;
    }
    .right-chart1 {
      height: 158 * $height;
      margin-top: 2 * $height;
    }
    .right-chart2 {
      height: 350 * $height;
      margin-top: 8 * $height;
    }
    .right-chart3 {
      height: 388 * $height;
      margin-top: 8 * $height;
    }
  }
}
</style>
