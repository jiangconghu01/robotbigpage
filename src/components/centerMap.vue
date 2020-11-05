<template>
  <div class="center-map-box">
    <div class="top-map">
      <div id="china-map" class="map-container"></div>
      <div class="map-scale-title">{{ label }}</div>
      <div class="scale">
        <ul>
          <li class="text">{{ labelArr[0] }}</li>
          <li class="layout"></li>
          <li class="text">{{ labelArr[1] }}</li>
        </ul>
      </div>
    </div>
    <div class="bottom-list">
      <dv-border-box-8 :reverse="true">
        <div class="company-list" id="company-list-work-num">
          <ul>
            <li v-for="item in companyList" :key="item.name + (Math.random() * 100).toFixed(1)" :style="{ backgroundColor: item.color }">
              <span class="company">{{ item.name }}</span>
              <span v-if="routeName === 'Businessval'" class="value">作业总量：{{ item.value }}笔</span>
              <span v-else class="value">运行时长：{{ item.value }}小时</span>
            </li>
          </ul>
        </div>
      </dv-border-box-8>
    </div>
  </div>
</template>
<script>
import map from '@/chartconfig/map.js'
import chinajson from '@/assets/json/china.json'
export default {
  data() {
    return {
      label: '运行时长热力级别',
      labelArr: ['忙', '闲'],
      routeName: this.$route.name,
      companyList: [
        { name: 'IT公司', value: 99, color: '#E74335' },
        { name: '互联网', value: 99, color: '#E56B09' },
        { name: '铁通公司', value: 99, color: '#F1C54F' },
        { name: '集团本部', value: 99, color: '#03D9D1' },
        { name: '杭研院', value: 99, color: '#1D7FC3' },
        { name: '咪咕文化', value: 99, color: '#1D7FC3' },
        { name: '物联网', value: 99, color: '#1D7FC3' },
        { name: '物联网', value: 99, color: '#E74335' },
        { name: '物联网', value: 99, color: '#F1C54F' },
        { name: '物联网', value: 99, color: '#1D7FC3' },
        { name: '物联网', value: 99, color: '#F1C54F' },
        { name: '物联网', value: 99, color: '#E74335' },
        { name: '物联网', value: 99, color: '#1D7FC3' },
        { name: '物联网', value: 99, color: '#1D7FC3' },
        { name: '物联网', value: 99, color: '#1D7FC3' },
        { name: '物联网', value: 99, color: '#F1C54F' },
        { name: '物联网', value: 99, color: '#E74335' },
        { name: '物联网', value: 99, color: '#1D7FC3' },
        { name: '物联网', value: 99, color: '#F1C54F' },
        { name: '物联网', value: 99, color: '#E74335' },
        { name: '物联网', value: 99, color: '#E74335' },
        { name: '物联网', value: 99, color: '#1D7FC3' }
      ]
    }
  },
  created() {},
  components: {},
  computed: {},
  methods: {
    inintMap() {
      const map_box = this.$echarts.init(document.getElementById('china-map'))
      this.$echarts.registerMap('china', chinajson)
      const mapconfig = JSON.parse(JSON.stringify(map))
      console.log(this.$route)
      if (this.routeName === 'Businessval') {
        mapconfig.title.text = '各单位作业总量（截至目前）'
        this.label = '作业总量热力分布'
        this.labelArr = ['高', '低']
      }
      map_box.setOption(mapconfig)
    }
  },
  mounted() {
    this.inintMap()
  }
}
</script>
<style lang="scss" scoped>
.center-map-box {
  width: 100%;
  height: 100%;
  .top-map {
    margin-top: 60 * $height;
    height: 530 * $height;
    position: relative;
    .map-container {
      width: 100%;
      height: 100%;
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
    margin-top: 8 * $height;
    height: 344 * $height;
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
          width: 120 * $width;
          height: 54 * $height;
          padding: 4 * $height 0;
          box-shadow: -2px 2px 8px 2px rgba(0, 0, 0, 0.26);
          // border: 1 * $width solid rgba(255, 255, 255, 0.438);
          // display: flex;
          // flex-direction: column;
          & > span {
            //   flex: 1;
            display: block;
            height: 22 * $height;
            line-height: 22 * $height;
            font-size: 13 * $font;
            font-weight: 400;
            padding-left: 8 * $width;
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
</style>
