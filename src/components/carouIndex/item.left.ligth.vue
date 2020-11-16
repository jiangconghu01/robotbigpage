<template>
  <div class="light-box">
    <!-- <img src="../../assets/images/index_left_item_bottombox@2.png" alt="" /> -->
    <ul class="robot-list">
      <template v-if="robotNumber >= 7">
        <li class="rotbot-icon leftchild1" :style="{ animationDelay: delayList[0] }"><img src="../../assets/images/white_robot_icon@2.png" /></li>
        <li class="rotbot-icon leftchild2" :style="{ animationDelay: delayList[3] }"><img src="../../assets/images/white_robot_icon@2.png" /></li>
        <li class="rotbot-icon leftchild3" :style="{ animationDelay: delayList[4] }"><img src="../../assets/images/white_robot_icon@2.png" /></li>
      </template>
      <li class="rotbot-icon left" v-if="robotNumber === 3" :style="{ animationDelay: delayList[0] }"><img src="../../assets/images/white_robot_icon@2.png" /></li>
      <li class="rotbot-icon center" :style="{ animationDelay: delayList[1] }"><img src="../../assets/images/white_robot_icon@2.png" /></li>
      <li class="rotbot-icon right" v-if="robotNumber === 3" :style="{ animationDelay: delayList[2] }"><img src="../../assets/images/white_robot_icon@2.png" /></li>
      <template v-if="robotNumber >= 7">
        <li class="rotbot-icon rightchild1" :style="{ animationDelay: delayList[2] }"><img src="../../assets/images/white_robot_icon@2.png" /></li>
        <li class="rotbot-icon rightchild2" :style="{ animationDelay: delayList[5] }"><img src="../../assets/images/white_robot_icon@2.png" /></li>
        <li class="rotbot-icon rightchild3" :style="{ animationDelay: delayList[6] }"><img src="../../assets/images/white_robot_icon@2.png" /></li>
      </template>
      <li class="rotbot-icon top" v-if="robotNumber === 8" :style="{ animationDelay: delayList[7] }"><img src="../../assets/images/white_robot_icon@2.png" /></li>
    </ul>
    <svg class="svg-box" viewBox="0 0 251 230">
      <defs>
        <mask id="Mask-item-left-circle-bottom">
          <polygon fill="white" stroke="#979797" points="73.9307892 170.509027 0 5.68434189e-14 247.770557 5.68434189e-14 186.386353 170.509027 129.011134 195.170288"></polygon>
        </mask>
        <linearGradient id="item-left-circle-bottom-linear" gradientUnits="userSpaceOnUse" x1="53" y1="180" x2="53" y2="5">
          <stop offset="0%" stop-color="rgb(5, 211, 253)" stop-opacity="0.7" />
          <stop offset="50%" stop-color="rgb(5, 211, 253)" stop-opacity=".3" />
          <stop offset="100%" stop-color="rgb(5, 211, 253)" stop-opacity="0" />
          <!-- <animate id="light-up-item-left-circle" attributeName="y2" from="25" to="120" dur="2.5s" begin="0; light-down-item-left-circle.end + 0.5s" fill="freeze" />
          <animate id="light-down-item-left-circle" attributeName="y2" from="120" to="25" dur="1s" begin="light-up-item-left-circle.end + 0.5s" fill="freeze" /> -->
          <animate id="light-down-item-left-circle" attributeName="y2" from="180" to="25" dur="3s" begin="0.5s" fill="freeze" repeatCount="indefinite" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="251" height="230" fill="url(#item-left-circle-bottom-linear)" mask="url(#Mask-item-left-circle-bottom)"></rect>

      <image
        x="46.5111337"
        y="138.688169"
        width="165"
        height="71"
        xlink:href="data:image/png;base64,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"
      ></image>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    robotNumber: {
      type: Number,
      required: false,
      default: 3
    }
  },
  data() {
    return {
      delayList: []
    }
  },
  created() {
    this.createrTime()
  },
  computed: {},
  methods: {
    createrTime() {
      const l = this.robotNumber
      const arr = []
      for (let index = 0; index < l; index++) {
        arr.push(Math.random() + 's')
      }
      this.delayList = arr
    }
  },
  mounted() {}
}
</script>
<style lang="scss" scoped>
.light-box {
  width: 100%;
  position: relative;
  .robot-list {
    width: 100%;
    height: 80%;
    position: absolute;
    left: 0;
    bottom: 10%;
    .rotbot-icon {
      height: 10%;
      position: absolute;
      img {
        height: 100%;
      }
      animation: bounce-in-top 2s infinite;
      //   background-image: url('../../assets/images/white_robot_icon@2.png');
      //   background-repeat: no-repeat;
      //   background-size: contain;
    }
    .center {
      height: 40%;
      left: 44%;
      bottom: 22%;
    }
    .left {
      height: 28%;
      left: 24%;
      bottom: 37%;
    }
    .right {
      height: 28%;
      left: 69%;
      bottom: 37%;
    }
    .top {
      height: 18%;
      left: 48%;
      bottom: 72%;
    }
    .leftchild1 {
      height: 25%;
      left: 30%;
      bottom: 18%;
    }
    .leftchild2 {
      height: 25%;
      left: 20%;
      bottom: 39%;
    }
    .leftchild3 {
      height: 22%;
      left: 35%;
      bottom: 59%;
    }
    .rightchild1 {
      height: 25%;
      left: 64%;
      bottom: 18%;
    }
    .rightchild2 {
      height: 25%;
      left: 74%;
      bottom: 39%;
    }
    .rightchild3 {
      height: 22%;
      left: 61%;
      bottom: 59%;
    }
  }
  .svg-box {
    width: 100%;
  }
}
@keyframes bounce-in-top {
  0% {
    transform: translateY(0px);
    animation-timing-function: ease-in;
  }
  40% {
    transform: translateY(-20 * $height);
    animation-timing-function: ease-in;
  }
  65% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateY(-13 * $height);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
}
</style>
