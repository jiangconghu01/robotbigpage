<template>
  <div class="termi-source-left-bottom">
    <div class="pie" id="monitor-left-bottom-pie">pie</div>
    <div class="line" id="monitor-left-bottom-line">line</div>
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
.termi-source-left-bottom {
  width: 100%;
  height: 100%;
  display: flex;
  & > div {
    flex: 1;
  }
}
</style>
