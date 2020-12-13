<template>
  <div class="businessval-view">
    <div class="left">
      <div class="left-title">
        <layoutTitle :direction="'left'">
          <template v-slot:left>
            作业统计(截止目前)
          </template>
        </layoutTitle>
      </div>
      <div class="left-num1 bg_temp_1 padding-layout">
        <chartTitle>累计作业执行量（笔）</chartTitle>
        <div class="title_part_line"></div>
        <ul class="drowp-list accumulate-work">
          <li v-for="(item, index) in accumulateWorkNum" :key="index" :class="typeof item === 'number' ? 'num' : 'text'">
            <i>{{ item }}</i>
          </li>
        </ul>
      </div>
      <div class="left-num2 bg_temp_1 padding-layout">
        <chartTitle>节省人时（小时）</chartTitle>
        <div class="title_part_line"></div>
        <ul class="drowp-list accumulate-work">
          <li v-for="(item, index) in cutDownNum" :key="index" :class="typeof item === 'number' ? 'num' : 'text'">
            <i>{{ item }}</i>
          </li>
        </ul>
      </div>
      <div class="left-chart3 bg_temp_1">
        <div class="title">
          <chartTitle>各流程累计作业量(笔)</chartTitle>
          <div class="title_part_line"></div>
        </div>
        <div class="bar-list-layout">
          <unitDayWorkStatus></unitDayWorkStatus>
        </div>
      </div>
    </div>
    <div class="center">
      <centerMap></centerMap>
    </div>
    <div class="right">
      <div class="right-title">
        <layoutTitle :direction="'right'">
          <template v-slot:right>
            作业监控（日）
          </template>
        </layoutTitle>
      </div>
      <div class="right-chart1 bg_temp_1">
        <workRightTop></workRightTop>
      </div>

      <div class="right-chart2 bg_temp_1">
        <div class="title">
          <chartTitle>各流程当日作业量占比</chartTitle>
          <div class="title_part_line"></div>
        </div>
        <div class="bar-list-layout">
          <div class="bar-list-box">
            <barScrollItem class="bar-list" :index="1" :datanum="9" :max="62">
              <div>支付失败清单</div>
              <div>整理</div>
            </barScrollItem>
            <barScrollItem class="bar-list" :index="2" :datanum="0" :max="62">
              <div>资产转资确认</div>
              <div>流程</div>
            </barScrollItem>
            <barScrollItem class="bar-list" :index="3" :datanum="0" :max="62">
              <div>竣工决算辅助</div>
              <div>审核流程</div>
            </barScrollItem>
            <barScrollItem class="bar-list" :index="4" :datanum="1" :max="62">
              <div>租赁类资产稽</div>
              <div>核表编制流程</div>
            </barScrollItem>
            <barScrollItem class="bar-list" :index="5" :datanum="7" :max="62">
              <div>现金流量表编</div>
              <div>制流程</div>
            </barScrollItem>
            <barScrollItem class="bar-list" :index="6" :datanum="23" :max="62">
              <div>月末关账检查</div>
              <div>流程</div>
            </barScrollItem>
            <barScrollItem class="bar-list" :index="7" :datanum="0" :max="62">
              <div>开账关账管理</div>
              <div>流程</div>
            </barScrollItem>
            <barScrollItem class="bar-list" :index="8" :datanum="3" :max="62">
              <div>应交增值税结</div>
              <div>转计提流程</div>
            </barScrollItem>
            <barScrollItem class="bar-list" :index="9" :datanum="18" :max="62">
              <div>纳税申报流程</div>
              <div></div>
            </barScrollItem>
            <barScrollItem class="bar-list" :index="10" :datanum="1" :max="62">
              <div>关联交易表填</div>
              <div>报流程</div>
            </barScrollItem>
          </div>
        </div>
      </div>
      <div class="right-chart3 bg_temp_1 padding-layout">
        <chartTitle>各单位实时作业状态</chartTitle>
        <div class="title_part_line"></div>
        <div class="table-box">
          <ul class="table-title">
            <li class="index">序号</li>
            <li class="unitname">单位名称</li>
            <li class="workflow">作业流程</li>
            <li class="status">状态</li>
          </ul>
          <div class="table-body">
            <ul class="table-body-scroll">
              <li v-for="(item, index) in unitWorkingStatus" :key="index">
                <span class="index">{{ item.index }}</span>
                <span class="unitname">{{ item.unitname }}</span>
                <span class="workflow">{{ item.workflow }}</span>

                <span class="status" v-if="item.status == 'finish'"> <i class="finish button">完成</i></span>
                <span class="status" v-else-if="item.status == 'exe'"><i class="exe button">执行</i></span>
                <span class="status" v-else-if="item.status == 'beforhandle'"><i class="beforhandle button">预占</i></span>
                <span class="status" v-else-if="item.status == 'lineup'"><i class="lineup button">排队</i></span>
                <span class="status" v-else><i class="exc button">异常</i></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { option as parallel } from '@/chartconfig/parallel.js'
import layoutTitle from '@/components/layoutTitle'
import chartTitle from '@/components/chartTitle'
import workRightTop from '@/components/businessval/workRightTop.vue'
// import unitDayWorkStatus from '@/components/businessval/unitDayWorkStatus.vue'
import unitDayWorkStatus from '@/components/businessval/unitDayWorkStatus2.vue'
import robot from '@/components/businessval/robot.vue'
import monthOrderMonitorResult from '@/components/businessval/monthOrderMonitorResult.vue'
import barScrollItem from '@/components/chartScrollItem.vue'
import centerMap from '@/components/centerMap2' //路由缓存后不会刷新，静态页面演示时候用
import { busLastList } from './mockdata'
export default {
  name: 'Businessval',
  data() {
    return {
      //执行 ，排队，异常
      unitWorkingStatus: busLastList,
      unitTimernalSourceList: [
        { name: '某某某某单位', accumulateTime: 2992, curMonthTime: 222, relativeRatio: '55%' },
        { name: '某某某某单位2', accumulateTime: 155, curMonthTime: 22, relativeRatio: '55%' }
      ],
      accumulateWorkNum: [0, 0, 0, 0, '亿', 0, 0, 0, 0, '万', 0, 6, 3, 9],
      cutDownNum: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 'h']
    }
  },
  created() {},
  components: { layoutTitle, chartTitle, workRightTop, unitDayWorkStatus, barScrollItem, robot, monthOrderMonitorResult, centerMap },
  computed: {},
  methods: {},
  mounted() {}
}
</script>
<style lang="scss" scoped>
.businessval-view {
  width: 100%;
  display: flex;
  justify-content: center;
  //   align-items: center;

  .left {
    width: 532 * $width;
    margin-left: 40 * $width;
    .left-title {
      height: 32 * $height;
    }
    .left-num1 {
      height: 118 * $height;
      margin-top: 2 * $height;
      padding-left: 20 * $width;
      padding-right: 0 * $width;
    }
    .left-num2 {
      height: 118 * $height;
      margin-top: 8 * $height;
      padding-left: 20 * $width;
      padding-right: 0 * $width;
    }
    .left-chart3 {
      height: 661 * $height;
      margin-top: 8 * $height;
      .title {
        padding: 15 * $height 30 * $width;
      }
      .bar-list-layout {
        height: 590 * $height;
        position: relative;
        overflow: hidden;
      }
      .bar-list-box {
        // animation: business-left-chart2 17s linear infinite forwards;
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
      }
      .bar-list {
        padding-left: 10 * $width;
        padding-right: 0;
      }
    }
    // .left-chart4 {
    //   height: 190 * $height;
    //   margin-top: 8 * $height;
    //   .table-box {
    //     margin-top: 15 * $height;
    //     .table-body {
    //       li {
    //         padding: 8 * $height 0;
    //       }
    //     }
    //   }
    // }
    // .left-chart5 {
    //   height: 125 * $height;
    //   margin-top: 8 * $height;
    //   padding: 5 * $height 10 * $width;
    //   display: flex;
    //   .robot-left {
    //     width: 135 * $width;
    //     font-size: 14 * $font;
    //     .t1 {
    //       height: 75 * $height;
    //       line-height: 75 * $height;
    //       font-weight: 400;
    //       //   text-align: center;
    //     }
    //     .t2 {
    //       height: 37 * $height;
    //       line-height: 37 * $height;
    //       font-weight: 400;
    //       //   text-align: center;
    //     }
    //   }
    //   .robot-list {
    //     flex: 1;
    //     overflow: hidden;
    //     .table-box {
    //       width: 100%;
    //       height: 100%;
    //       ul {
    //         width: 100%;
    //         white-space: nowrap;
    //       }
    //       .item {
    //         padding: 0 5 * $width;
    //         // float: left;
    //         display: inline-block;
    //         span {
    //           display: block;
    //         }
    //         .icon {
    //           height: 46 * $height;
    //         }
    //         .name {
    //           height: 24 * $height;
    //           line-height: 24 * $height;
    //         }
    //         .num {
    //           height: 20 * $height;
    //           line-height: 20 * $height;
    //           text-align: center;
    //         }
    //       }
    //     }
    //   }
    // }
    .drowp-list {
      margin-top: 25 * $height;
      li.num {
        &:nth-child(1) {
          margin-left: 0;
        }
        width: 32 * $width;
        height: 39 * $height;
        line-height: 39 * $height;
        background: rgba(0, 174, 255, 0.8);
        font-size: 34 * $font;
        font-family: Arial;
        font-weight: bold;
        text-align: center;
        margin-left: 6 * $width;
        float: left;
      }
      li.text {
        font-size: 12 * $font;
        font-weight: bold;
        height: 39 * $height;
        width: 10 * $width;
        margin-left: 5 * $width;
        float: left;
        position: relative;
        i {
          position: absolute;
          bottom: 0;
        }
      }
    }
  }
  .center {
    flex: 1;
    padding: 0 10 * $width;
    // .top-chart {
    //   margin-top: 40 * $height;
    //   height: 600 * $height;
    //   .title {
    //     width: 100%;
    //     height: 105 * $height;
    //     padding: 20 * $height 30 * $width;
    //     padding-top: 30 * $height;
    //     position: relative;
    //     .title_part_line {
    //       top: 85 * $height;
    //     }
    //   }
    //   .container {
    //     height: 489 * $height;
    //   }
    // }
    // .bottom-line {
    //   margin-top: 8 * $height;
    //   height: 258 * $height;
    //   background-color: rgba(0, 0, 0, 0.384);
    //   .title {
    //     padding: 15 * $height 30 * $width;
    //     position: relative;
    //     .title_part_line {
    //       top: 60 * $height;
    //     }
    //     .lengends {
    //       position: absolute;
    //       right: 30 * $width;
    //       top: 18 * $height;
    //       display: flex;
    //       li {
    //         font-size: 12 * $font;
    //         font-weight: 400;
    //         padding-left: 12 * $width;
    //         position: relative;
    //         margin-left: 30 * $width;
    //         &::before {
    //           content: '';
    //           display: block;
    //           position: absolute;
    //           width: 10 * $width;
    //           height: 10 * $height;
    //           background-color: #eea42c;
    //           left: -5 * $width;
    //           top: 1 * $height;
    //         }
    //       }
    //       li.cur {
    //         &::before {
    //           background-color: #669aff;
    //         }
    //       }
    //     }
    //   }
    //   .parallel-box {
    //     position: absolute;
    //     top: 60 * $height;
    //     left: 0;
    //     height: 198 * $height;
    //     width: 100%;
    //   }
    // }
  }
  .right {
    width: 532 * $width;
    margin-right: 40 * $width;
    .right-title {
      height: 32 * $height;
    }
    .right-chart1 {
      height: 158 * $height;
      margin-top: 2 * $height;
    }
    .right-chart2 {
      height: 350 * $height;
      //   height: 661 * $height;
      margin-top: 8 * $height;
      .title {
        padding: 15 * $height 30 * $width;
      }
      .bar-list-layout {
        height: 260 * $height;
        position: relative;
        overflow: hidden;
      }
      .bar-list-box {
        animation: business-right-chart2 17s linear infinite forwards;
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
      }
      .bar-list {
        padding-left: 10 * $width;
        padding-right: 0;
      }
    }
    .right-chart3 {
      height: 388 * $height;
      margin-top: 8 * $height;
      .table-title {
        .index {
          flex: 2;
        }
        .status {
          flex: 3;
        }
        .unitname {
          flex: 3;
        }
        .workflow {
          flex: 4;
        }
      }
      .table-body {
        margin-top: 15 * $height;
        height: 255 * $height;
        overflow: hidden;
        position: relative;
        li {
          //   height: 50 * $height;
          //   line-height: 50 * $height;
          margin-top: 0 * $height;
          span {
            font-size: 14 * $font;
            .finish {
              background-color: #1d7fc4;
            }
            .exe {
              background-color: #6699ff;
            }
            .beforhandle {
              background-color: #f4a527;
            }
            .lineup {
              background-color: #5defda;
            }
            .exc {
              background-color: #ff3330;
            }
          }
          .index {
            flex: 2;
          }
          .status {
            flex: 3;
          }
          .unitname {
            flex: 3;
          }
          .workflow {
            flex: 4;
          }
        }
      }
      .table-body-scroll {
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        animation: business-right-charts3 15s linear infinite forwards;
      }
    }
  }
  .padding-layout {
    padding: 15 * $height 30 * $width;
  }
  #unit-work-run-status {
    animation: over-turn 5s linear infinite forwards 3s;
  }
}
@keyframes business-right-charts3 {
  0% {
    top: 0 * $height;
    opacity: 1;
  }
  90% {
    top: -195 * $height;
    opacity: 1;
  }
  100% {
    top: -200 * $height;
    opacity: 0;
  }
}
@keyframes business-left-chart2 {
  0% {
    top: 0 * $height;
    opacity: 1;
  }
  90% {
    top: -390 * $height;
    opacity: 1;
  }
  100% {
    top: -395 * $height;
    opacity: 0;
  }
}
@keyframes business-right-chart2 {
  0% {
    top: 0 * $height;
    opacity: 1;
  }
  90% {
    top: -340 * $height;
    opacity: 1;
  }
  100% {
    top: -345 * $height;
    opacity: 0;
  }
}
</style>
