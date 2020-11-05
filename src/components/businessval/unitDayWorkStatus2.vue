<template>
  <div class="unit-day-work-status-box table-box">
    <ul class="table-title">
      <li>序号</li>
      <li>流程名称</li>
      <li>本月累计(笔)</li>
      <li>上月累计(笔)</li>
      <li>环比上月增幅</li>
    </ul>
    <div class="table-body-box">
      <table class="table">
        <tbody class="body">
          <tr class="item" v-for="(item, index) in unitTimernalSourceList" :key="index">
            <td class="index">{{ item.index }}</td>
            <td class="name">{{ item.name }}</td>
            <td class="planwork">
              <i class="num">{{ item.planwork }}</i>
              <!-- <span class="text"><i class="text">同上月</i><i class="icon up"></i></span> -->
            </td>
            <!-- <td class="finishwork">
              <i class="num">{{ item.finishwork }}</i
              ><span class="text"><i class="text">同上月</i><i class="icon up"></i> </span>
            </td> -->
            <td class="manualwork">
              <i class="num">{{ item.manualwork }}</i>
              <!-- <span class="text"><i class="text">同上月</i><i class="icon down"></i> </span> -->
            </td>
            <td class="resetwork">
              <i class="num">{{ item.resetwork }}</i
              ><span class="text"><i class="text">同上月</i><i class="icon down"></i> </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      unitTimernalSourceList: [
        { index: 1, name: '支付失败清单整理', planwork: 92, finishwork: 22, manualwork: 99, resetwork: 88 },
        { index: 2, name: '资产转资确认流程', planwork: 92, finishwork: 22, manualwork: 99, resetwork: 88 },
        { index: 3, name: '竣工决算辅助审核流程', planwork: 92, finishwork: 22, manualwork: 99, resetwork: 88 },
        { index: 4, name: '租赁类资产稽核表编制流程', planwork: 92, finishwork: 22, manualwork: 99, resetwork: 88 },
        { index: 5, name: '现金流量表编制流程', planwork: 92, finishwork: 22, manualwork: 99, resetwork: 88 },
        { index: 6, name: '月末关账检查流程', planwork: 92, finishwork: 22, manualwork: 99, resetwork: 88 },
        { index: 8, name: '开账关账管理流程', planwork: 92, finishwork: 22, manualwork: 99, resetwork: 88 },
        { index: 9, name: '应交增值税结转计提流程', planwork: 92, finishwork: 22, manualwork: 99, resetwork: 88 },
        { index: 10, name: '纳税申报流程', planwork: 92, finishwork: 22, manualwork: 99, resetwork: 88 }
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
    height: 530 * $height;
    overflow: hidden;
    position: relative;
    .table {
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      //   animation: business-right-charts2 15s linear infinite forwards;
    }
    .body {
      width: 100%;
      .item {
        td {
          width: 16.6%;
          padding: 22px 0;
          text-align: center;
          font-size: 16px;
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
