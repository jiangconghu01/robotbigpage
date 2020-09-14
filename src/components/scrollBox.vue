<template>
  <div class="scroll-box">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  created() {},
  components: {},
  computed: {},
  methods: {},
  mounted() {
    const selector = this.options.selector
    const allnum = this.options.allNum
    const itemHeight = this.options.itemHeight
    const anime = this.$anime
    const yTrans = []
    anime.set(selector, {
      translateY: function(el, i, allnum) {
        yTrans[i] = { y: i * itemHeight }
        return i * itemHeight
      }
    })
    anime({
      targets: yTrans,
      duration: 8000, //走一周持续时间
      easing: 'linear',
      y: '-=' + itemHeight * allnum,
      loop: true,
      update: function(anim) {
        anime.set(selector, {
          translateY: function(el, i, l) {
            return yTrans[i].y % (itemHeight * allnum)
          }
        })
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.scroll-box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  // animation: scroll-list 10s linear infinite;
  .scroll-item {
    position: absolute;
    top: 0;
    left: 0;
  }
}
@keyframes scroll-list {
  0% {
    top: 0;
  }
  90% {
    top: -800px;
    opacity: 1;
  }
  100% {
    top: -800px;
    opacity: 0;
  }
}
</style>
