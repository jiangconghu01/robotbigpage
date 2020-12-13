import echarts from 'echarts'
import { $width, $height, $font } from './basesize.js'
import { getDaysArr } from '../util/comFunction'
const axis = []
const datas = []

let color = ['#669AFF', '#EEA42C', '#0090FF', '#36CE9E', '#FFC005', '#FF515A', '#8B5CFF', '#00CA69']
for (let i = 0; i < 160; i++) {
  axis.push({ dim: i, name: '08:' + (i > 9 ? i : '0' + i) })
}
for (let index = 0; index < 2; index++) {
  const d = []
  for (let i = 0; i < 161; i++) {
    i !== 160 && d.push(Math.random() * 100)
    i === 160 && d.push('item' + index)
  }
  datas[index] = { value: d, lineStyle: { color: color[index] } }
}

//当前日期往前两个月，以天为单位的数组
// const axis2 = getDaysArr(90).map((val, index) => ({ dim: index, name: val }))
// const datas2 = []
// const len = axis2.length
// for (let k = 0; k < 1; k++) {
//   const d = []
//   for (let i = 0; i < len; i++) {
//     i !== len - 1 && d.push(~~(Math.random() * 460 + 40))
//     i === len - 1 && d.push('item' + k)
//   }
//   datas2[k] = { value: d, lineStyle: { color: color[k] } }
// }
const s = `10.04
28.03
57.15
21.48
26.28
16.62
2.84
0.03
6.82
20.42
11.5
30.33
21.26
0.03
0.03
26.38
7.48`
const axis2 = Array.from({ length: 30 }, (v, k) => {
  const d = k + 1 > 9 ? k + 1 : '0' + (k + 1)
  return { dim: k, name: '11/' + d }
})
const datas2 = []
const sd = s.split(/\n/)
const len = axis2.length
for (let k = 0; k < 1; k++) {
  const d = []
  for (let i = 0; i < len; i++) {
    i !== len - 1 && d.push(sd[i] ? Number(sd[i]) : 0)
    i === len - 1 && d.push(0)
  }
  datas2[k] = { value: d, lineStyle: { color: color[k] } }
}
console.log(datas2)
const option = {
  parallelAxis: axis,
  parallel: {
    top: '10%',
    left: 30 * $width,
    right: 30 * $width,
    bottom: 70 * $height,
    axisExpandable: true,
    axisExpandCenter: 2,
    axisExpandCount: 4,
    axisExpandWidth: 45 * $width,
    // axisExpandTriggerOn: "mousemove",
    z: 100,
    parallelAxisDefault: {
      type: 'value',
      nameLocation: 'start',
      // nameRotate: 45,
      // nameLocation: 'end',
      nameTextStyle: {
        fontSize: 12 * $font
      },
      nameGap: 20,
      splitNumber: 3,
      max: 100,
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
        width: 1 * $width,
        opacity: 0.8
      }
    },
    z: 100,
    blendMode: 'lighter',
    data: datas
  }
}
const option2 = {
  parallelAxis: axis2,
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
    data: datas2
  }
}
export { option, option2 }
