import echarts from 'echarts'
import { $width, $height, $font } from './basesize.js'
import { getDaysArr } from '../util/comFunction'
const axis = []
const datas = []

let color = ['#669AFF', '#EEA42C', '#0090FF', '#36CE9E', '#FFC005', '#FF515A', '#8B5CFF', '#00CA69']

// const axis2 = Array.from({ length: 30 }, (v, k) => {
//   const d = k + 1 > 9 ? k + 1 : '0' + (k + 1)
//   return { dim: k, name: '11/' + d }
// })
// const datas2 = []
// const sd = s.split(/\n/)
// const len = axis2.length
// for (let k = 0; k < 1; k++) {
//   const d = []
//   for (let i = 0; i < len; i++) {
//     i !== len - 1 && d.push(sd[i] ? Number(sd[i]) : 0)
//     i === len - 1 && d.push(0)
//   }
//   datas2[k] = { value: d, lineStyle: { color: color[k] } }
// }
// console.log(datas2)
const option = {
  parallelAxis: [],
  parallel: {
    top: 20 * $height,
    left: 20 * $width,
    right: 20 * $width,
    bottom: 50 * $height,
    axisExpandable: true,
    axisExpandCenter: 2,
    axisExpandCount: 4,
    axisExpandWidth: 40 * $width,
    // axisExpandTriggerOn: "mousemove",
    z: 100,
    parallelAxisDefault: {
      type: 'value',
      nameLocation: 'start',
      // nameRotate: 45,
      // nameLocation: 'end',
      nameTextStyle: {
        fontSize: 13 * $font
      },
      nameGap: 20,
      splitNumber: 3,
      max: 60,
      //   tooltip: {
      //     show: true
      //   },
      axisLine: {
        lineStyle: {
          width: 1,
          color: 'rgba(255,255,255,0.3)'
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      z: 100
    }
  },
  series: {
    type: 'parallel',
    smooth: true,
    lineStyle: {
      normal: {
        color: '#577ceb',
        width: 2 * $width,
        opacity: 0.8
      }
    },
    z: 100,
    blendMode: 'lighter',
    data: []
  }
}
export default option
