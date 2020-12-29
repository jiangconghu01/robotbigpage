<template>
  <div class="common-header">
    <div class="date">
      <div class="day">{{ getFormatDate(date).day }}</div>
      <div class="time">{{ getFormatDate(date).time }}</div>
      <!-- {{ getFormatDate(date) }} -->
    </div>
    <div class="background">
      <i @click="toNewPage">中国移动智慧财务机器人</i>
    </div>
    <div class="weather">
      <div id="weather-v2-plugin-standard" v-show="isload"></div>
      <div class="temperature">{{ getTemperature }}</div>
    </div>
    <div @click="toNewPage" class="sub-title">{{ subTitle }}</div>
  </div>
</template>
<script>
const dataMap = {
  Index: '综合视图',
  Singleindex: '综合视图',
  Businessval: '业务监控',
  Monitor: 'IT监控'
}

export default {
  data() {
    return {
      date: new Date(),
      temperature: '',
      isload: false,
      subTitle: ''
    }
  },
  created() {
    // this.getWeather()
  },
  computed: {
    getTemperature() {
      return this.temperature.replace('/', '~')
    }
  },
  methods: {
    getFormatDate() {
      const date = new Date()
      const year = date.getFullYear()
      const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
      const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
      const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
      const weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      const wk = date.getDay()
      const week = weeks[wk]
      return { day: year + '年' + month + '月' + day + '日 ' + week, time: hours + ':' + minutes }
    },
    // async getWeather() {
    //   //   const ip = returnCitySN['cip']
    //   //   const ip = await this.$jsonp('http://pv.sohu.com/cityjson?ie=utf-8')
    //   //   const location = await this.$jsonp('http://api.map.baidu.com/location/ip?ak=cSvZrRyqkAxhOQY9s5BlP2niwCCRGjHT&ip=' + ip + '&coor=bd09ll')
    //   //   const weather = await this.$jsonp('http://api.map.baidu.com/weather/v1/?district_id=222405&data_type=all&ak=cSvZrRyqkAxhOQY9s5BlP2niwCCRGjHT')
    //   //   console.log(ip, location, weather)
    // }
    initWeather() {
      try {
        window.WIDGET = {
          CONFIG: {
            layout: 1,
            width: '150',
            height: '80',
            background: 1,
            dataColor: 'FFFFFF',
            language: 'zh',
            borderRadius: 5,
            key: 'uIGGB0rJq5'
          }
        }
      } catch (error) {
        console.log(error)
      }
    },
    switchPage() {
      const ruotes = ['Index', 'Businessval', 'Monitor']
      //   const href1 = this.$router.resolve({ name: ruotes[0] })
      //   const href2 = this.$router.resolve({ name: ruotes[1] })
      //   const href3 = this.$router.resolve({ name: ruotes[2] })
      //   this.$route.name === 'Index' && window.open(href2.href, '_blank')
      //   this.$route.name === 'Monitor' && window.open(href3.href, '_blank')
      //   this.$route.name === 'Businessval' && window.open(href1.href, '_blank')
      if (this.$route.name === 'Index') {
        this.$router.replace({ name: ruotes[1] })
      } else if (this.$route.name === 'Businessval') {
        this.$router.replace({ name: ruotes[2] })
      } else {
        this.$router.replace({ name: ruotes[0] })
      }
    },
    toNewPage() {
      this.switchPage()
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.date = new Date()
      const a = document.querySelector('.wv-v-h-col-right .wv-f-forecast-item .wv-f-forecast-tmp .wv-f-a')
      a && (this.temperature = a.innerText)
    }, 10000)
    this.initWeather()
    setTimeout(() => {
      this.isload = true
      const a = document.querySelector('.wv-v-h-col-right .wv-f-forecast-item .wv-f-forecast-tmp .wv-f-a')
      a && (this.temperature = a.innerText)
    }, 1000)
    //自动切换页面
    // const _this = this
    // const duration = 32000
    // setTimeout(function spage() {
    //   _this.switchPage()
    //   setTimeout(spage, duration)
    // }, duration)
  },
  watch: {
    $route(to, from) {
      this.subTitle = dataMap[to.name]
    }
  },
  beforeDestroy() {
    this.timer && clearInterval(this.timer)
  }
}
</script>
<style lang="scss" scoped>
.common-header {
  width: 100%;
  height: 133 * $height;
  position: relative;
  .date {
    position: absolute;
    width: 200 * $width;
    height: 60 * $height;
    left: 43 * $width;
    top: 25 * $height;
    .day {
      font-size: 18 * $font;
      height: 28 * $font;
      line-height: 28 * $font;
    }
    .time {
      font-size: 28 * $font;
    }
  }
  .weather {
    position: absolute;
    width: 180 * $width;
    height: 60 * $height;
    right: 23 * $width;
    top: 25 * $height;
    .temperature {
      position: absolute;
      left: 122 * $width;
      bottom: 8 * $height;
      font-size: 14 * $font;
    }
  }
  .background {
    width: 1702 * $width;
    height: 133 * $height;
    background: url('../assets/images/header.png') no-repeat;
    // background: url('../assets/images/header@2.png') no-repeat;
    // background-size: contain;
    @include Xcenter;
    top: -20 * $height;
    text-align: center;
    padding-top: 35 * $height;
    padding-left: 20 * $width; //阴影后位置不居中调整
    i {
      font-size: 50 * $font;
      //   animation: text-pop-up-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      text-shadow: 3px 5px 8px rgba(0, 0, 0, 0.25), 4px 6px 8px rgba(0, 0, 0, 0.405);
      font-weight: bold;
      cursor: pointer;
      display: inline-block;
      transform: scale(0.8, 1);
    }
  }
  .sub-title {
    top: 100 * $height;
    @include Xcenter;
    padding-left: 45 * $width; //阴影后位置不居中调整
    font-size: 28 * $font;
    font-weight: bold;
    cursor: pointer;
  }
}
@keyframes text-pop-up-top {
  0% {
    transform: translateY(0);
    transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    transform: translateY(-50px);
    transform-origin: 50% 50%;
    text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 10px 8px rgba(0, 0, 0, 0.3),
      10px 15px 6px rgba(0, 0, 0, 0.5);
  }
}
</style>
<style lang="scss">
#weather-v2-plugin-standard {
  width: 180 * $width !important;
  height: 60 * $height !important;
  background: none !important;
  position: relative;
  .wv-v-h-col-right {
    display: none;
  }
  .wv-lt-col-5 {
    display: none;
  }
  .wv-lt-location {
    a {
      display: none;
    }
  }
  .wv-n-h-now-rain {
    display: none;
  }
  .wv-v-h-now {
    padding: 0;
  }
  .wv-v-h-col-left,
  .wv-n-h-now,
  .wv-lt-col-7,
  .wv-lt-col-5,
  .wv-n-h-col-10 {
    overflow: visible;
    position: unset;
  }
  .wv-lt-location {
    position: absolute;
    right: 5%;
    top: 5%;
  }
  .wv-n-h-now-img {
    position: absolute;
    left: 5%;
    top: -5%;
  }
  .wv-n-h-now-tmp {
    position: absolute;
    left: 60 * $width;
    top: 0;
    font-size: 28 * $font;
  }
  .wv-n-h-now-alarm {
    display: none;
  }
  .wv-n-h-now-txt {
    position: absolute;
    left: 60 * $width;
    bottom: 10 * $height;
    display: flex;
    align-items: center;
    & > span {
      margin-right: 4 * $width;
    }
    .wv-n-h-label {
      margin-left: 2 * $width;
    }
  }
}
</style>
