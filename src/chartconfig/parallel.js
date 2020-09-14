import echarts from 'echarts'
const axis = []
const datas = []
let color = ['#0090FF', '#36CE9E', '#FFC005', '#FF515A', '#8B5CFF', '#00CA69']
for (let i = 0; i < 60; i++) {
  axis.push({ dim: i, name: '08:' + (i > 9 ? i : '0' + i) })
}
for (let index = 0; index < 3; index++) {
  const d = []
  for (let i = 0; i < 61; i++) {
    i !== 60 && d.push(Math.random() * 100)
    i === 60 && d.push('item' + index)
  }
  datas[index] = { value: d, lineStyle: { color: color[index] } }
}

const option2 = {
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
  //     show: true,
  //     left: 50,
  //     right: 150,
  //     top: 50,
  //     bottom: 50,
  //     borderColor: 'transparent',
  //     backgroundColor: '#404a59',
  //     z: 99
  //   },
  parallelAxis: axis,
  parallel: {
    top: '10%',
    left: 30,
    right: 20,
    bottom: 60,
    axisExpandable: true,
    axisExpandCenter: 2,
    axisExpandCount: 4,
    axisExpandWidth: 30,
    // axisExpandTriggerOn: "mousemove",
    z: 100,
    parallelAxisDefault: {
      type: 'category',
      nameLocation: 'start',
      // nameRotate: 45,
      // nameLocation: 'end',
      nameTextStyle: {
        fontSize: 12
      },
      nameGap: 20,
      splitNumber: 3,
      tooltip: {
        show: true
      },
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
        width: 1,
        opacity: 0.8
      }
    },
    z: 100,
    blendMode: 'lighter',
    data: datas
  }
}
export default option2
