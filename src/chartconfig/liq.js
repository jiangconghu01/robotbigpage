import { $width, $height, $font } from './basesize.js'
const option = {
  //   title: {
  //     text: '2323',
  //     textStyle: {
  //       fontWeight: 'normal',
  //       fontSize: 25,
  //       color: 'rgb(97, 142, 205)'
  //     }
  //   },
  series: [
    {
      type: 'liquidFill',
      radius: '75%',
      center: ['50%', '50%'],
      data: [0.5, 0.5, 0.5], // data个数代表波浪数
      backgroundStyle: {
        color: {
          type: 'linear',
          x: 1,
          y: 0,
          x2: 0.5,
          y2: 1,
          colorStops: [
            {
              offset: 1,
              color: 'rgba(68, 145, 253, 0)'
            },
            {
              offset: 0.8,
              color: 'rgba(68, 145, 253, .05)'
            },
            {
              offset: 0.3,
              color: 'rgba(68, 145, 253, .25)'
            },
            {
              offset: 0,
              color: 'rgba(68, 145, 253, 1)'
            }
          ],
          globalCoord: false
        }
      },
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 1,
              color: 'rgba(58, 71, 212, 0)'
            },
            {
              offset: 0.7,
              color: 'rgba(31, 222, 225, 0.05)'
            },
            {
              offset: 0.3,
              color: 'rgba(31, 222, 225, .3)'
            },
            {
              offset: 0,
              color: 'rgba(31, 222, 225, 1)'
            }
          ],
          globalCoord: false
        }
      },
      label: {
        normal: {
          formatter: (0.5 * 100).toFixed(2) + '%',
          textStyle: {
            fontSize: 12 * $font,
            color: '#fff'
          }
        }
      },
      outline: {
        show: false
      }
    },
    {
      type: 'pie',
      center: ['50%', '50%'],
      radius: ['76%', '78%'],
      hoverAnimation: false,
      startAngle: -135,
      data: [
        {
          name: '',
          value: 300,
          labelLine: {
            show: false
          },
          itemStyle: {
            normal: {
              color: '#5886f0',
              borderWidth: 3 * $width,
              //   shadowBlur: 5,
              borderColor: '#5886f0',
              shadowColor: '#5886f0'
            }
          },
          emphasis: {
            labelLine: {
              show: false
            },
            itemStyle: {
              color: '#5886f0'
            }
          }
        },
        {
          name: '',
          value: 100,
          itemStyle: {
            color: 'rgba(0,0,0,0)'
          }
        }
      ]
    }
  ]
}
export default option
