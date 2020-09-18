let dashedPic = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAAAOBAMAAAB6G1V9AAAAD1BMVEX////Kysrk5OTj4+TJycoJ0iFPAAAAG0lEQVQ4y2MYBaNgGAMTQQVFOiABhlEwCugOAMqzCykGOeENAAAAAElFTkSuQmCC'
let color = ['#FFAC2A', '#4091FF', '#1CDC98', '#009DFF']
let chartData = [
  {
    name: '高中',
    value: 42111,
    unit: '元'
  },
  {
    name: '初中及以下',
    value: 81711,
    unit: '元'
  },
  {
    name: '其他',
    value: 121711,
    unit: '元'
  }
]
let arrName = []
let arrValue = []
let sum = 0
let pieSeries = [],
  lineYAxis = []

// 数据处理
chartData.forEach((v, i) => {
  arrName.push(v.name)
  arrValue.push(v.value)
  sum = sum + v.value
})

// 图表option整理
chartData.forEach((v, i) => {
  pieSeries.push({
    name: '学历',
    type: 'pie',
    clockWise: false,
    hoverAnimation: false,
    radius: [80 - i * 15 + '%', 72 - i * 15 + '%'],
    center: ['35%', '40%'],
    label: {
      show: false
    },
    data: [
      {
        value: v.value,
        name: v.name
      },
      {
        value: sum - v.value,
        name: '',
        itemStyle: {
          color: 'rgba(0,0,0,0)'
        }
      }
    ]
  })
  pieSeries.push({
    name: '',
    type: 'pie',
    silent: true,
    z: 1,
    clockWise: false, //顺时加载
    hoverAnimation: false, //鼠标移入变大
    radius: [80 - i * 15 + '%', 72 - i * 15 + '%'],
    center: ['35%', '40%'],
    label: {
      show: false
    },
    data: [
      {
        value: 7.5,
        itemStyle: {
          color: '#E3F0FF'
        }
      },
      {
        value: 2.5,
        name: '',
        itemStyle: {
          color: 'rgba(0,0,0,0)'
        }
      }
    ]
  })
  v.percent = ((v.value / sum) * 100).toFixed(1) + '%'
  lineYAxis.push({
    value: i,
    textStyle: {
      rich: {
        circle: {
          color: color[i],
          padding: [0, 5]
        }
      }
    }
  })
})

const option = {
  //   backgroundColor: '#fff',
  color: color,
  grid: {
    top: '5%',
    bottom: '5%',
    left: '20%',
    containLabel: false
  },
  yAxis: [
    {
      type: 'category',
      inverse: true,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        // formatter: function(params) {
        //   let item = chartData[params]
        //   return '{line|}{circle|●}{name|' + item.name + '}{bd||}{percent|' + item.percent + '}{value|' + item.value + '}{unit|元}'
        // },
        // interval: 0,
        // inside: true,
        // textStyle: {
        //   color: '#333',
        //   fontSize: 14,
        //   rich: {
        //     line: {
        //       width: 70,
        //       height: 10,
        //       backgroundColor: { image: dashedPic }
        //     },
        //     name: {
        //       color: '#666',
        //       fontSize: 14
        //     },
        //     bd: {
        //       color: '#ccc',
        //       padding: [0, 5],
        //       fontSize: 14
        //     },
        //     percent: {
        //       color: '#333',
        //       fontSize: 14
        //     },
        //     value: {
        //       color: '#333',
        //       fontSize: 16,
        //       fontWeight: 500,
        //       padding: [0, 0, 0, 20]
        //     },
        //     unit: {
        //       fontSize: 14
        //     }
        //   }
        // },
        show: false
      },
      data: lineYAxis
    }
  ],
  xAxis: [
    {
      show: false
    }
  ],
  series: pieSeries
}
export default option
