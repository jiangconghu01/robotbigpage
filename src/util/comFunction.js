function Timer() {
  this.timeID = null
  this.func = null
}
Timer.prototype.repeat = function(func, ms) {
  if (this.func === null) {
    this.func = func
  }
  // 确保一个 Timer 实例只能重复一个 func
  if (this.func !== func) {
    return
  }
  this.timeID = setTimeout(() => {
    func()
    this.repeat(func, ms)
  }, ms)
}
Timer.prototype.clear = function() {
  clearTimeout(this.timeID)
}
const timer = new Timer()

// const a = () => console.log('a')
// const b = () => console.log('b')
// timer.repeat(a, 1000)
// timer.repeat(b, 1000) // 不会定时执行 b

/**
 *
 * @param {*} date
 * @param {*} monthNum
 */
//getMonthsAgoDay（"2018-12-28",20）举例应用
function getMonthsAgoDay(date, monthNum) {
  let dateArr = date.split('-')
  let year = dateArr[0] //获取当前日期的年份
  let month = dateArr[1] //获取当前日期的月份
  let day = dateArr[2] //获取当前日期的日
  let days = new Date(year, month, 0)
  days = days.getDate() //获取当前日期中月的天数
  let year2 = year
  let month2 = parseInt(month) - monthNum
  if (month2 <= 0) {
    year2 = parseInt(year2) - parseInt(month2 / 12 === 0 ? 1 : Math.abs(parseInt(month2 / 12)) + 1)
    month2 = 12 - (Math.abs(month2) % 12)
  }
  let day2 = day
  let days2 = new Date(year2, month2, 0)
  days2 = days2.getDate()
  if (day2 > days2) {
    day2 = days2
  }
  if (month2 < 10) {
    month2 = '0' + month2
  }
  let t2 = year2 + '-' + month2 + '-' + day2
  return t2
}
//获取当前n天所有日期
function getDaysArr(num = 60) {
  const dateArr = []
  let time = new Date().getTime()
  for (let index = 0; index < num; index++) {
    const yesterday = new Date(time)
    const month = yesterday.getMonth()
    const day = yesterday.getDate()
    const yesterdaystr = (month > 8 ? month + 1 : '0' + (month + 1)) + '/' + (day > 9 ? day : '0' + day)
    dateArr.unshift(yesterdaystr)
    time -= 24 * 60 * 60 * 1000
  }
  return dateArr
}
export { timer, getMonthsAgoDay, getDaysArr }
