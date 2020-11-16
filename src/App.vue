<template>
  <div id="app">
    <!-- <page-container-box :config="{ width: 3840, height: 2194, isfix: true }"> -->
    <!-- <page-container-box :config="{ width: 5760, height: 3291, isfix: true }"> -->
    <!-- <page-container-box :config="{ width: 1920, height: 1080 }"> -->
    <page-container-box :config="{ width: 1920, height: 1097, isfix: false }">
      <commonHeader></commonHeader>
      <router-view />
    </page-container-box>
  </div>
</template>
<script>
import pageContainerBox from '@/components/pageContainerBox.vue'
import commonHeader from '@/components/header.vue'
export default {
  components: {
    pageContainerBox,
    commonHeader
  },
  mounted() {}
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
