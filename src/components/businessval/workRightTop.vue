<template>
  <div class="work-day-top-view-box">
    <div class="termi-runing">
      <div class="text">执行作业</div>
      <div class="number"><i class="num">276</i><i class="unit">个</i></div>
    </div>
    <div class="work-finish">
      <div class="text">已完成作业</div>
      <div class="number"><i class="num">276</i><i class="unit">个</i></div>
    </div>
    <div class="work-manual">
      <div class="text">异常作业</div>
      <div class="number"><i class="num">276</i><i class="unit">个</i></div>
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
.work-day-top-view-box {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  & > div {
    height: 100 * $height;
    border: 2px solid rgba(6, 62, 95, 0.726);
    background-color: rgba(130, 196, 201, 0.089);
    border-radius: 6px;
    flex: 1;
    margin-left: 16 * $width;
    & > div {
      text-align: center;
    }
    .text {
      height: 40 * $height;
      line-height: 40 * $height;
      font-size: 16 * $font;
      font-weight: bold;
    }
    .number {
      height: 60 * $height;
      line-height: 60 * $height;
      .num {
        font-size: 30 * $font;
        font-weight: bold;
      }
      .unit {
        font-size: 12 * $font;
        font-weight: bold;
      }
    }
  }
  .work-manual {
    margin-right: 16 * $width;
  }
}
</style>
