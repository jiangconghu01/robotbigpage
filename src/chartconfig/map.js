import { $width, $height, $font } from './basesize.js'
let data = [
  {
    name: '安徽',
    value: [117.2461, 32.0361]
  },
  {
    name: '江苏',
    value: [120.0586, 32.915]
  },

  {
    name: '重庆',
    value: [107.7539, 30.1904]
  }
]
let LableData = [
  {
    name: '安徽',
    coords: [
      [117.2461, 32.0361],
      [109.8632, 47.9899],
      [105.8632, 47.9899]
    ], // 线条位置[开始位置，结束位置]
    value: [10.21, 1.2]
  },
  {
    name: '江苏',
    coords: [
      [120.0586, 32.915],
      [126.7382, 32.915],
      [126.7382, 22.4764]
    ], // 线条位置[开始位置，结束位置]
    value: [10.21, 1.2]
  },
  {
    name: '重庆',
    coords: [
      [107.7539, 30.1904],
      [100.371, 19.4764],
      [95.371, 19.4764]
    ], // 线条位置[开始位置，结束位置]
    value: [10.21, 1.2]
  }
]

const map = {
  title: {
    text: '机器人终端运行时长分布',
    textStyle: {
      color: '#fff',
      fontSize: 26 * $font,
      fontWeight: 'bold'
    },
    left: 0,
    top: 0
  },
  //   tooltip: {
  //     trigger: "item",
  //     formatter: function(params, ticket, callback) {
  //       return toolTiosOfMap;
  //     }
  //   },
  visualMap: {
    type: 'continuous',
    // orient: 'vertical',
    orient: 'horizontal',
    itemWidth: 20 * $width,
    itemHeight: 225 * $height,
    // text: ['低', '高'],
    text: ['', ''],
    showLabel: true,
    seriesIndex: [0],
    min: 0,
    max: 200,
    inRange: {
      color: ['#E74335', '#E56B09', '#F1C54F', '#03D9D1', '#1D7FC3'].reverse()
    },
    textStyle: {
      color: '#fff'
    },
    x: 0,
    y2: 20 * $height
  },
  geo: {
    id: 1,
    map: 'china',
    zoom: 1,
    zlevel: 0,
    layoutCenter: ['50%', '50%'], //地图位置
    layoutSize: '100%',
    label: {
      show: false,
      emphasis: {
        show: false
      }
    },
    regions: [
      {
        name: '南海诸岛',
        value: 0,
        itemStyle: {
          normal: {
            opacity: 0,
            label: {
              show: false
            }
          }
        }
      }
    ],
    // roam: true,
    itemStyle: {
      normal: {
        borderColor: 'rgba(147, 235, 248, 1)',
        borderWidth: 1 * $width,
        areaColor: '#1D7FC4',
        // areaColor: {
        //   type: 'radial',
        //   x: 0.5,
        //   y: 0.5,
        //   r: 0.8,
        //   colorStops: [
        //     {
        //       offset: 0,
        //       color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
        //     },
        //     {
        //       offset: 1,
        //       color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
        //     }
        //   ],
        //   globalCoord: false // 缺省为 false
        // },
        shadowColor: '#000',
        shadowOffsetX: -10 * $width,
        shadowOffsetY: 10 * $height,
        shadowBlur: 8 * $width
      }
    }
  },
  //   roam: true,
  series: [
    {
      type: 'map',
      //   geoIndex: 0,
      map: 'china',
      zoom: 1,
      layoutCenter: ['50%', '50%'], //地图位置
      layoutSize: '100%',
      data: [
        { name: '安徽', value: 175 },
        { name: '江苏', value: 90 },
        { name: '重庆', value: 200 }
      ],
      itemStyle: {
        normal: {
          label: {
            show: false,
            color: 'rgba(255, 255, 255, 0.8)'
          },
          borderColor: '#2B98DC',
          borderWidth: 2 * $width,
          areaColor: '#1D7FC4'
        },
        emphasis: {
          areaColor: '#2B98DC',
          label: {
            show: false,
            color: 'rgba(255, 255, 255, 0.8)'
          }
        }
      }
    },
    // {
    //   type: 'lines',
    //   zlevel: 3,
    //   polyline: true,
    //   symbol: 'circle',
    //   symbolSize: [5, 5],
    //   color: '#ff8003',
    //   opacity: 1,
    //   lineStyle: {
    //     type: 'solid',
    //     color: '#fff',
    //     width: 0.5,
    //     opacity: 1
    //   },
    //   data: LableData
    // },
    {
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 4,
      symbolSize: 8 * $width,
      label: {
        normal: {
          show: false,
          position: 'right',
          formatter: '{b}',
          color: 'white'
        }
      },
      itemStyle: {
        normal: {
          color: '#fff'
        }
      },
      rippleEffect: {
        scale: 3,
        brushType: 'stroke'
      },
      data: data
    }
  ]
}

export default map
