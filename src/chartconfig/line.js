import echarts from 'echarts'
import { $width, $height, $font } from './basesize.js'
let color = ['#00aeff', '#dfa70f', '#FFC005', '#FF515A', '#8B5CFF', '#00CA69']
let echartData = [
  //   {
  //     name: '1月',
  //     value1: 100,
  //     value2: 233
  //   },
  //   {
  //     name: '2月',
  //     value1: 138,
  //     value2: 233
  //   },
  //   {
  //     name: '3月',
  //     value1: 350,
  //     value2: 200
  //   },
  //   {
  //     name: '4月',
  //     value1: 173,
  //     value2: 180
  //   },
  //   {
  //     name: '5月',
  //     value1: 180,
  //     value2: 199
  //   },
  //   {
  //     name: '6月',
  //     value1: 150,
  //     value2: 233
  //   },
  //   {
  //     name: '7月',
  //     value1: 180,
  //     value2: 210
  //   },
  //   {
  //     name: '8月',
  //     value1: 230,
  //     value2: 180
  //   },
  //   {
  //     name: '9月',
  //     value1: 230,
  //     value2: 180
  //   },
  //   {
  //     name: '10月',
  //     value1: 230,
  //     value2: 180
  //   },
  //   {
  //     name: '11月',
  //     value1: 230,
  //     value2: 180
  //   },
  //   {
  //     name: '12月',
  //     value1: 230,
  //     value2: 180
  //   }
]
for (let index = 0; index < 30; index++) {
  echartData.push({
    name: index + 1,
    value1: (Math.random() * 100).toFixed(0),
    value2: (Math.random() * 240).toFixed(0)
  })
}

let xAxisData = echartData.map((v) => v.name)
// ["1", "2", "3", "4", "5", "6", "7", "8"]
let yAxisData1 = echartData.map((v) => {
  v.value = v.value1
  return v
})
// [100, 138, 350, 173, 180, 150, 180, 230]
let yAxisData2 = echartData.map((v) => v.value2)
// [233, 233, 200, 180, 199, 233, 210, 180]
const hexToRgba = (hex, opacity) => {
  let rgbaColor = ''
  let reg = /^#[\da-f]{6}$/i
  if (reg.test(hex)) {
    rgbaColor = `rgba(${parseInt('0x' + hex.slice(1, 3))},${parseInt('0x' + hex.slice(3, 5))},${parseInt('0x' + hex.slice(5, 7))},${opacity})`
  }
  return rgbaColor
}

const option = {
  color: color,
  textStyle: {
    color: '#fff'
  },
  //   legend: {
  //     right: 10,
  //     top: 10,
  //     icon: "circle"
  //   },
  grid: {
    x: 10 * $width,
    x2: 10 * $width,
    y: 20,
    y2: 18 * $height
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      axisLabel: {
        formatter: '{value}',
        fontSize: 10 * $font,
        color: hexToRgba('#FFFFFF', 0.7)
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(233, 233, 233,0.4)'
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          color: 'rgba(233, 233, 233,0.4)'
        }
      },
      data: xAxisData
    }
  ],
  yAxis: [
    {
      type: 'value',
      //   name: "",
      axisLabel: {
        show: false
      },
      //nameTextStyle: {
      //     color: '#666',
      //     fontSize: 12,
      //     lineHeight: 40
      //   },
      splitLine: {
        show: true,
        lineStyle: {
          //   type: "dashed",
          color: 'rgba(233, 233, 233,0.4)'
        }
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    }
  ],
  series: [
    {
      name: '历史趋势',
      type: 'line',
      smooth: true,
      showSymbol: true,
      symbol: 'circle',
      symbolSize: 1,
      zlevel: 3,
      lineStyle: {
        normal: {
          color: color[0]

          //   shadowBlur: 3,
          //   shadowColor: hexToRgba(color[0], 0.5),
          //   shadowOffsetY: 8
        }
      },
      label: {
        show: true,
        position: 'top',
        textStyle: {
          color: '#fff'
        }
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: hexToRgba(color[0], 1)
              },
              {
                offset: 1,
                color: hexToRgba(color[0], 0.1)
              }
            ],
            false
          ),
          shadowColor: hexToRgba(color[0], 0.1),
          shadowBlur: 10
        }
      },
      data: yAxisData1
    },
    {
      name: '实时趋势',
      type: 'line',
      smooth: true,
      showSymbol: false,
      symbolSize: 8,
      zlevel: 3,
      lineStyle: {
        normal: {
          color: color[1]
        }
      },
      data: yAxisData2
    }
  ]
}
// console.log(hexToRgba(color[0], 0.3));
// console.log(hexToRgba(color[1], 0.3));
export default option
