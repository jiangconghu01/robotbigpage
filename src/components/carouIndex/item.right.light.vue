<template>
  <div class="right-light-box">
    <img class="spiral" src="../../assets/images/indexright/spiral@2x.png" />
    <svg viewBox="0 0 266 276" version="1.1">
      <defs>
        <mask id="Mask-item-right-path-bottom">
          <polygon fill="white" stroke="#979797" points="81.9616255 246.320399 1 0.740954497 265 0.740954497 185.373726 246.320399 133 275.496156"></polygon>
        </mask>
        <linearGradient id="item-right-path-bottom-linear" gradientUnits="userSpaceOnUse" x1="53" y1="280" x2="53" y2="10">
          <stop offset="0%" stop-color="rgb(5, 211, 253)" stop-opacity="0.7" />
          <stop offset="50%" stop-color="rgb(5, 211, 253)" stop-opacity=".3" />
          <stop offset="100%" stop-color="rgb(5, 211, 253)" stop-opacity="0" />
          <animate attributeName="y2" from="280" to="15" dur="3s" begin="0.5s" fill="freeze" repeatCount="indefinite" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="266" height="330" fill="url(#item-right-path-bottom-linear)" mask="url(#Mask-item-right-path-bottom)"></rect>
    </svg>
    <img class="base_st" src="../../assets/images/indexright/right_light_bottom@2.png" />
    <img class="robot1 robot" src="../../assets/images/indexright/robot_item_run@2.png" />
    <img class="robot2 robot" src="../../assets/images/indexright/robot_item_run@2.png" />
    <img class="robot3 robot" src="../../assets/images/indexright/robot_item_run@2.png" />
    <img class="robot4 robot" src="../../assets/images/indexright/robot_item_run@2.png" />
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
.right-light-box {
  width: 100%;
  height: 100%;
  position: relative;
  .spiral {
    width: 120 * $width;
    position: absolute;
    left: 28%;
    bottom: 30%;
    animation: rotate 2s infinite;
  }
  svg {
    width: 163 * $width;
    height: 168 * $height;
    position: absolute;
    bottom: 70 * $height;
    left: 18%;
    z-index: 2;
  }
  .base_st {
    width: 162 * $width;
    position: absolute;
    bottom: 10%;
    left: 18%;
  }
  .robot {
    width: 18 * $width;
    position: absolute;
  }
  .robot1 {
    width: 50 * $width;
    left: 40%;
    bottom: 28%;
    animation: bounce-in-top 2s infinite 0.3s;
  }
  .robot2 {
    width: 24 * $width;
    right: 22%;
    bottom: 29%;
    animation: bounce-in-top 2s infinite 0.8s;
  }
  .robot3 {
    left: 18%;
    bottom: 33%;
    animation: bounce-in-top 2s infinite 0s;
  }
  .robot4 {
    left: 22%;
    bottom: 9%;
    animation: bounce-in-top 2s infinite 1.3s;
  }
}
@keyframes bounce-in-top {
  0% {
    transform: translateY(0px);
    animation-timing-function: ease-in;
  }
  40% {
    transform: translateY(-25 * $height);
    animation-timing-function: ease-in;
  }
  65% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateY(-18 * $height);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
}
@keyframes rotate {
  from {
    transform: rotateY(360deg);
  }
  to {
    transform: rotateY(0deg);
  }
}
</style>
