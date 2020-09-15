<template>
  <div class="termi-day-status-box">
    <ul>
      <li class="item">
        <span class="exc"> <i>异常</i></span>
        <span class="label">
          <i class="icon"><img src="../../assets/images/filemu@2.png"/></i>
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
          <i class="icon"><img src="../../assets/images/upload@2.png"/></i>
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
          <i class="icon"><img src="../../assets/images/other@2.png"/></i>
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
    height: 78 * $height;
    margin: 19 * $height 0;
    //   width: 100%;
    background: url('../../assets/images/it_r_b@2.png') no-repeat;
    background-size: contain;
    display: flex;
    align-items: center;
    &:nth-child(1) {
      margin-top: 25 * $height;
    }
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
        width: 22 * $width;
        height: 22 * $height;
        margin-right: 5 * $width;
        display: flex;
        align-items: center;
        img {
          width: 100%;
        }
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
