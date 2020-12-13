<template>
  <div class="light_top_box">
    <ul class="line-1 line">
      <li class="light_top_box-item">
        <img src="../../assets/images/index/资金管理@2x.png" /><span class="text">资金管理</span>
        <div class="light-effect">
          <lightIcon :begin="0.1"></lightIcon>
        </div>
      </li>
      <li class="light_top_box-item">
        <img class="fix-position" src="../../assets/images/index/资产管理@2x.png" /><span class="text">资产管理</span>
        <div class="light-effect"><lightIcon :begin="0.8"></lightIcon></div>
      </li>
      <li class="light_top_box-item">
        <img class="fix-position" src="../../assets/images/index/报表管理@2x.png" /><span class="text">报表管理</span>
        <div class="light-effect"><lightIcon :begin="1.2"></lightIcon></div>
      </li>
    </ul>
    <ul class="line-2 line">
      <li class="light_top_box-item">
        <img class="fix-position" src="../../assets/images/index/账期管理@2x.png" /><span class="text">账期管理</span>
        <div class="light-effect"><lightIcon :begin="0.3"></lightIcon></div>
      </li>
      <li class="light_top_box-item">
        <img src="../../assets/images/index/税务管理@2x.png" /><span class="text">税务管理</span>
        <div class="light-effect"><lightIcon :begin="1"></lightIcon></div>
      </li>
    </ul>
  </div>
</template>
<script>
import lightIcon from '@/components/index/lightIcon.vue'
export default {
  data() {
    return {}
  },
  created() {},
  components: { lightIcon },
  computed: {},
  methods: {},
  mounted() {}
}
</script>
<style lang="scss" scoped>
.light_top_box {
  width: 518 * $width;
  height: 190 * $height;
  .line {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .line-1 {
    .light_top_box-item {
      margin-left: 70 * $width;
      &:nth-child(1) {
        margin-left: 0;
      }
    }
  }
  .line-2 {
    margin-top: 30 * $height;
    .light_top_box-item {
      margin-left: 70 * $width;
      &:nth-child(1) {
        margin-left: 0;
      }
    }
  }
  .light_top_box-item {
    width: 126 * $width;
    height: 70 * $height;
    position: relative;
    .fix-position {
      margin-top: 4 * $height;
    }
    img {
      width: 100%;
    }
    .text {
      position: absolute;
      bottom: -25 * $height;
      width: 100%;
      left: 0;
      color: #fff;
      text-align: center;
      font-size: 25 * $font;
      //   font-weight: bold;
      letter-spacing: 5 * $font;
    }
    .light-effect {
      position: absolute;
      width: 177 * $width;
      height: 90 * $height;
      left: -23 * $width;
      top: -40 * $height;
    }
  }
}
</style>
