import echarts from 'echarts'
const axis = []
const datas = []
const datas2 = []
let color = ['#EEA42C', '#669AFF', '#0090FF', '#36CE9E', '#FFC005', '#FF515A', '#8B5CFF', '#00CA69']
for (let i = 0; i < 190; i++) {
  //   axis.push({ dim: i, name: '08:' + (i > 9 ? i : '0' + i) })
  axis.push({ dim: i, name: '上海' })
}
for (let index = 0; index < 1; index++) {
  const d = []
  for (let i = 0; i < 191; i++) {
    i !== 190 && d.push(Math.random() * 100)
    i === 190 && d.push('item' + index)
  }
  datas[index] = { value: d, lineStyle: { color: color[index] } }
}
for (let index = 0; index < 1; index++) {
  const d = []
  for (let i = 0; i < 191; i++) {
    i !== 190 && d.push(Math.random() * 100)
    i === 190 && d.push('item' + index)
  }
  datas2[index] = { value: d, lineStyle: { color: color[index + 1] } }
}
const option3 = {
  parallelAxis: axis,
  parallel: [
    {
      top: 15,
      left: 30,
      right: 30,
      bottom: 60,
      axisExpandable: true,
      axisExpandCenter: 2,
      axisExpandCount: 4,
      axisExpandWidth: 45,
      // axisExpandTriggerOn: "mousemove",
      z: 100,
      parallelAxisDefault: {
        type: 'value',
        nameLocation: 'start',
        // nameRotate: 45,
        // nameLocation: 'end',
        nameTextStyle: {
          fontSize: 12
        },
        //   nameGap: 20,
        splitNumber: 3,
        max: 100,
        tooltip: {
          show: false
        },
        axisLabel: {
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
    {
      top: 15,
      left: 30,
      right: 30,
      bottom: 60,
      axisExpandable: true,
      axisExpandCenter: 2,
      axisExpandCount: 4,
      axisExpandWidth: 45,
      // axisExpandTriggerOn: "mousemove",
      z: 100,
      parallelAxisDefault: {
        type: 'value',
        nameLocation: 'start',
        // nameRotate: 45,
        // nameLocation: 'end',
        nameTextStyle: {
          fontSize: 12
        },
        //   nameGap: 20,
        splitNumber: 3,
        max: 10,
        tooltip: {
          show: false
        },
        axisLabel: {
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
    }
  ],
  series: [
    {
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
    },
    {
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
      data: datas2
    }
  ]
}
export default option3
