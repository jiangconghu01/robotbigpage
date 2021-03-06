import { $width, $height, $font } from './basesize.js'
let data = [
  {
    name: '安徽',
    value: [117.2461, 32.0361]
  },
  {
    name: '江苏',
    value: [120.0586, 32.915]
  },

  {
    name: '重庆',
    value: [107.7539, 30.1904]
  }
]
let LableData = [
  {
    name: '安徽',
    coords: [
      [117.2461, 32.0361],
      [109.8632, 47.9899],
      [105.8632, 47.9899]
    ], // 线条位置[开始位置，结束位置]
    value: [10.21, 1.2]
  },
  {
    name: '江苏',
    coords: [
      [120.0586, 32.915],
      [126.7382, 32.915],
      [126.7382, 22.4764]
    ], // 线条位置[开始位置，结束位置]
    value: [10.21, 1.2]
  },
  {
    name: '重庆',
    coords: [
      [107.7539, 30.1904],
      [100.371, 19.4764],
      [95.371, 19.4764]
    ], // 线条位置[开始位置，结束位置]
    value: [10.21, 1.2]
  }
]
const geoCoordMap = {
  台湾: [121.5135, 25.0308],
  黑龙江: [127.9688, 45.368],
  内蒙古: [110.3467, 41.4899],
  吉林: [125.8154, 44.2584],
  北京市: [116.4551, 40.2539],
  辽宁: [123.1238, 42.1216],
  河北: [114.4995, 38.1006],
  天津: [117.4219, 39.4189],
  山西: [112.3352, 37.9413],
  陕西: [109.1162, 34.2004],
  甘肃: [103.5901, 36.3043],
  宁夏: [106.3586, 38.1775],
  青海: [101.4038, 36.8207],
  新疆: [87.9236, 43.5883],
  西藏: [91.11, 29.97],
  四川: [103.9526, 30.7617],
  重庆: [108.384366, 30.439702],
  山东: [117.1582, 36.8701],
  河南: [113.4668, 34.6234],
  江苏: [118.8062, 31.9208],
  安徽: [117.29, 32.0581],
  湖北: [114.3896, 30.6628],
  浙江: [119.5313, 29.8773],
  福建: [119.4543, 25.9222],
  江西: [116.0046, 28.6633],
  湖南: [113.0823, 28.2568],
  贵州: [106.6992, 26.7682],
  云南: [102.9199, 25.4663],
  广东: [113.12244, 23.009505],
  广西: [108.479, 23.1152],
  海南: [110.3893, 19.8516],
  上海: [121.4648, 31.2891]
}
//对应的直角坐标系位置，zoom改变后重新计算，或者动态计算
const xpMapGeo = {
  台湾: [574.3329726104735, 434.17409082603456],
  黑龙江: [647.8847411865236, 125.21099140167235],
  内蒙古: [447.0983143707276, 184.12715468263627],
  吉林: [623.3488747741699, 142.06805408096307],
  北京市: [516.6975000274658, 202.9044883809089],
  辽宁: [592.6807508605957, 174.53035719299316],
  河北: [494.41536927795414, 235.61745978260035],
  天津: [527.7132312652586, 215.58982303953167],
  山西: [469.7553081298829, 238.03754817914967],
  陕西: [433.07798204956066, 294.86936665153496],
  甘肃: [370.11352984313976, 262.9068809170724],
  宁夏: [401.657853314209, 234.44919363260271],
  青海: [345.2028004211427, 255.06172305154792],
  新疆: [191.60923377685538, 152.2482250447274],
  西藏: [227.9151150512696, 359.1376777172089],
  四川: [374.2438593566894, 347.11015741872785],
  重庆: [424.73945634136953, 352.00195668747904],
  山东: [524.7086301818847, 254.31123738431927],
  河南: [482.64877261962897, 288.4431432256699],
  江苏: [543.4859627014162, 329.50108987045286],
  安徽: [526.2103610229492, 327.4152258601188],
  湖北: [493.1631673095703, 348.61264795494077],
  浙江: [551.7477611297609, 360.54597774457926],
  福建: [550.8704221710204, 420.63192637729645],
  江西: [511.5644974182128, 378.98908705663683],
  湖南: [478.26777483215346, 385.1646421928406],
  贵州: [405.5386539550782, 407.7794795255661],
  云南: [362.47726269836426, 427.5579671807289],
  广东: [478.7251304919432, 464.88163995034694],
  广西: [425.8177173156739, 463.2759196548462],
  海南: [447.5836993011476, 512.856588148117],
  上海: [573.7780842041016, 339.09788736009597]
}
const orgCodeList = [
  { name: '安徽', orgCode: 'AH' },
  { name: '北京市', orgCode: 'BJ' },
  { name: '重庆', orgCode: 'CQ' },
  { name: '福建', orgCode: 'FJ' },
  { name: '广东', orgCode: 'GD' },
  { name: '甘肃', orgCode: 'GS' },
  { name: '广西', orgCode: 'GX' },
  { name: '贵州', orgCode: 'GZ' },
  { name: '河南', orgCode: 'HA' },
  { name: '湖北', orgCode: 'HB' },
  { name: '河北', orgCode: 'HE' },
  { name: '海南', orgCode: 'HI' },
  { name: '黑龙江', orgCode: 'HL' },
  { name: '湖南', orgCode: 'HN' },
  { name: '吉林', orgCode: 'JL' },
  { name: '江苏', orgCode: 'JS' },
  { name: '江西', orgCode: 'JX' },
  { name: '辽宁', orgCode: 'LN' },
  { name: '内蒙古', orgCode: 'NM' },
  { name: '宁夏', orgCode: 'NX' },
  { name: '青海', orgCode: 'QH' },
  { name: '四川', orgCode: 'SC' },
  { name: '山东', orgCode: 'SD' },
  { name: '上海', orgCode: 'SH' },
  { name: '陕西', orgCode: 'SN' },
  { name: '山西', orgCode: 'SX' },
  { name: '天津', orgCode: 'TJ' },
  { name: '新疆', orgCode: 'XJ' },
  { name: '西藏', orgCode: 'XZ' },
  { name: '云南', orgCode: 'YN' },
  { name: '浙江', orgCode: 'ZJ' }
]
const orgCodeMap = {
  AH: '安徽',
  BJ: '北京市',
  CQ: '重庆',
  FJ: '福建',
  GD: '广东',
  GS: '甘肃',
  GX: '广西',
  GZ: '贵州',
  HA: '河南',
  HB: '湖北',
  HE: '河北',
  HI: '海南',
  HL: '黑龙江',
  HN: '湖南',
  JL: '吉林',
  JS: '江苏',
  JX: '江西',
  LN: '辽宁',
  NM: '内蒙古',
  NX: '宁夏',
  QH: '青海',
  SC: '四川',
  SD: '山东',
  SH: '上海',
  SN: '陕西',
  SX: '山西',
  TJ: '天津',
  XJ: '新疆',
  XZ: '西藏',
  YN: '云南',
  ZJ: '浙江'
}
const provinceNameList = [
  '广东',
  '浙江',
  '四川',
  '北京市',
  '上海',
  '河南',
  '江苏',
  '天津',
  '河北',
  '山西',
  '内蒙古',
  '辽宁',
  '吉林',
  '黑龙江',
  '安徽',
  '福建',
  '江西',
  '山东',
  '湖北',
  '湖南',
  '广西',
  '海南',
  '重庆',
  '贵州',
  '云南',
  '西藏',
  '甘肃',
  '青海',
  '宁夏',
  '新疆',
  '陕西'
]
const map = {
  title: {
    text: '各单位机器人运行时长（截至目前）', //2业务价值页面.各单位作业总量（截至目前） 热区域：高低 --作业热力分布
    textStyle: {
      color: '#fff',
      fontSize: 26 * $font,
      fontWeight: 'bold'
    },
    left: 0,
    top: 0
  },
  visualMap: {
    type: 'continuous',
    // orient: 'vertical',
    orient: 'horizontal',
    itemWidth: 20 * $width,
    itemHeight: 225 * $height,
    // text: ['低', '高'],
    text: ['', ''],
    showLabel: true,
    seriesIndex: [0],
    min: 0,
    max: 200,
    inRange: {
      color: ['#1D7FC3', '#03D9D1', '#F1C54F', '#E56B09', '#E74335']
    },
    textStyle: {
      color: '#fff'
    },
    x: 0,
    y2: 10 * $height
  },
  geo: {
    id: 1,
    map: 'china',
    zoom: 1.3,
    zlevel: 0,
    layoutCenter: ['50%', '50%'], //地图位置
    layoutSize: '100%',
    label: {
      show: false,
      emphasis: {
        show: false
      }
    },
    regions: [
      {
        name: '南海诸岛',
        value: 0,
        itemStyle: {
          normal: {
            opacity: 0,
            label: {
              show: false
            }
          }
        }
      }
    ],
    // roam: true,
    itemStyle: {
      normal: {
        borderColor: 'rgba(147, 235, 248, 1)',
        borderWidth: 1 * $width,
        areaColor: '#1D7FC4',
        // areaColor: {
        //   type: 'radial',
        //   x: 0.5,
        //   y: 0.5,
        //   r: 0.8,
        //   colorStops: [
        //     {
        //       offset: 0,
        //       color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
        //     },
        //     {
        //       offset: 1,
        //       color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
        //     }
        //   ],
        //   globalCoord: false // 缺省为 false
        // },
        shadowColor: '#000',
        shadowOffsetX: -10 * $width,
        shadowOffsetY: 10 * $height,
        shadowBlur: 8 * $width
      }
    }
  },
  //   roam: true,
  series: [
    {
      type: 'map',
      //   geoIndex: 0,
      map: 'china',
      zoom: 1.3,
      layoutCenter: ['50%', '50%'], //地图位置
      layoutSize: '100%',
      data: [
        { name: '安徽', value: 150 },
        { name: '江苏', value: 200 },
        { name: '重庆', value: 100 },
        { name: '甘肃', value: 90 },
        { name: '贵州', value: 60 },
        { name: '广东', value: 62 },
        { name: '西藏', value: 60 },
        { name: '吉林', value: 60 }
        //["海南", "重庆", "安徽", "贵州", "西藏", "河南", "江苏", "广东", "陕西"]
      ],
      //   data: mapseriseData,
      itemStyle: {
        normal: {
          label: {
            show: false,
            color: 'rgba(255, 255, 255, 0.8)'
          },
          borderColor: '#2B98DC',
          borderWidth: 2 * $width,
          areaColor: '#1D7FC4'
        },
        emphasis: {
          areaColor: '#2B98DC',
          label: {
            show: false,
            color: 'rgba(255, 255, 255, 0.8)'
          }
        }
      }
    },
    {
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 4,
      symbolSize: 7 * $width,
      label: {
        normal: {
          show: false,
          position: 'right',
          formatter: '{b}',
          color: 'white'
        }
      },
      itemStyle: {
        normal: {
          color: '#fff'
        }
      },
      rippleEffect: {
        scale: 3,
        brushType: 'stroke'
      },
      data: []
      //   data: Object.keys(geoCoordMap).map((val) => geoCoordMap[val])
    }
  ]
}

export { map, geoCoordMap, xpMapGeo, provinceNameList, orgCodeMap, orgCodeList }
