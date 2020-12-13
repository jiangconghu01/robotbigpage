<template>
  <div class="center-map-box">
    <div class="top-map">
      <div id="china-map2" class="map-container"></div>
      <div class="map-scale-title">{{ label }}</div>
      <div class="imgicon" v-for="item in imgcions" :key="item.position[0]" :style="{ left: item.position[0] - 5 + 'px', top: item.position[1] - 20 + 'px', animationDelay: item.delay + 's' }">
        <img src="../assets/images/white_robot_icon@2.png" alt="" />
      </div>
      <div class="map-tooltip-label bg_temp_1">
        <div class="province">{{ currentmapdata['name'] }}</div>
        <div class="runtime" v-if="routeName === 'Businessval'">机器人总作业:{{ currentmapdata['value'] }}笔</div>
        <div class="runtime" v-else>机器人总运行时长:{{ currentmapdata['value'] }}小时</div>
      </div>
      <div class="line line-1" :style="{ height: (lineParams ? lineParams.height : 0) + 'px', transform: `rotate(${lineParams ? lineParams.deg : 0}deg)` }"></div>
      <div class="line line-2" v-show="lineParams && lineParams.isshowline2" :style="{ left: (lineParams ? lineParams.line2[0] : 0) + 'px', top: (lineParams ? lineParams.line2[1] : 0) + 'px' }"></div>
      <div class="scale">
        <ul>
          <li class="text">{{ labelArr[1] }}</li>
          <li class="layout"></li>
          <li class="text">{{ labelArr[0] }}</li>
        </ul>
      </div>
    </div>
    <div class="bottom-list">
      <dv-border-box-8 :reverse="true">
        <div class="company-list" id="company-list-work-num">
          <ul>
            <li v-for="item in arrlist" :key="item.name + (Math.random() * 100).toFixed(1)" :style="{ backgroundColor: item.color }">
              <el-tooltip class="item" effect="dark" :content="item.label + (item.value ? item.value : 0) + item.unit" placement="top-start">
                <div class="tool-tip-box">
                  <span class="company">{{ item.name }}</span>
                  <!-- <span v-if="routeName === 'Businessval'" class="value">作业总量：{{ item.value }}笔</span> -->
                  <!-- <span v-else class="value">运行时长：{{ item.value }}小时</span> -->
                  <!-- <img v-if="item.isrun" :style="{ animationDelay: item.delay + 's' }" src="../assets/images/white_robot_icon@2.png" alt="" /> -->
                  <!-- <div class="is-onlined">{{ item.isrun ? '已上线' : '未上线' }}</div> -->
                  <!-- <div v-if="item.isrun" class="circles">
                    <div class="cir item1"></div>
                    <div class="cir item2"></div>
                    <div class="cir item3"></div>
                    <div class="item4"></div>
                  </div> -->
                </div>
              </el-tooltip>
            </li>
          </ul>
        </div>
      </dv-border-box-8>
    </div>
  </div>
</template>
<script>
import { map, geoCoordMap, xpMapGeo } from '@/chartconfig/map.js'
import chinajson from '@/assets/json/china.json'
import { companyList, companyListBus } from '@/views/mockdata'
let timer = null
export default {
  data() {
    return {
      label: '运行时长热力级别',
      labelArr: ['忙', '闲'],
      routeName: this.$route.name,
      imgcions: [],
      currentmapdata: {},
      labelposition: [380, 103]
    }
  },
  created() {},
  components: {},
  computed: {
    arrlist() {
      return this.routeName === 'Businessval' ? companyListBus : companyList
    },
    currentPoint() {
      return xpMapGeo[this.currentmapdata['name']]
    },
    lineParams() {
      const currentPoint = this.currentPoint
      const fixPoint = this.labelposition

      if (!currentPoint) {
        return
      }

      const x = currentPoint[0] - fixPoint[0]
      const y = currentPoint[1] - fixPoint[1]
      let line1_targetpoint = Math.abs(x) > 60 ? [currentPoint[0] - 30, currentPoint[1]] : currentPoint
      const isshowline2 = Math.abs(x) > 60
      const x2 = line1_targetpoint[0] - fixPoint[0]
      const h = Math.sqrt(x2 * x2 + y * y)
      const deg = -(Math.atan2(x2, y) / Math.PI) * 180
      return {
        height: h + 1,
        deg,
        line2: line1_targetpoint,
        isshowline2
      }
    }
  },
  methods: {
    inintMap() {
      const map_box = this.$echarts.init(document.getElementById('china-map2'))
      this.$echarts.registerMap('china', chinajson)
      const mapconfig = JSON.parse(JSON.stringify(map))
      //模拟数据代码
      const list2 = ['海南', '重庆', '安徽', '贵州', '西藏', '河南', '江苏', '广东', '陕西']
      const list = [
        '广东',
        '浙江',
        '四川',
        '北京市',
        '上海',
        '河南',
        '江苏',
        '天津',
        '河北',
        '山西',
        '内蒙古',
        '辽宁',
        '吉林',
        '黑龙江',
        '安徽',
        '福建',
        '江西',
        '山东',
        '湖北',
        '湖南',
        '广西',
        '海南',
        '重庆',
        '贵州',
        '云南',
        '西藏',
        '甘肃',
        '青海',
        '宁夏',
        '新疆',
        '陕西'
      ]
      const it = [
        '52.35 ',
        '24.45 ',
        '91.65 ',
        '17.70 ',
        '33.12 ',
        '62.57 ',
        '59.80 ',
        '4.00 ',
        '10.45 ',
        '5.40 ',
        '14.60 ',
        '28.75 ',
        '13.80 ',
        '5.60 ',
        '17.30 ',
        '94.75 ',
        '7.05 ',
        '4.60 ',
        '10.80 ',
        '22.60 ',
        '5.45 ',
        '6.55 ',
        '18.89 ',
        '8.95 ',
        '25.00 ',
        '11.95 ',
        '26.20 ',
        '3.25 ',
        '9.95 ',
        '5.95 ',
        '81.80'
      ].map((val, index) => {
        return {
          name: list[index],
          value: val
        }
      })
      const yw = [
        '103',
        '85',
        '253',
        '52',
        '136',
        '177',
        '156',
        '18',
        '18',
        '36',
        '10',
        '13',
        '8',
        '16',
        '39',
        '97',
        '117',
        '21',
        '60',
        '38',
        '35',
        '24',
        '58',
        '42',
        '28',
        '23',
        '43',
        '43',
        '42',
        '99',
        '142'
      ].map((val, index) => {
        return {
          name: list[index],
          value: val
        }
      })
      //----------------
      if (this.routeName === 'Businessval') {
        mapconfig.title.text = '各单位作业总量（截至目前）'
        this.label = '作业总量热力分布'
        this.labelArr = ['高', '低']
        mapconfig.series[0].data = yw
        mapconfig.visualMap.max = 177
      } else {
        mapconfig.series[0].data = it
        mapconfig.visualMap.max = 82
      }
      const mapdatas = mapconfig.series[0].data

      const t_mapdatas = list2.map((val) => {
        const a = mapdatas.find((el) => el.name === val)
        return a
      })
      this.currentmapdata = mapdatas[0]
      const dataName = mapdatas.map((val) => val.name)
      const effectScatterData = list2.map((val) => geoCoordMap[val])
      const imgPositons = list2.map((val) => {
        return {
          name: val,
          position: xpMapGeo[val],
          delay: Math.random() * 1.2
        }
      })
      this.imgcions = imgPositons
      //   const l = list2.map((val) => {
      //     const a = imgPositons.find((el) => el.name === val)
      //     return a
      //   })
      //   this.imgcions = l
      mapconfig.series[1].data = effectScatterData
      map_box.setOption(mapconfig)
      //   Object.keys(geoCoordMap).forEach((val) => {
      //     t[val] = map_box.convertToPixel('geo', geoCoordMap[val])
      //   })
      let cu = 0
      timer = setInterval(() => {
        if (cu > 8) {
          cu = 0
        } else {
          cu = cu + 1
        }
        this.currentmapdata = t_mapdatas[cu]
      }, 3000)
    }
  },
  mounted() {
    this.inintMap()
  },
  destroyed() {
    clearInterval(timer)
  }
}
</script>
<style lang="scss" scoped>
.center-map-box {
  width: 100%;
  height: 100%;
  .top-map {
    margin-top: 60 * $height;
    height: 540 * $height;
    position: relative;
    .map-container {
      width: 100%;
      height: 100%;
    }
    .imgicon {
      width: 10 * $width;
      position: absolute;
      //   animation: aniTwo 1.5s ease-in-out 0s infinite;
      animation: bounce-in-top 2s infinite;
      img {
        width: 100%;
      }
    }
    .map-tooltip-label {
      width: 180 * $width;
      height: 50 * $height;
      position: absolute;
      left: 38%;
      top: 10%;
      & > div {
        height: 22 * $height;
        line-height: 22 * $height;
        font-size: 12 * $font;
        margin-left: 10 * $width;
        font-weight: bold;
      }
      .province {
      }
      .runtime {
      }
    }
    .line {
      width: 30 * $width;
      height: 1 * $height;
      position: absolute;
      background-color: #6bc3f5;
    }
    .line-1 {
      width: 1 * $width;
      height: 250 * $height;
      position: absolute;
      background-color: #6bc3f5;
      left: 380 * $width;
      top: 103 * $height;
      transform-origin: 0 0;
    }
    .map-scale-title {
      position: absolute;
      padding-left: 5 * $width;
      width: 225 * $width;
      height: 29 * $height;
      line-height: 29 * $height;
      font-size: 14 * $font;
      left: 15 * $width;
      bottom: 70 * $height;
      background: linear-gradient(90deg, #1d7fc3 0%, rgba(80, 236, 255, 0) 100%);
    }
    .scale {
      position: absolute;
      width: 225 * $width;
      height: 20 * $height;
      font-size: 12 * $font;
      left: 15 * $width;
      bottom: 31 * $height;
      ul {
        width: 100%;
        height: 100%;
        display: flex;
        .layout {
          flex: 1;
          text-align: center;
        }
      }
    }
  }
  .bottom-list {
    margin-top: 18 * $height;
    height: 304 * $height;
    .company-list {
      height: 100%;
      ul {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        //   align-content: center;
        flex-wrap: wrap;
        li {
          margin: 0 15 * $width;
          width: 95 * $width;
          height: 54 * $height;
          padding: 4 * $height 0;
          box-shadow: -2px 2px 8px 2px rgba(0, 0, 0, 0.26);
          border-radius: 3 * $font;
          // border: 1 * $width solid rgba(255, 255, 255, 0.438);
          // display: flex;
          // flex-direction: column;
          .tool-tip-box {
            height: 100%;
            position: relative;
            span {
              //   flex: 1;
              display: block;
              height: 22 * $height;
              line-height: 22 * $height;
              font-size: 14 * $font;
              font-weight: 400;
              padding-left: 8 * $width;
            }
            img {
              position: absolute;
              height: 22 * $height;
              left: 42 * $width;
              bottom: 7 * $width;
              animation: bounce-in-top 2s infinite;
              z-index: 1;
            }
            // .is-onlined {
            //   margin-top: 5 * $height;
            //   text-align: center;
            // }
            .circles {
              width: 40 * $width;
              height: 40 * $height;
              position: absolute;
              transform: rotateX(60deg);
              bottom: -17 * $width;
              left: 27 * $height;
              .cir {
                position: absolute;
                border-radius: 50%;
                border: 2 * $width solid #fff;
                animation: aniTwo 2s ease-in-out 0s infinite;
                transform-origin: 50% 50%;
              }
              .item4 {
                position: absolute;
                left: 16 * $width;
                top: 16 * $height;
                width: 8 * $width;
                height: 8 * $height;
                border-radius: 50%;
                background-color: #fff;
              }
              .item1 {
                left: 6 * $width;
                top: 6 * $height;
                width: 28 * $width;
                height: 28 * $height;
              }
              .item2 {
                left: 8 * $width;
                top: 8 * $height;
                width: 23 * $width;
                height: 23 * $height;
              }
              .item3 {
                left: 12 * $width;
                top: 12 * $height;
                width: 15 * $width;
                height: 15 * $height;
              }
            }
          }
        }
      }
    }
  }
  //   #company-list-work-num {
  //     animation: over-turn 7s linear infinite forwards 3s;
  //   }
  #company-list-work-num {
    padding: 20 * $height 0;
  }
}
@keyframes bounce-in-top {
  0% {
    transform: translateY(0px);
    animation-timing-function: ease-in;
  }
  40% {
    transform: translateY(-10 * $height);
    animation-timing-function: ease-in;
  }
  65% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateY(-8 * $height);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
}
</style>
