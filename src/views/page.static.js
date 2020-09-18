const orderMonitorResult = ['租赁类资产稽核表编制', '支付失败清单整理', '资产转资确认', '竣工决算辅助审核', '财务报表申报', '开关帐管理', '月末关帐检查', '应交增值税结转计提', '现金流量表编制']

export const orderMonitorResultList = orderMonitorResult.map((val) => {
  const a = {}
  a.name = val
  a.iscur = false
  return a
})
