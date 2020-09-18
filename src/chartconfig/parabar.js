const d1 = Array.from({ length: 34 }).map((val, i) => '省份' + i)
const d2 = Array.from({ length: 34 }).map((val, i) => ({ value: Math.random().toFixed(1), label: { position: 'insideRight' } }))
const d3 = d2.map((val) => {
  if (val.value < 0.5) {
    val.label.position = 'right'
  }
  return val
})
import { $width, $height, $font } from './basesize.js'
const option = {
  grid: {
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
    // containLabel: true
  },
  xAxis: {
    type: 'value',
    splitLine: {
      show: false
    },
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    axisLine: {
      lineStyle: {
        color: 'rgba(255,255,255,0.1)'
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#fff'
    },
    data: d1
  },
  series: [
    {
      name: '',
      type: 'bar',
      barWidth: 12 * $font,
      itemStyle: {
        normal: {
          color: '#41BEFF'
        }
      },
      label: {
        show: true,
        // position: 'insideRight',
        distance: 1 * $width,
        fontSize: 10 * $font,
        color: '#fff'
      },
      data: d3
    }
  ]
}
function labelpositon(p) {
  return p.value * 100 + '%'
}
const option_before_succ = JSON.parse(JSON.stringify(option))
option_before_succ.grid.left = 54 * $width
option_before_succ.yAxis.axisLine.lineStyle.color = 'rgba(255,255,255,0.5)'
option_before_succ.series[0].label.formatter = labelpositon

const option_before_manaul = JSON.parse(JSON.stringify(option))
option_before_manaul.series[0].itemStyle.normal.color = '#5DEFDA'
option_before_manaul.series[0].label.formatter = labelpositon

const option_current_succ = JSON.parse(JSON.stringify(option))
option_current_succ.series[0].label.formatter = labelpositon

const option_current_manaul = JSON.parse(JSON.stringify(option))
option_current_manaul.series[0].itemStyle.normal.color = '#5DEFDA'
option_current_manaul.series[0].label.formatter = labelpositon

const option_after_succ = JSON.parse(JSON.stringify(option))
option_after_succ.series[0].label.formatter = labelpositon

const option_after_manaul = JSON.parse(JSON.stringify(option))
option_after_manaul.series[0].itemStyle.normal.color = '#5DEFDA'
option_after_manaul.series[0].label.formatter = labelpositon

export { option_before_succ, option_before_manaul, option_current_succ, option_current_manaul, option_after_succ, option_after_manaul }
