import echarts from 'echarts'
import { $width, $height, $font } from './basesize.js'
const color = ['#00aeff', '#dfa70f', '#FFC005', '#FF515A', '#8B5CFF', '#00CA69']

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
  grid: {
    x: 10 * $width,
    x2: 10 * $width,
    y: 20 * $height,
    y2: 18 * $height
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      axisLabel: {
        formatter: '{value}',
        fontSize: 10 * $font,
        // interval: 0, //强制显示文字
        // color: hexToRgba('#FFFFFF', 0.7)
        color: '#048FD5'
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255,0.1)'
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          color: 'rgba(255, 255, 255,0.1)'
        }
      },
      data: []
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
          color: 'rgba(255, 255, 255,0.1)'
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
      name: '实时趋势',
      type: 'line',
      smooth: true,
      showSymbol: true,
      symbol: 'circle',
      symbolSize: 1,
      zlevel: 3,
      lineStyle: {
        normal: {
          color: color[0],
          width: 1

          //   shadowBlur: 3,
          //   shadowColor: hexToRgba(color[0], 0.5),
          //   shadowOffsetY: 8
        }
      },
      label: {
        show: true,
        position: 'top',
        textStyle: {
          color: '#048FD5',
          fontSize: 8
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
      data: []
    },
    {
      name: '历史趋势',
      type: 'line',
      smooth: true,
      showSymbol: false,
      symbolSize: 8,
      zlevel: 3,
      lineStyle: {
        normal: {
          color: color[1],
          width: 1
        }
      },
      data: []
    }
  ],
  animationEasing: 'elasticOut',
  animationDelayUpdate: function(idx) {
    return idx * 50
  }
}
// console.log(hexToRgba(color[0], 0.3));
// console.log(hexToRgba(color[1], 0.3));
export default option
