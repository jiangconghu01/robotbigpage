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
          <chartTitle>各流程累计作业量及通过率</chartTitle>
          <!-- <chartTitle>各流程当日作业量及通过率</chartTitle> -->
          <div class="title_part_line"></div>
        </div>
        <div class="bar-list-layout">
          <div class="bar-list-box">
            <barScrollItem class="bar-list" :index="1"></barScrollItem>
            <barScrollItem class="bar-list" :index="2"></barScrollItem>
            <barScrollItem class="bar-list" :index="3"></barScrollItem>
            <barScrollItem class="bar-list" :index="4"></barScrollItem>
            <barScrollItem class="bar-list" :index="5"></barScrollItem>
            <barScrollItem class="bar-list" :index="6"></barScrollItem>
            <barScrollItem class="bar-list" :index="7"></barScrollItem>
            <barScrollItem class="bar-list" :index="8"></barScrollItem>
            <barScrollItem class="bar-list" :index="9"></barScrollItem>
            <barScrollItem class="bar-list" :index="10"></barScrollItem>
          </div>
        </div>
      </div>
      <!-- <div class="left-chart4 bg_temp_1 padding-layout">
        <chartTitle>各单位业务流程执行情况</chartTitle>
        <div class="title_part_line"></div>
        <div class="table-box">
          <ul class="table-title">
            <li>单位名称</li>
            <li>累计终端使用时长</li>
            <li>本月终端使用时长</li>
            <li>环比</li>
          </ul>
          <ul class="table-body" id="unit-work-run-status">
            <li v-for="(item, index) in unitTimernalSourceList" :key="index">
              <span class="name">{{ item.name }}</span>
              <span class="accumulate">{{ item.accumulateTime }}</span>
              <span class="curmonth">{{ item.curMonthTime }}</span>
              <span class="relativeratio">{{ item.relativeRatio }}</span>
            </li>
          </ul>
        </div>
      </div> -->
      <!-- <div class="left-chart5 bg_temp_1 padding-layout">
        <div class="robot-left">
          <div class="t1">今日活跃机器人</div>
          <div class="t2">今日工单量</div>
        </div>
        <div class="robot-list">
          <div class="table-box">
            <ul>
              <li class="item" v-for="item in robotRuningList" :key="item.index">
                <span class="icon"><robot class="r" :num="item.unitNum" :index="item.index"></robot></span>
                <span class="name">{{ item.name }}</span>
                <span class="num">{{ item.unitNum }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div> -->
    </div>
    <div class="center">
      <div class="top-chart bg_temp_1">
        <div class="title">
          <chartTitle>当月工单监控结果</chartTitle>
          <div class="title_part_line"></div>
        </div>
        <div class="container"><monthOrderMonitorResult></monthOrderMonitorResult></div>
      </div>
      <!-- <div class="bottom-line">
        <dv-border-box-8 :reverse="true">
          <div class="title">
            <chartTitle>各单位当月异常统计</chartTitle>
            <div class="title_part_line"></div>
            <ul class="lengends">
              <li class="lengend">异常量</li>
              <li class="lengend cur">异常比例</li>
            </ul>
          </div>
          <div class="parallel-box" id="parallel-exc-box"></div>
        </dv-border-box-8>
      </div> -->
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
      <!-- <div class="right-chart2 bg_temp_1">
        <div class="title">
          <chartTitle>各单位任务情况（日）</chartTitle>
          <div class="title_part_line"></div>
        </div>
        <unitDayWorkStatus></unitDayWorkStatus>
      </div> -->
      <!-- <div class="left-chart3 bg_temp_1">
        <div class="title">
          <chartTitle>各流程累计作业量及通过率</chartTitle>
          <div class="title_part_line"></div>
        </div>
        <div class="bar-list-layout">
          <div class="bar-list-box">
            <barScrollItem class="bar-list" :index="1"></barScrollItem>
            <barScrollItem class="bar-list" :index="2"></barScrollItem>
            <barScrollItem class="bar-list" :index="3"></barScrollItem>
            <barScrollItem class="bar-list" :index="4"></barScrollItem>
            <barScrollItem class="bar-list" :index="5"></barScrollItem>
            <barScrollItem class="bar-list" :index="6"></barScrollItem>
            <barScrollItem class="bar-list" :index="7"></barScrollItem>
            <barScrollItem class="bar-list" :index="8"></barScrollItem>
            <barScrollItem class="bar-list" :index="9"></barScrollItem>
            <barScrollItem class="bar-list" :index="10"></barScrollItem>
          </div>
        </div>
      </div> -->
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
                <span class="unitname">{{ item.termicode }}</span>
                <span class="workflow">{{ item.ip }}</span>

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
import unitDayWorkStatus from '@/components/businessval/unitDayWorkStatus.vue'
import robot from '@/components/businessval/robot.vue'
import monthOrderMonitorResult from '@/components/businessval/monthOrderMonitorResult.vue'
import barScrollItem from '@/components/chartScrollItem.vue'
export default {
  data() {
    return {
      //执行 ，排队，异常
      unitWorkingStatus: [
        { index: 1, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', status: 'finish' },
        { index: 2, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', status: 'exe' },
        { index: 3, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', status: 'beforhandle' },
        { index: 4, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', status: 'lineup' },
        { index: 5, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', status: 'exc' },
        { index: 6, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', status: 'exc' },
        { index: 7, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', status: 'exc' },
        { index: 8, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', status: 'exc' },
        { index: 9, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', status: 'exc' },
        { index: 10, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', status: 'exc' },
        { index: 11, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', status: 'exc' },
        { index: 12, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', status: 'exc' },
        { index: 13, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', status: 'exc' },
        { index: 14, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', status: 'exc' },
        { index: 15, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', status: 'exc' },
        { index: 16, termicode: 'sdfsdfsjf231234', ip: '192.168.0.106', status: 'exc' }
      ],
      unitTimernalSourceList: [
        { name: '某某某某单位', accumulateTime: 2992, curMonthTime: 222, relativeRatio: '55%' },
        { name: '某某某某单位2', accumulateTime: 155, curMonthTime: 22, relativeRatio: '55%' }
      ],
      accumulateWorkNum: [0, 0, 6, 8, '亿', 0, 0, 6, 1, '万', 0, 0, 6, 8],
      cutDownNum: [0, 0, 6, 8, 0, 0, 6, 8, 0, 0, 6, 8, 9, 'h'],
      robotRuningList: [
        { index: 100, name: '单位名称', unitNum: 23 },
        { index: 2, name: '单位名称', unitNum: 8 },
        { index: 3, name: '单位名称', unitNum: 23 },
        { index: 1, name: '单位xxxx名称', unitNum: 23 },
        { index: 4, name: '单位fff名称', unitNum: 23 },
        { index: 5, name: '单位名称', unitNum: 27 },
        { index: 6, name: '单位名称', unitNum: 3 },
        { index: 7, name: '单位名称', unitNum: 23 },
        { index: 8, name: '单位名称', unitNum: 23 }
      ]
    }
  },
  created() {},
  components: { layoutTitle, chartTitle, workRightTop, unitDayWorkStatus, barScrollItem, robot, monthOrderMonitorResult },
  computed: {},
  methods: {
    setLeftTopNum() {},
    setParallelExc() {
      const box = this.$echarts.init(document.getElementById('parallel-exc-box'))
      box.setOption(parallel)
      let center = 0
      let flag = 'to'
      ;(function loop() {
        flag === 'to' && (center += 2)
        flag === 'back' && (center -= 2)
        center > 56 && flag === 'to' && (flag = 'back')
        center < 4 && flag === 'back' && (flag = 'to')
        // console.log(center)
        // box.setOption({ parallel: [{ axisExpandCenter: center }, { axisExpandCenter: center }] })
        box.setOption({ parallel: { axisExpandCenter: center } })
        setTimeout(function() {
          loop()
        }, 600)
      })()
    }
  },
  mounted() {
    this.setParallelExc()
  }
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
      height: 330 * $height;
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
        animation: business-left-chart2 17s linear infinite forwards;
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
    .left-chart4 {
      height: 190 * $height;
      margin-top: 8 * $height;
      .table-box {
        margin-top: 15 * $height;
        .table-body {
          li {
            padding: 8 * $height 0;
          }
        }
      }
    }
    .left-chart5 {
      height: 125 * $height;
      margin-top: 8 * $height;
      padding: 5 * $height 10 * $width;
      display: flex;
      .robot-left {
        width: 135 * $width;
        font-size: 14 * $font;
        .t1 {
          height: 75 * $height;
          line-height: 75 * $height;
          font-weight: 400;
          //   text-align: center;
        }
        .t2 {
          height: 37 * $height;
          line-height: 37 * $height;
          font-weight: 400;
          //   text-align: center;
        }
      }
      .robot-list {
        flex: 1;
        overflow: hidden;
        .table-box {
          width: 100%;
          height: 100%;
          ul {
            width: 100%;
            white-space: nowrap;
          }
          .item {
            padding: 0 5 * $width;
            // float: left;
            display: inline-block;
            span {
              display: block;
            }
            .icon {
              height: 46 * $height;
            }
            .name {
              height: 24 * $height;
              line-height: 24 * $height;
            }
            .num {
              height: 20 * $height;
              line-height: 20 * $height;
              text-align: center;
            }
          }
        }
      }
    }
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
    .top-chart {
      margin-top: 40 * $height;
      height: 600 * $height;
      .title {
        width: 100%;
        height: 105 * $height;
        padding: 20 * $height 30 * $width;
        padding-top: 30 * $height;
        position: relative;
        .title_part_line {
          top: 85 * $height;
        }
      }
      .container {
        height: 489 * $height;
      }
    }
    .bottom-line {
      margin-top: 8 * $height;
      height: 258 * $height;
      background-color: rgba(0, 0, 0, 0.384);
      .title {
        padding: 15 * $height 30 * $width;
        position: relative;
        .title_part_line {
          top: 60 * $height;
        }
        .lengends {
          position: absolute;
          right: 30 * $width;
          top: 18 * $height;
          display: flex;
          li {
            font-size: 12 * $font;
            font-weight: 400;
            padding-left: 12 * $width;
            position: relative;
            margin-left: 30 * $width;
            &::before {
              content: '';
              display: block;
              position: absolute;
              width: 10 * $width;
              height: 10 * $height;
              background-color: #eea42c;
              left: -5 * $width;
              top: 1 * $height;
            }
          }
          li.cur {
            &::before {
              background-color: #669aff;
            }
          }
        }
      }
      .parallel-box {
        position: absolute;
        top: 60 * $height;
        left: 0;
        height: 198 * $height;
        width: 100%;
      }
    }
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
      margin-top: 8 * $height;
      .title {
        padding: 15 * $height 30 * $width;
        position: relative;
        // .title_part_line {
        //   top: 60 * $height;
        // }
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
          flex: 2;
        }
        .unitname {
          flex: 4;
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
            flex: 2;
          }
          .unitname {
            flex: 4;
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
        animation: business-right-charts3 17s linear infinite forwards;
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
    top: -550 * $height;
    opacity: 1;
  }
  100% {
    top: -555 * $height;
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
</style>
