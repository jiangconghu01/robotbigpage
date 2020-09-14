<template>
  <div class="termi-day-status-box">
    <ul>
      <li class="item">
        <span class="exc"> <i>异常</i></span>
        <span class="label">
          <i class="icon"></i>
          <i class="text">作业下发</i>
        </span>
        <span class="number">
          <i class="num">890</i>
          <i class="unit">个</i>
        </span>
      </li>
      <li class="item">
        <span class="exc"> <i>异常</i></span>
        <span class="label">
          <i class="icon"></i>
          <i class="text">日志上传</i>
        </span>
        <span class="number">
          <i class="num">890</i>
          <i class="unit">个</i>
        </span>
      </li>
      <li class="item">
        <span class="exc"> <i>异常</i></span>
        <span class="label">
          <i class="icon"></i>
          <i class="text">其他</i>
        </span>
        <span class="number">
          <i class="num">890</i>
          <i class="unit">个</i>
        </span>
      </li>
    </ul>
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
.termi-day-status-box {
  margin-top: 15 * $height;
  li {
    height: 70 * $height;
    margin: 25 * $height 0;
    //   width: 100%;
    background-color: rgba(46, 131, 228, 0.192);
    display: flex;
    align-items: center;
    .exc {
      width: 87 * $width;
      padding-left: 50 * $width;
      i {
        position: relative;
        font-weight: bold;
        font-size: 12 * $font;
        &::before {
          display: inline-block;
          content: '';
          position: absolute;
          width: 10 * $width;
          height: 10 * $height;
          border-radius: 50%;
          left: -18 * $width;
          top: 3 * $height;
          background-color: #ff3330;
        }
      }
    }
    .label {
      display: flex;
      align-items: center;
      flex: 1;
      font-size: 16 * $font;
      padding-left: 90 * $width;
      .icon {
        display: inline-block;
        width: 26px;
        height: 26px;
      }
      .text {
        font-weight: bold;
      }
    }
    .number {
      width: 87 * $width;
      .num {
        font-weight: bold;
        font-size: 20 * $font;
        color: #00aeff;
      }
      .unit {
        font-size: 12 * $font;
        font-weight: bold;
      }
    }
  }
}
</style>
