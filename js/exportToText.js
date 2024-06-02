/**
 * 导出文字到txt文件
 * @param filename
 * @param text
 */
function exportToTxt(filename, text) {
  if (filename == undefined) {
    filename = "example";
  }
  if (text == undefined) {
    text = "这是要导出的文本内容";
  }
  let element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename + '.txt');
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
var sysTime = new Date()
var year = sysTime.getFullYear()
var month = sysTime.getMonth()
var day = sysTime.getDay()
var fileName = year + '-' + month + '-' + day
// var sysTime = new Date().toLocaleString()
var exportSeat = document.getElementById('exportSeat') // 绑定导出按钮

exportSeat.addEventListener('click', function () {
  let str = ''
  // str += '\n午托座位表\n'
  let noonSeatNum = noonInf.num + trusteeshipInf.num
  str += noonSeatNum + '\n'
  noonChildren.forEach(function (node) {
    if (node.classList.contains('changedListName')) {
      // str += node.dataset.id
      str += node.innerHTML
      if (node.classList.contains('fixedListName')) {
        str += '*'
      }
      str += '\n'
    }
  })
  // str += '\n晚托座位表\n'
  let eveningSeatNum = eveningInf.num + trusteeshipInf.num
  str += '\n' + eveningSeatNum + '\n'
  eveningChildren.forEach(function (node) {
    if (node.classList.contains('changedListName')) {
      // str += node.dataset.id
      str += node.innerHTML
      if (node.classList.contains('fixedListName')) {
        str += '*'
      }
      str += '\n'
    }
  })

  str += '\n' + sysTime
  exportToTxt(sysTime, str)
  console.log()
})
