import echarts from 'echarts'
import { $width, $height, $font } from './basesize.js'
const axis = []
const axis2 = []
const datas = []
const datas2 = []
let color = ['#EEA42C', '#669AFF', '#0090FF', '#36CE9E', '#FFC005', '#FF515A', '#8B5CFF', '#00CA69']
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

for (let i = 0; i < 50; i++) {
  axis2.push({ dim: i, name: '08:' + (i > 9 ? i : '0' + i) })
}
for (let index = 0; index < 2; index++) {
  const d = []
  for (let i = 0; i < 61; i++) {
    i !== 50 && d.push(Math.random() * 100)
    i === 50 && d.push('item' + index)
  }
  datas2[index] = { value: d, lineStyle: { color: color[index] } }
}

const option = {
  //   backgroundColor: new echarts.graphic.RadialGradient(0.5, 0.5, 0.4, [
  //     {
  //       offset: 0,
  //       color: '#4b5769'
  //     },
  //     {
  //       offset: 1,
  //       color: '#404a59'
  //     }
  //   ]),
  //   grid: {
  //     // show: true,
  //     left: 0,
  //     right: 0,
  //     top: 0,
  //     bottom: 0
  //   },
  parallelAxis: axis,
  parallel: {
    top: '10%',
    left: 30 * $width,
    right: 30 * $width,
    bottom: 60 * $height,
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
    top: 0,
    left: 20 * $width,
    right: 0 * $width,
    bottom: 35 * $height,
    axisExpandable: true,
    axisExpandCenter: 2,
    axisExpandCount: 4,
    axisExpandWidth: 35 * $width,
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
    data: datas2
  }
}
export { option, option2 }
