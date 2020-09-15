<template>
  <div class="unit-day-work-status-box table-box">
    <ul class="table-title">
      <li>序号</li>
      <li>单位名称</li>
      <li>计划作业</li>
      <li>已完成作业</li>
      <li>转人工作业</li>
      <li>回退作业</li>
    </ul>
    <ul class="table-body">
      <li v-for="(item, index) in unitTimernalSourceList" :key="index">
        <span class="index">{{ item.index }}</span>
        <span class="name">{{ item.name }}</span>
        <span class="planwork">
          <i class="num">{{ item.planwork }}</i>
          <span class="text"><i class="text">同上月</i><i class="icon"></i></span>
        </span>
        <span class="finishwork">
          <i class="num">{{ item.finishwork }}</i
          ><span class="text"><i class="text">同上月</i><i class="icon"></i> </span>
        </span>
        <span class="manualwork">
          <i class="num">{{ item.manualwork }}</i>
          <span class="text"><i class="text">同上月</i><i class="icon"></i></span>
        </span>
        <span class="resetwork">
          <i class="num">{{ item.resetwork }}</i
          ><span class="text"><i class="text">同上月</i><i class="icon"></i></span>
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      unitTimernalSourceList: [
        { index: 1, name: '某某某某单位', planwork: 92, finishwork: 22, manualwork: 99, resetwork: 88 },
        { index: 2, name: '某某某某单位', planwork: 92, finishwork: 22, manualwork: 99, resetwork: 88 },
        { index: 3, name: '某某某某单位', planwork: 92, finishwork: 22, manualwork: 99, resetwork: 88 },
        { index: 4, name: '某某某某单位', planwork: 92, finishwork: 22, manualwork: 99, resetwork: 88 },
        { index: 5, name: '某某某某单位', planwork: 92, finishwork: 22, manualwork: 99, resetwork: 88 },
        { index: 6, name: '某某某某单位', planwork: 92, finishwork: 22, manualwork: 99, resetwork: 88 }
      ]
    }
  },
  created() {},
  components: {},
  computed: {},
  methods: {},
  mounted() {}
}
</script>
<style lang="scss" scoped>
.unit-day-work-status-box {
  width: 100%;
  margin-top: 15 * $height;
  .table-body {
    li {
      padding: 7 * $height 0;
    }
  }
}
</style>
