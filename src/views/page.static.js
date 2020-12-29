const orderMonitorResult = ['租赁类资产稽核表编制', '支付失败清单整理', '资产转资确认', '竣工决算辅助审核', '财务报表申报', '开关帐管理', '月末关帐检查', '应交增值税结转计提', '现金流量表编制']

export const orderMonitorResultList = orderMonitorResult.map((val) => {
  const a = {}
  a.name = val
  a.iscur = false
  return a
})

export const dynamickeyframes = `@keyframes monitor-right-chart2 {
    0% {
        top: 0px;
        opacity: 1;
    }
    98% {
        top: $$px;
        opacity: 1;
    }
    100% {
        top: $$px;
        opacity: 0;
    }
}
@keyframes business-right-charts3 {
    0% {
      top: 0px;
      opacity: 1;
    }
    90% {
      top: -195px;
      opacity: 1;
    }
    100% {
      top: -200px;
      opacity: 0;
    }
  }
`
export const flowCodeMap = {
  zte_000001: '现金流量表编制流程',
  zte_000002: '月末关账检查流程',
  zte_000003: '开账关账管理流程',
  zte_000004: '应交增值税结转计提流程',
  zte_000005: '纳税申报流程',
  hd_000001: '支付失败清单整理',
  hd_000002: '资产转资确认流程',
  hd_000003: '竣工决算辅助审核',
  hd_000004: '租赁类资产稽核表编制',
  hd_000005: '关联交易报表填报（租赁部分）'
}
