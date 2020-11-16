const runTer = `财务公司
广东
浙江
四川
北京
上海
河南
江苏
四川
北京
上海
河南
江苏
天津
河北
山西
内蒙古
辽宁
吉林
黑龙江
安徽
福建
江西
山东
湖北
湖南
广西
海南
重庆
贵州
云南
西藏
甘肃
青海
宁夏
新疆
陕西
信息技术公司
研究院
信息港中心
信安中心
采购共享中心
移动学院
设计院
财务公司
物联网公司
苏州研发中心
杭州研发中心
在线服务公司
咪咕公司
互联网公司
投资公司
成都产业研究院
上海产业研究院
电商公司
集成公司
销售分公司
总部
政企事业部
吉林
黑龙江
安徽
福建
江西
山东
湖北
湖南
广西
海南
重庆
贵州
云南
西藏
山东
湖北
湖南`
const runFlow = `支付失败清单整理
资产转资确认流程
竣工决算辅助审核流程
租赁类资产稽核表编制流程
现金流量表编制流程
月末关账检查流程
开账关账管理流程
应交增值税结转计提流程
纳税申报流程
关联交易表填报流程
支付失败清单整理
资产转资确认流程
竣工决算辅助审核流程
租赁类资产稽核表编制流程
现金流量表编制流程
月末关账检查流程
开账关账管理流程
应交增值税结转计提流程
纳税申报流程
关联交易表填报流程
支付失败清单整理
资产转资确认流程
竣工决算辅助审核流程
租赁类资产稽核表编制流程
现金流量表编制流程
月末关账检查流程
开账关账管理流程
应交增值税结转计提流程
纳税申报流程
关联交易表填报流程
支付失败清单整理
资产转资确认流程
竣工决算辅助审核流程
租赁类资产稽核表编制流程
现金流量表编制流程
月末关账检查流程
开账关账管理流程
应交增值税结转计提流程
纳税申报流程
关联交易表填报流程
支付失败清单整理
资产转资确认流程
竣工决算辅助审核流程
租赁类资产稽核表编制流程
现金流量表编制流程
月末关账检查流程
开账关账管理流程
应交增值税结转计提流程
纳税申报流程
关联交易表填报流程
支付失败清单整理
资产转资确认流程
竣工决算辅助审核流程
租赁类资产稽核表编制流程
现金流量表编制流程
月末关账检查流程
开账关账管理流程
应交增值税结转计提流程
纳税申报流程
关联交易表填报流程
支付失败清单整理
资产转资确认流程
竣工决算辅助审核流程
租赁类资产稽核表编制流程
现金流量表编制流程
月末关账检查流程
开账关账管理流程
应交增值税结转计提流程
纳税申报流程
关联交易表填报流程
支付失败清单整理
资产转资确认流程
竣工决算辅助审核流程
支付失败清单整理
资产转资确认流程
支付失败清单整理`

const companylist = `信息技术公司
研究院
信息港中心
信安中心
采购共享中心
移动学院
设计院
财务公司
物联网公司
苏州研发中心
杭州研发中心
在线服务公司
咪咕公司
互联网公司
投资公司
成都产业研究院
上海产业研究院
电商公司
集成公司
销售分公司
总部
政企事业部`
const flowList = `支付失败清单整理
资产转资确认流程
竣工决算辅助审核流程
租赁类资产稽核表编制流程
现金流量表编制流程
月末关账检查流程
开账关账管理流程
应交增值税结转计提流程
纳税申报流程
关联交易表填报流程`
//监控页面终端实时运行状态表格
const data1 = runTer.split(/\n/)
const data2 = runFlow.split(/\n/)
const statusArr = ['free', 'run', 'exc']
const monitorRunTerData = data1.map((val, index) => {
  const i = index + 1
  let status = statusArr[~~(Math.random() * 2)]
  ;(val === '贵州' || val === '宁夏' || val === '咪咕公司') && (status = 'exc')
  val === '西藏' || (val === '黑龙江' && (status = 'free'))
  return { termicode: 'RPA-' + i, ip: '192.168.0.' + i, flow: data2[index], depart: val, status: status }
})
//监控页面地图下label
const colors = ['#E74335', '#E56B09', '#F1C54F', '#03D9D1', '#1D7FC3']
const data3 = companylist.split(/\n/)
const companyList = data3.map((val, index) => {
  return { name: val, value: ~~(Math.random() * 999), unit: '小时', color: colors[~~(Math.random() * 5)], label: '终端运行时长:', isrun: ~~(Math.random() * 2), delay: Math.random() * 1.3 }
})
const companyListBus = data3.map((val, index) => {
  return { name: val, value: ~~(Math.random() * 99), unit: '笔', color: colors[~~(Math.random() * 5)], label: '作业总量：', isrun: ~~(Math.random() * 2), delay: Math.random() * 1.3 }
})
//业务价值最后的列表
const flows = flowList.split(/\n/)
const data4 = runTer.split(/\n/)
const statuslist = ['lineup', 'exe', 'exc']

const busLastList = data4.map((val, index) => {
  let status2 = statuslist[~~(Math.random() * 2)]
  ;(val === '贵州' || val === '宁夏' || val === '咪咕公司') && (status2 = 'exc')
  return { index: index, unitname: val, workflow: flows[~~(Math.random() * 10)], status: status2 }
})
export { monitorRunTerData, companyList, companyListBus, busLastList }
