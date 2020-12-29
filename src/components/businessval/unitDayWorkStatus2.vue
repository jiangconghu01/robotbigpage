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
      <table class="table" id="business-left-charts2-box">
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
              <span v-if="item.relative >= 0" class="text"><i class="text">同上月</i><i class="icon up"></i> </span>
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
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },

  created() {},
  components: {},
  computed: {
    tlist() {
      if (this.list.length === 0) {
        return []
      }
      const ls = this.list[0].map((val, index) => {
        const before = this.list[1].find((ele) => ele.flowName === val.flowName)
        const relative = this.list[2].find((ele) => ele.flowName === val.flowName)
        return {
          index: index + 1,
          planwork: val.flowName,
          curmonth: val.value,
          beforemonth: before.value,
          relative: relative.value
        }
      })
      return ls
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
@keyframes business-left-charts2 {
  0% {
    top: 0px;
    opacity: 1;
  }
  5% {
    top: 0px;
    opacity: 1;
  }
  90% {
    top: -240px;
    opacity: 1;
  }
  100% {
    top: -245px;
    opacity: 0;
  }
}
</style>
