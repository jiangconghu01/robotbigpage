<template>
  <!-- <div id="app" :style="{ ...a }"> -->
  <div id="app">
    <!-- <page-container-box :config="{ width: 3840, height: 2194, isfix: true }"> -->
    <!-- <page-container-box :config="{ width: 5760, height: 3291, isfix: true }"> -->
    <!-- <page-container-box :config="{ width: 1920, height: 1080 }"> -->
    <page-container-box :config="{ width: 1920, height: 1097, isfix: false }">
      <commonHeader></commonHeader>
      <transition :name="'slide-left'">
        <keep-alive :include="cashViews">
          <router-view />
        </keep-alive>
      </transition>
    </page-container-box>
  </div>
</template>
<script>
import pageContainerBox from '@/components/pageContainerBox.vue'
import commonHeader from '@/components/header.vue'
import { dynamickeyframes } from './views/page.static'
export default {
  data() {
    return {
      a: { height: '30px' },
      cashViews: ['Index', 'Businessval', 'Monitor']
    }
  },
  components: {
    pageContainerBox,
    commonHeader
  },
  methods: {
    initDynamicKeyframes() {
      // 创建style标签
      const style = document.createElement('style')
      // 设置style属性
      style.type = 'text/css'
      // 将 keyframes样式写入style内
      style.innerHTML = dynamickeyframes
      // 将style样式存放到head标签
      document.getElementsByTagName('head')[0].appendChild(style)
    }
  },
  mounted() {
    this.initDynamicKeyframes()
  }
}
</script>
<style lang="scss" scoped>
#app {
  font-family: Microsoft YaHei, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  font-size: 12 * $font;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, #0e2251 0%, #1b437b 25%, #2e6ca7 50%, #1b437b 75%, #0e2251 100%);
}
.test {
  color: rgba(15, 201, 247, 0);
}
</style>
<style>
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 900ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
