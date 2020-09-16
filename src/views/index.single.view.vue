<template>
  <div class="single-index-box">
    <img src="../assets/images/all/index_bg@2.png" />
    <div class="title"></div>
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
.single-index-box {
  width: 1800 * $width;
  position: relative;
  //   background-color: rgba(72, 147, 233, 0.473);
  img {
    margin-top: 200 * $height;
    margin-left: 60 * $width;
    width: 100%;
  }
  .title {
    position: absolute;
  }
}
</style>
