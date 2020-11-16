<template>
  <div class="unit-day-work-status-box table-box">
    <ul class="table-title">
      <li class="index">序号</li>
      <li class="planwork">流程名称</li>
      <li class="curmonth">本月累计</li>
      <li class="beforemonth">上月累计</li>
      <li class="relative">环比上月增幅</li>
    </ul>
    <div class="table-body-box">
      <table class="table">
        <tbody class="body">
          <tr class="item" v-for="(item, index) in tlist" :key="index">
            <td class="index">
              <i class="num">{{ item.index }}</i>
            </td>
            <td class="planwork">
              <i class="num">{{ item.planwork }}</i>
            </td>
            <td class="curmonth">
              <i class="num">{{ item.curmonth }}</i>
            </td>
            <td class="beforemonth">
              <i class="num">{{ item.beforemonth }}</i>
            </td>
            <td class="relative">
              <i class="num">{{ item.relative + '%' }}</i>
              <span v-if="item.relative > 0" class="text"><i class="text">同上月</i><i class="icon up"></i> </span>
              <span v-if="item.relative < 0" class="text"><i class="text">同上月</i><i class="icon down"></i> </span>
            </td>
            <!-- <td class="manualwork">
              <i class="num">{{ item.manualwork }}</i>
            </td>
            <td class="resetwork">
              <i class="num">{{ item.resetwork }}</i
              ><span class="text"><i class="text">同上月</i><i class="icon down"></i> </span>
            </td> -->
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
        { index: 1, planwork: '支付失败清单整理', curmonth: 67, beforemonth: 55, relative: 0 },
        { index: 2, planwork: '资产转资确认流程', curmonth: 184, beforemonth: 223, relative: 0 },
        { index: 3, planwork: '竣工决算辅助审核流程', curmonth: 243, beforemonth: 56, relative: 0 },
        { index: 4, planwork: '租赁类资产稽核表编制流程', curmonth: 92, beforemonth: 79, relative: 0 },
        { index: 5, planwork: '现金流量表编制流程', curmonth: 179, beforemonth: 23, relative: 0 },
        { index: 6, planwork: '月末关账检查流程', curmonth: 155, beforemonth: 567, relative: 0 },
        { index: 8, planwork: '开账关账管理流程', curmonth: 234, beforemonth: 345, relative: 0 },
        { index: 9, planwork: '应交增值税结转计提流程', curmonth: 345, beforemonth: 22, relative: 0 },
        { index: 10, planwork: '纳税申报流程', curmonth: 27, beforemonth: 45, relative: 0 }
      ]
    }
  },
  created() {},
  components: {},
  computed: {
    tlist() {
      return this.unitTimernalSourceList.map((val) => {
        val.relative = (((val.curmonth - val.beforemonth) / val.beforemonth) * 100).toFixed(1)
        return val
      })
    }
  },
  methods: {},
  mounted() {}
}
</script>
<style lang="scss" scoped>
.unit-day-work-status-box {
  width: 100%;
  margin-top: 15 * $height;
  .table-title {
    .index {
      flex: 2.5;
    }
    .planwork {
      flex: 3;
    }
    .curmonth {
      flex: 3;
    }
    .beforemonth {
      flex: 3;
    }
    .relative {
      flex: 4;
    }
    li {
      font-size: 16 * $font;
    }
  }
  .table-body-box {
    height: 530 * $height;
    overflow: hidden;
    position: relative;

    .table {
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      animation: business-left-charts2 12s linear infinite forwards;
    }
    .body {
      width: 100%;
      .item {
        td {
          width: 16.6%;

          text-align: center;
          padding: 25 * $height 0;
          font-size: 16 * $font;
          .icon {
            display: inline-block;
            width: 15 * $width;
            height: 15 * $height;
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
        .index {
          width: 15%;
          padding: 0;
          .num {
            margin-top: 3 * $height;
            display: inline-block;
            background-color: #28a1ec;
            padding: 5px 10px;
            border-radius: 25% 0 25% 0;
            color: white;
            vertical-align: top;
          }
        }
        .planwork {
          width: 15%;
          text-align: left;
        }
        .curmonth {
          width: 15%;
        }
        .beforemonth {
          width: 15%;
        }
        .relative {
          width: 25%;
          text-align: right;
          padding-right: 15 * $font;
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
@keyframes business-left-charts2 {
  0% {
    top: 0 * $height;
    opacity: 1;
  }
  5% {
    top: 0 * $height;
    opacity: 1;
  }
  90% {
    top: -240 * $height;
    opacity: 1;
  }
  100% {
    top: -245 * $height;
    opacity: 0;
  }
}
</style>
