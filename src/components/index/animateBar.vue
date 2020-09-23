<template>
  <div class="cuboid" :style="{ animationDelay: delay }">
    <div class="top" :style="{ opacity: opacity }"></div>
    <!-- <div class="right">右</div> -->
    <div class="left" :style="{ opacity: opacity, height: height + 'px' }"></div>
    <!-- <div class="back">后</div> -->
    <div class="front" :style="{ opacity: opacity, height: height + 'px' }">{{ text }}</div>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
      required: false
    },
    opacity: {
      type: Number,
      default: 1,
      required: false
    },
    height: {
      type: Number,
      default: 100,
      required: false
    }
  },
  data() {
    return {}
  },
  created() {},
  components: {},
  computed: {
    delay() {
      return Math.random() + 's'
    }
  },
  methods: {},
  mounted() {}
}
</script>
<style lang="scss" scoped>
.cuboid {
  transform-style: preserve-3d; /* 使得所有子元素在3D空间中呈现 */
  //   transform: rotateX(-25deg) rotateY(55deg);
  animation: bounce-in-top 2s infinite;
}
.cuboid div {
  width: 18 * $width;
  position: absolute;
  display: flex;
  justify-content: center;
  //   align-items: center;
}
// .back {
//   height: 144px;
//   background-color: #9900ff;
//   transform: rotateY(180deg) translateZ(36px);
// }
// .right {
//   height: 144px;
//   background-color: #333333;
//   transform: rotateY(90deg) translateZ(36px);
// }
.left {
  //   height: 200 * $height;
  background-image: linear-gradient(180deg, #02e9fee3, rgba(2, 233, 254, 0.5) 30%, rgba(2, 233, 254, 0));
  transform: rotateY(-90deg) translateZ(9 * $width);
}
.top {
  height: 18 * $height;
  background-color: #02e8fe;
  transform: rotateX(90deg) translateZ(9 * $width);
  border: 1px solid #02e9fee3;
}
// .bottom {
//   height: 72px;
//   background-color: #ffcc00;
//   transform: rotateX(-90deg) translateZ(108px);
// }
.front {
  //   height: 200 * $height;
  background-image: linear-gradient(180deg, #02e9fee3, rgba(2, 233, 254, 0.5) 30%, rgba(2, 233, 254, 0));
  transform: rotateY(0deg) translateZ(9 * $width);
  padding-top: 25 * $height;
  font-size: 13 * $font;
  font-weight: bold;
  //   border-left: 1px solid #02e9fee3;
}
@keyframes bounce-in-top {
  0% {
    transform: translateY(0px) rotateX(-25deg) rotateY(55deg);
    animation-timing-function: ease-in;
  }
  40% {
    transform: translateY(-45 * $height) rotateX(-25deg) rotateY(55deg);
    animation-timing-function: ease-in;
  }
  65% {
    transform: translateY(0) rotateX(-25deg) rotateY(55deg);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateY(-38 * $height) rotateX(-25deg) rotateY(55deg);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateY(0) rotateX(-25deg) rotateY(55deg);
    animation-timing-function: ease-out;
  }
}
</style>
