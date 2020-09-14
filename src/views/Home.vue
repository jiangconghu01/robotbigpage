<template>
  <div id="home">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
    <div>
      <dv-border-box-8 :reverse="true"><div class="chart liquid" id="liq"></div></dv-border-box-8>
    </div>
    <div>
      <dv-border-box-8 :reverse="true"><div class="chart line" id="parallel"></div></dv-border-box-8>
    </div>
    <div>
      <dv-border-box-8 :reverse="true"><div class="chart line" id="line"></div></dv-border-box-8>
    </div>
    <div class="map-box">
      <dv-border-box-8 :reverse="true"><div class="chart map" id="map"></div></dv-border-box-8>
      <div class="label-1"></div>
    </div>
    <div class="list-box">
      <div class="line-list" id="line-1"></div>
      <div class="line-list" id="line-2"></div>
      <div class="line-list" id="line-3"></div>
      <div class="line-list" id="line-4"></div>
      <div class="line-list" id="line-5"></div>
      <div class="line-list" id="line-6"></div>
    </div>
    <div>
      <dv-border-box-8 :reverse="true"><div class="chart line" id="line"></div></dv-border-box-8>
    </div>
    <div>
      <dv-border-box-8 :reverse="true"><div class="line" id=""></div> </dv-border-box-8>
    </div>
    <div class="bar-list-box">
      <dv-border-box-8 :reverse="true">
        <chart-scroll-item class="bar-list" :index="1"></chart-scroll-item>
        <chart-scroll-item class="bar-list" :index="2"></chart-scroll-item>
        <chart-scroll-item class="bar-list" :index="3"></chart-scroll-item>
        <chart-scroll-item class="bar-list" :index="4"></chart-scroll-item>
        <chart-scroll-item class="bar-list" :index="5"></chart-scroll-item>
        <chart-scroll-item class="bar-list" :index="6"></chart-scroll-item>
        <chart-scroll-item class="bar-list" :index="1"></chart-scroll-item>
        <chart-scroll-item class="bar-list" :index="2"></chart-scroll-item>
        <chart-scroll-item class="bar-list" :index="3"></chart-scroll-item>
        <chart-scroll-item class="bar-list" :index="4"></chart-scroll-item>
        <chart-scroll-item class="bar-list" :index="5"></chart-scroll-item>
        <chart-scroll-item class="bar-list" :index="6"></chart-scroll-item>
      </dv-border-box-8>
    </div>
  </div>
</template>

<script>
import 'echarts-liquidfill'
import liq from '@/chartconfig/liq.js'
import parallel from '@/chartconfig/parallel.js'
import line from '@/chartconfig/line.js'
import map from '@/chartconfig/map.js'
import chinajson from '@/assets/json/china.json'
// import chinajson from "echarts/map/json/china.json";
// require("echarts/map/js/china.js");
import chartScrollItem from '@/components/chartScrollItem.vue'
export default {
  data() {
    return {}
  },
  created() {},
  components: {
    chartScrollItem
  },
  computed: {},
  methods: {
    initLiq() {
      const box = this.$echarts.init(document.getElementById('liq'))
      box.setOption(liq)
    },
    initParallel() {
      const box = this.$echarts.init(document.getElementById('parallel'))
      box.setOption(parallel)
      let center = 0
      let flag = 'to'
      ;(function loop() {
        flag === 'to' && (center += 2)
        flag === 'back' && (center -= 2)
        center > 56 && flag === 'to' && (flag = 'back')
        center < 4 && flag === 'back' && (flag = 'to')
        // console.log(center)
        box.setOption({ parallel: { axisExpandCenter: center } })
        setTimeout(function() {
          loop()
        }, 600)
      })()
    },
    initLine() {
      const box = this.$echarts.init(document.getElementById('line'))
      box.setOption(line)
      const box1 = this.$echarts.init(document.getElementById('line-1'))
      const box2 = this.$echarts.init(document.getElementById('line-2'))
      const box3 = this.$echarts.init(document.getElementById('line-3'))
      const box4 = this.$echarts.init(document.getElementById('line-4'))
      const box5 = this.$echarts.init(document.getElementById('line-5'))
      const box6 = this.$echarts.init(document.getElementById('line-6'))
      box1.setOption(line)
      box2.setOption(line)
      box3.setOption(line)
      box4.setOption(line)
      box5.setOption(line)
      box6.setOption(line)
    },
    inintMap() {
      const map_box = this.$echarts.init(document.getElementById('map'))
      this.$echarts.registerMap('china', chinajson)
      map_box.setOption(map)
    },
    initList() {
      const anime = this.$anime
      const yTrans = []
      anime.set('.line-list', {
        translateY: function(el, i, l) {
          yTrans[i] = { y: i * 150 }
          return i * 150
        }
      })
      anime({
        targets: yTrans,
        duration: 8000, //走一周持续时间
        easing: 'linear',
        y: '-=450',
        loop: true,
        update: function(anim) {
          anime.set('.line-list', {
            translateY: function(el, i, l) {
              return yTrans[i].y % 450
            }
          })
        }
      })

      const yTrans_bar = []
      anime.set('.bar-list', {
        translateY: function(el, i, l) {
          yTrans_bar[i] = { y: i * 120 }
          return i * 120
        }
      })
      anime({
        targets: yTrans_bar,
        duration: 10000, //走一周持续时间
        easing: 'linear',
        y: '-=720',
        loop: true,
        update: function(anim) {
          anime.set('.bar-list', {
            translateY: function(el, i, l) {
              return yTrans_bar[i].y % 720
            }
          })
        }
      })
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initLiq()
      this.initParallel()
      this.initLine()
      this.inintMap()
      this.initList()
    })
  }
}
</script>

<style lang="scss" scoped>
#home {
  height: 100%;
  width: 100%;
  overflow: auto;
  padding-bottom: 150px;
  background-color: rgb(46, 106, 168);
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-wrap: wrap;
  & > div {
    width: 47%;
    height: 300px;
    margin-left: 2%;
    margin-top: 20px;
    position: relative;
    // background-color: rgb(158, 184, 241);
    & > div {
      height: 100%;
      width: 100%;
    }
    .chart {
      height: 100%;
    }
  }
  .map-box {
    position: relative;
    .label-1 {
      position: absolute;
      width: 40px;
      height: 20px;
      background-color: rgba(219, 236, 236, 0.11);
      right: 48.5%;
      top: 19%;
    }
  }
  .list-box {
    height: 450px;
    border: 1px solid rgba(80, 123, 241, 0.849);
    overflow: hidden;
    & > div {
      position: absolute;
      height: 33%;
    }
  }
  .bar-list-box {
    height: 360px;
    overflow: hidden;
    .bar-list {
      position: absolute;
    }
  }
}
</style>
