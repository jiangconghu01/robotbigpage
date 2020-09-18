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
    <div class="table-body-box">
      <table class="table">
        <tbody class="body">
          <tr class="item" v-for="(item, index) in unitTimernalSourceList" :key="index">
            <td class="index">{{ item.index }}</td>
            <td class="name">{{ item.name }}</td>
            <td class="planwork">
              <i class="num">{{ item.planwork }}</i> <span class="text"><i class="text">同上月</i><i class="icon up"></i></span>
            </td>
            <td class="finishwork">
              <i class="num">{{ item.finishwork }}</i
              ><span class="text"><i class="text">同上月</i><i class="icon up"></i> </span>
            </td>
            <td class="manualwork">
              <i class="num">{{ item.manualwork }}</i
              ><span class="text"><i class="text">同上月</i><i class="icon down"></i> </span>
            </td>
            <td class="resetwork">
              <i class="num">{{ item.resetwork }}</i
              ><span class="text"><i class="text">同上月</i><i class="icon down"></i> </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <ul class="table-body">
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
    </ul> -->
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
        { index: 6, name: '某某某某单位', planwork: 92, finishwork: 22, manualwork: 99, resetwork: 88 },
        { index: 8, name: '某某某某单位', planwork: 92, finishwork: 22, manualwork: 99, resetwork: 88 },
        { index: 9, name: '某某某某单位', planwork: 92, finishwork: 22, manualwork: 99, resetwork: 88 },
        { index: 10, name: '某某某某单位', planwork: 92, finishwork: 22, manualwork: 99, resetwork: 88 },
        { index: 11, name: '某某某某单位', planwork: 92, finishwork: 22, manualwork: 99, resetwork: 88 },
        { index: 12, name: '某某某某单位', planwork: 92, finishwork: 22, manualwork: 99, resetwork: 88 },
        { index: 13, name: '某某某某单位', planwork: 92, finishwork: 22, manualwork: 99, resetwork: 88 },
        { index: 14, name: '某某某某单位', planwork: 92, finishwork: 22, manualwork: 99, resetwork: 88 },
        { index: 15, name: '某某某某单位', planwork: 92, finishwork: 22, manualwork: 99, resetwork: 88 },
        { index: 16, name: '某某某某单位', planwork: 92, finishwork: 22, manualwork: 99, resetwork: 88 },
        { index: 17, name: '某某某某单位', planwork: 92, finishwork: 22, manualwork: 99, resetwork: 88 },
        { index: 18, name: '某某某某单位', planwork: 92, finishwork: 22, manualwork: 99, resetwork: 88 }
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
  .table-body-box {
    height: 230 * $height;
    overflow: hidden;
    position: relative;
    .table {
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      animation: business-right-charts2 15s linear infinite forwards;
    }
    .body {
      width: 100%;
      .item {
        td {
          width: 16.6%;
          padding: 13px 0;
          text-align: center;
          .icon {
            display: inline-block;
            width: 12 * $width;
            height: 12 * $height;
            vertical-align: middle;
          }
          .up {
            background: url('../../assets/images/up_row@2.png') no-repeat;
            background-size: contain;
          }
          .down {
            background: url('../../assets/images/down_row@2.png') no-repeat;
            background-size: contain;
          }
        }
      }
    }
  }
}
@keyframes business-right-charts2 {
  0% {
    top: 0 * $height;
    opacity: 1;
  }
  90% {
    top: -433 * $height;
    opacity: 1;
  }
  100% {
    top: -437 * $height;
    opacity: 0;
  }
}
</style>
