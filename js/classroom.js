var trusteeshipInf = { //全托
  type: 'all', //类型：晚托
  num: 0, // 人数
  seat: [ // 列表
    '',

  ],
  fixed: [ //固定座位
    0,
  ]
}
var noonInf = { // 午托
  type: 'noon',
  listNum: 0, // 名单人数
  num: 0, // 单托人数
  seat: [ // 列表
    '',

  ],
  fixed: [ //固定座位
    0,
  ]
}
var eveningInf = { // 晚托
  type: 'evening',
  listNum: 0, // 名单人数
  num: 0, // 单托人数
  seat: [ // 列表
    '',

  ],
  fixed: [ //固定座位
    0,
  ]
}

/* 

  从展示的列表里获取午托名单

*/
//获取所有的子节点
var noonList = document.querySelector('[data-name="noonList"')
//获取所有的span
var noonName = noonList.querySelectorAll('span')
//子节点的数量就是午托人数
noonInf.listNum = noonName.length
console.log('noonInf')
console.log(noonInf)

/* 

  从展示的列表里获取晚托名单

*/
//获取所有的子节点
var eveningList = document.querySelector('[data-name="eveningList"')
//获取所有的span
var eveningName = eveningList.querySelectorAll('span')
//子节点的数量就是晚托人数
eveningInf.listNum = eveningName.length
console.log('eveningInf')
console.log(eveningInf)

/* 

  定义一个空数组存放午托名单用于随机处理

*/
var noon = [""]
for (let i = 0; i < noonName.length; i++) {
  noon[i] = noonName[i].innerHTML
}
console.log('noon')
console.log(noon)

/* 

  定义一个空数组存放晚托名单用于随机处理

*/
var evening = [""]
for (let j = 0; j < eveningName.length; j++) {
  evening[j] = eveningName[j].innerHTML
}
console.log('evening')
console.log(evening)

/* 

对比两个名单，两个名单都有的，是全托；否则判断是午托还是晚托

*/
for (i = 0; i < noon.length; i++) {
  for (j = 0; j < evening.length; j++) {
    if (noon[i])//排除空行
      if (evening[j])//排除空行
        if (noon[i] === evening[j]) { //两个名单都有的，是全托
          let trusteeshipNum = trusteeshipInf.num++
          trusteeshipInf.seat[trusteeshipNum + 1] = noon[i]
          trusteeshipInf.fixed[trusteeshipNum + 1] = 0
          // console.log(trusteeshipInf)
          break //已经匹配，跳过该轮次
        }
  }
  //没有匹配到，加入午托
  if (noon[i])//排除空行
    if (noon[i] != trusteeshipInf.seat[trusteeshipInf.num]) {
      let noonNum = noonInf.num++
      noonInf.seat[noonNum + 1] = noon[i]
      noonInf.fixed[noonNum + 1] = 0
    }
}
for (i = 0; i < evening.length; i++) {
  for (j = 0; j < noon.length; j++) {
    if (evening[i] === noon[j]) { //两个名单都有的，是全托
      break //已经匹配，跳过该轮次
    }
  }
  //没有匹配到，加入晚托
  if (!trusteeshipInf.seat.includes(evening[i])) {
    let eveningNum = eveningInf.num++
    eveningInf.seat[eveningNum + 1] = evening[i]
    eveningInf.fixed[eveningNum + 1] = 0
  }
}

/* 

  计算总人数

*/
let trusteeshipList = new Set
for (i = 0; i <= evening.length; i++) {
  if (evening[i]) //排除空行
    trusteeshipList.add(evening[i])
}
for (i = 0; i <= noon.length; i++) {
  if (noon[i]) //排除空行
    trusteeshipList.add(noon[i])
}

console.log('trusteeshipList.size')
console.log(trusteeshipList.size)
console.log('trusteeshipInf')
console.log(trusteeshipInf)
console.log('noonInf')
console.log(noonInf)
console.log('eveningInf')
console.log(eveningInf)

/* 

  随机打乱数组

*/
function randomArray(arr) {
  console.log('arr')
  console.log(arr)
  let ans = {}
  ans[1] = arr.splice(0, 1)[0] //优先处理数组中第一项的空字符串
  let len = arr.length
  for (let i = 1, j = len; i <= len; i++, j--) {
    let num = Math.random() * j
    num = Math.ceil(num)
    // console.log('第' + i + '次随机，结果为：' + num)
    // console.log(arr)
    ans[i] = arr.splice(num - 1, 1)[0]
    // console.log(arr)
    // console.log(ans[i])
  }
  console.log('randomArray')
  console.log(ans)
  return ans
}

// function randomArray(arrAll, arrOnly) {

//   let ansAll = {}
//   let ansOnly = {}
//   ansAll[1] = arrAll.splice(0, 1)[0] //优先处理数组的空字符串
//   ansOnly[1] = arrOnly.splice(0, 1)[0] //优先处理数组的空字符串

//   let lenAll = arrAll.length
//   for (let i = 1, j = lenAll; i <= lenAll; i++, j--) {
//     let num = Math.random() * j
//     num = Math.ceil(num)
//     ansAll[i] = arrAll.splice(num - 1, 1)[0]
//   }

//   let lenOnly = arrOnly.length
//   for (let i = 1, j = lenOnly; i <= lenOnly; i++, j--) {
//     let num = Math.random() * j
//     num = Math.ceil(num)
//     ansOnly[i] = arrOnly.splice(num - 1, 1)[0]
//   }
//   return ansAll + ansOnly
// }


var changedNoonList = document.querySelector('[data-name="changedNoon"')
var noonChildren = changedNoonList.querySelectorAll('span')
var noonListNum = noonChildren.length;
// 循环遍历每个 span 元素
for (var i = 0, j = 0; i < noonListNum; i++) {
  // 检查 span 元素是否没有添加 style 属性
  if (!noonChildren[i].className) {
    // 如果没有添加 style 属性，则添加名为 changedListName 的 CSS 样式
    noonChildren[i].className = 'changedListName';
    noonChildren[i].dataset.id = ++j //标记座位数量
    if (noonChildren[i].innerHTML == '') { // 置空空位置
      noonChildren[i].classList.add('hiddenSpan');
    }
    // noonChildren[i].setAttribute('class', 'changedListName');
  }
}

//有错误
// var noonListNum = NoonChildren.length
// console.log(NoonChildren)
// console.log(NoonChildren[8])
// for (i = 0; i <= noonListNum; i++) {
//   NoonChildren[i].style.add('class = "changedListName"')
// }

var changedEveningList = document.querySelector('[data-name="changedEvening"')
var eveningChildren = changedEveningList.querySelectorAll('span')
var eveningListNum = eveningChildren.length
// 循环遍历每个 span 元素
for (var i = 0, j = 0; i < eveningListNum; i++) {
  // 检查 span 元素是否没有添加 style 属性
  if (!eveningChildren[i].className) {
    // 如果没有添加 style 属性，则添加名为 changedListName 的 CSS 样式
    eveningChildren[i].className = 'changedListName'
    eveningChildren[i].dataset.id = ++j //标记座位数量
    if (eveningChildren[i].innerHTML == '') { // 置空空位置
      eveningChildren[i].classList.add('hiddenSpan');
    }
    // eveningChildren[i].setAttribute('class', 'changedListName');
  }
}
// console.log(eveningChildren)

/* 

  页面加载后，将选座隐藏

*/
window.onload = function () {
  changedNoonList.classList.add("hiddenDiv")
  changedEveningList.classList.add("hiddenDiv")
}

/* 

  点击换座位按钮后，隐藏名单，展示选座

*/
//换座位按钮
var changeSeatBtn = document.getElementsByName('changeSeat')
//选座
var trusteeshipLists = document.getElementsByName('trusteeshipList')
console.log('trusteeshipList')
console.log(trusteeshipList)
//三个选座操作
const operation = document.querySelector('.csw_seatOperation')
changeSeatBtn[0].addEventListener('click', function () {
  // 页面隐藏与显示
  //隐藏午托名单
  changedNoonList.classList.remove("hiddenDiv")
  //隐藏午托名单
  changedEveningList.classList.remove("hiddenDiv")
  //显示午托选座
  trusteeshipLists[0].classList.add("hiddenDiv")
  //显示晚托选座
  trusteeshipLists[1].classList.add("hiddenDiv")

  confirmSeat.classList.remove("hiddenSpan")  // 显示确认按钮
  changeSeatBtn[0].classList.add("hiddenSpan") // 换座位按钮

  // if (!operation.style.opacity) {
  //   operation.style.opacity = 1
  // } else {
  //   operation.style.opacity = operation.style.opacity == 1 ? 0 : 1
  // }

  //点击换座位按钮后，展示三个选座操作
  if (!operation.style.opacity || operation.style.opacity == 0) {
    operation.style.opacity = 1
  }
  console.log('operation.style.opacity')
  console.log(operation.style.opacity)
})

//确认按钮
var confirmSeat = document.getElementById('confirmSeat')
confirmSeat.addEventListener('click', function () {
  changeSeatBtn[0].classList.remove("hiddenSpan") // 显示换座位总按钮
  confirmSeat.classList.add("hiddenSpan")  // 隐藏确认按钮
  operation.style.opacity = 0 //展示三个选座操作
  seatImport.style.opacity = 0 //隐藏座位导入表
})

/* 

  随机座位randomSeat

*/
var randomSeat = document.getElementById('randomSeat')
randomSeat.addEventListener('click', function () {
  var all = randomArray(trusteeshipInf.seat) //对全托随机
  // console.log(all)
  for (let i = 1; i <= trusteeshipInf.num; i++) { // 还原
    trusteeshipInf.seat[i] = all[i]
  }
  console.log('trusteeshipInf.seat')
  console.log(trusteeshipInf.seat)

  // 午托座位
  var noonOnly = randomArray(noonInf.seat) //对仅午托随机
  // console.log(noonOnly)
  for (let i = 1; i <= noonInf.num; i++) { //还原
    noonInf.seat[i] = noonOnly[i]
  }

  // let noonRandom = trusteeshipInf.seat.concat(noonInf.seat)
  // let noonRandomNum = trusteeshipInf.fixed.concat(noonInf.fixed)

  console.log('noonInf.seat')
  console.log(noonInf.seat)

  // 晚托座位
  var eveningOnly = randomArray(eveningInf.seat) //对仅晚托随机
  // console.log(eveningOnly)
  for (let i = 1; i <= eveningInf.num; i++) { // 还原
    eveningInf.seat[i] = eveningOnly[i]
  }
  console.log('eveningInf.seat')
  console.log(eveningInf.seat)

  console.log('noonChildren')
  console.log(noonChildren)
  // console.log(typeof (noonChildren))

  /* 
  
  首先安排仅午托的位置

  */
  let noonAndAll = [0]
  for (let i = 1; i <= noonInf.num; i++) { //获取仅午托位置
    noonAndAll[i] = Math.random() * (noonInf.num + trusteeshipInf.num)
    let temp = Math.ceil(noonAndAll[i]) // 向上取整数
    // 重复需要重新随机
    // 分三种情况，分别为：1、随机名单里重复 2、全托固定名单里重复 3、午托固定名单里重复
    while (noonAndAll.includes(temp) || trusteeshipInf.fixed.includes(temp) || noonInf.fixed.includes(temp)) {
      noonAndAll[i] = Math.random() * (noonInf.num + trusteeshipInf.num)
      temp = Math.ceil(noonAndAll[i]) // 向上取整数
    }
    noonAndAll[i] = temp
  }
  console.log(noonAndAll)

  /* 
  
    排座位时
  
  */
  let fill = 0 // 空位置：0
  let add = 0 // 名单的偏移量
  noonChildren.forEach(function (node) {
    if (node.className == 'changedListName') { // 是座位
      let noonOffset
      // console.log(node.dataset.id + node.innerHTML) //可以存为记录
      // 说明已经固定位置
      if (noonInf.fixed[noonInf.seat.indexOf(noonInf.seat[node.dataset.id])] != 0) {
        // 名单顺延
        fill = 1
        add++
      } else { //可以安排到当前位置
        for (let i = 1; i <= noonInf.num; i++) {
          noonOffset = noonInf.num + trusteeshipInf.num - noonAndAll[i] + 1
          if (node.dataset.id == noonOffset) {
            // console.log(node.dataset.id + node.innerHTML) //可以存为记录
            // console.log('安排午托' + noonInf.seat[i])
            node.innerHTML = noonInf.seat[i]
            if (node.classList.contains('hiddenSpan')) {
              node.classList.remove('hiddenSpan')
            }

            fill = 1 // 午托已占座
            add++ // 晚托占座+1

            eveningChildren.forEach(function (sonNode) { // 留出晚托的位置
              if (node.dataset.id == sonNode.dataset.id) {
                if (add <= eveningInf.num) {
                  sonNode.innerHTML = eveningInf.seat[add]
                  if (sonNode.classList.contains('hiddenSpan')) {
                    sonNode.classList.remove('hiddenSpan')
                  }
                } else {
                  sonNode.innerHTML = ''
                  sonNode.classList.add('hiddenSpan')
                }
              }
            })
          }
        }
      }

      if (!fill) { // 空位置：表示应该为全托的座位
        noonOffset = node.dataset.id //获取座位号
        // console.log(noonOffset)
        // console.log(noonInf.num + trusteeshipInf.num - noonOffset + 1 + add)
        // console.log('安排全托' + trusteeshipInf.seat[noonOffset - add])
        node.innerHTML = trusteeshipInf.seat[noonOffset - add]

        eveningChildren.forEach(function (sonNode) { // 两个座位表的全托位置应该对应
          if (node.dataset.id == sonNode.dataset.id) {
            sonNode.innerHTML = trusteeshipInf.seat[noonOffset - add]
            if (sonNode.classList.contains('hiddenSpan'))
              sonNode.classList.remove('hiddenSpan')
          }
        })
      }
      fill = 0
    }
  })
})

/* 

  导入位置

*/
var seatImport = document.querySelector('[class = "csw_seatImport"]')
var importSeat = document.getElementById('importSeat')
var importNoonSeatData = document.getElementById('importNoonSeatData')
var importEveningSeatData = document.getElementById('importEveningSeatData')
importSeat.addEventListener('click', function () {
  if (seatImport.style.opacity == 0) {
    seatImport.style.opacity = 1
  } else {
    console.log('importNoonSeatData')
    console.log(importNoonSeatData.value)

    let importNoonSeatDataList = importNoonSeatData.value.split('\n')
    console.log(importNoonSeatDataList)
    console.log(typeof (importNoonSeatDataList))

    /* 导入午托座位 */
    let noonImportNum = 1
    let noonSeatCnt = noonInf.num + trusteeshipInf.num
    noonChildren.forEach(function (node) {
      let tempName = importNoonSeatDataList[noonImportNum]
      //空位置1：名单空行
      if (tempName == '' && node.className == 'changedListName') {
        console.log('位置置空')
        node.className = 'changedListName hiddenSpan'
        noonImportNum++
        noonSeatCnt++
        //空位置2：无人
      } else if (tempName == '' && node.className == 'changedListName hiddenSpan') {
        console.log('位置置空')

        noonImportNum++
        noonSeatCnt++
      } else {
        //腾出一个位置
        if (node.classList.contains('hiddenSpan')) {
          node.classList.remove('hiddenSpan')
        }
        if (node.className == 'changedListName' || node.className == 'changedListName fixedListName') {
          if (noonImportNum <= noonSeatCnt) {

            node.innerHTML = tempName
            if (tempName.indexOf('*') > 0) {
              let seatName = tempName.slice(0, tempName.length - 1)
              console.log(seatName)
              node.innerHTML = seatName
              node.classList.add('fixedListName')
            } else {
              // console.log(tempName)
              // node.innerHTML = tempName
              if (node.className == 'changedListName fixedListName') {
                node.className = 'changedListName'
              }
            }
            noonImportNum++
          } else {
            node.className = 'changedListName hiddenSpan'
          }
        }
      }

    })

    console.log('importEveningSeatData')
    console.log(importEveningSeatData.value)

    let importEveningSeatDataList = importEveningSeatData.value.split('\n')
    console.log(importEveningSeatDataList)
    console.log(typeof (importEveningSeatDataList))

    /* 导入晚托座位 */
    let eveningImportNum = 1
    let eveningSeatCnt = eveningInf.num + trusteeshipInf.num
    eveningChildren.forEach(function (node) {
      let tempName = importEveningSeatDataList[eveningImportNum]
      //空位置1：名单空行
      if (tempName == '' && node.className == 'changedListName') {
        console.log('位置置空')
        node.className = 'changedListName hiddenSpan'
        eveningImportNum++
        eveningSeatCnt++
        //空位置2：无人
      } else if (tempName == '' && node.className == 'changedListName hiddenSpan') {
        console.log('位置置空')

        eveningImportNum++
        eveningSeatCnt++
      } else {
        //腾出一个位置
        if (node.classList.contains('hiddenSpan')) {
          node.classList.remove('hiddenSpan')
        }
        if (node.className == 'changedListName' || node.className == 'changedListName fixedListName') {
          if (eveningImportNum <= eveningSeatCnt) {

            node.innerHTML = tempName
            if (tempName.indexOf('*') > 0) {
              let seatName = tempName.slice(0, tempName.length - 1)
              console.log(seatName)
              node.innerHTML = seatName
              node.classList.add('fixedListName')
            } else {
              // console.log(tempName)
              // node.innerHTML = tempName
              if (node.className == 'changedListName fixedListName') {
                node.className = 'changedListName'
              }
            }
            eveningImportNum++
          } else {
            node.className = 'changedListName hiddenSpan'
          }

        }
      }

    })

    seatImport.style.opacity = 0
  }
})

/* 

  固定位置fixedSeat

*/
var fixedSeat = document.getElementById('fixedSeat')
var fixed = document.getElementById('fixed')
console.log(fixed)
// 注册点击事件监听器，用于处理接下来的第一个点击事件
// 为 fixedSeat 按钮注册点击事件监听器
fixedSeat.addEventListener('click', function () {
  // 在这里处理 fixedSeat 按钮的点击事件
  console.log("点击了 fixedSeat 按钮");

  fixed.addEventListener('click', function (event) {
    // 获取第二个点击事件的具体信息
    var target = event.target; // 获取点击事件的目标元素

    console.log("第二个点击事件的目标元素是：", target.children);
    console.log("第二个点击事件的目标元素是：", target.innerHTML);
    console.log("第二个点击事件的目标元素是：", target.dataset.id);

    /* 
    
      固定后及时更新名单
    
    */
    let importNoonSeatDataList = importNoonSeatData.value.split('\n')
    let noonFixedName = importNoonSeatDataList[target.dataset.id]
    if (noonFixedName != '') {
      noonFixedName += '*'
      importNoonSeatDataList[target.dataset.id] = noonFixedName
      importNoonSeatData.value = importNoonSeatDataList.join('\n')
      console.log('更新', noonFixedName)
    }
    let importEveningSeatDataList = importEveningSeatData.value.split('\n')
    let eveningFixedName = importEveningSeatDataList[target.dataset.id]
    if (eveningFixedName != '') {
      eveningFixedName += '*'
      importEveningSeatDataList[target.dataset.id] = eveningFixedName
      importEveningSeatData.value = importEveningSeatDataList.join('\n')
      console.log('更新', eveningFixedName)
    }

    if (trusteeshipInf.seat.includes(target.innerHTML)) { // 全托
      for (let i = 0; i <= trusteeshipInf.num; i++) {
        if (trusteeshipInf.seat[i] == target.innerHTML) {
          console.log("固定座位", target.innerHTML);
          trusteeshipInf.fixed[i] = target.dataset.id
          noonChildren.forEach(function (node) {
            if (node.innerHTML == target.innerHTML) {
              node.classList.add('fixedListName')
            }
          })
          eveningChildren.forEach(function (node) {
            if (node.innerHTML == target.innerHTML) {
              node.classList.add('fixedListName')
            }
          })
        }
      }
      console.log(trusteeshipInf)
    }

    if (noonInf.seat.includes(target.innerHTML)) { // 午托
      for (let i = 0; i <= noonInf.num; i++) {
        if (noonInf.seat[i] == target.innerHTML) {
          console.log("固定座位", target.innerHTML);
          noonInf.fixed[i] = target.dataset.id
          noonChildren.forEach(function (node) {
            if (node.innerHTML == target.innerHTML) {
              node.classList.add('fixedListName')
            }
          })

        }
      }
      console.log(noonInf)
    }
    if (eveningInf.seat.includes(target.innerHTML)) { // 晚托
      for (let i = 0; i <= eveningInf.num; i++) {
        if (eveningInf.seat[i] == target.innerHTML) {
          console.log("固定座位", target.innerHTML);
          eveningInf.fixed[i] = target.dataset.id
          eveningChildren.forEach(function (node) {
            if (node.innerHTML == target.innerHTML) {
              node.classList.add('fixedListName')
            }
          })

        }
      }
      console.log(noonInf)
    }



    // 一旦获取了第二个点击事件的信息，立即将该监听器移除
    document.removeEventListener('click', arguments.callee);
  }, { once: true }); // 设置 {once: true} 选项，使监听器只在第一次触发事件时执行
});

/* 

  交换位置exchangeSeat

*/
var exchangeSeat = document.getElementById('exchangeSeat')
console.log(fixed)
// 注册点击事件监听器，用于处理接下来的第一个点击事件
// 为 exchangeSeat 按钮注册点击事件监听器
exchangeSeat.addEventListener('click', function () {
  // 在这里处理 exchangeSeat 按钮的点击事件
  console.log("点击了 exchangeSeat 按钮");

  let firstName
  let firstSeat
  let secondName
  let secondSeat

  let cnt = 0 //计数君

  fixed.addEventListener('click', function (event) {
    // 获取第二个点击事件的具体信息
    var target = event.target; // 获取点击事件的目标元素
    //第一位
    if (cnt == 0) {
      console.log("target.children", target.children);
      console.log(target.innerHTML, "交换位置：");
      console.log("座位是：", target.dataset.id);

      secondName = target.innerHTML
      secondSeat = target.dataset.id

      cnt++
      //第二位
    } else {

      console.log("target.children", target.children);
      console.log(target.innerHTML, "被交换位置：");
      console.log("座位是：", target.dataset.id);

      firstName = target.innerHTML
      firstSeat = target.dataset.id

      let importNoonSeatDataList = importNoonSeatData.value.split('\n')
      console.log('importNoonSeatDataList', importNoonSeatDataList)
      let importEveningSeatDataList = importEveningSeatData.value.split('\n')
      console.log('importEveningSeatDataList', importEveningSeatDataList)

      let tempName
      let str
      tempName = importNoonSeatDataList[firstSeat]
      if (importNoonSeatDataList[secondSeat] == '') {

      } else {
        importNoonSeatDataList[firstSeat] = importNoonSeatDataList[secondSeat] + '*'
      }
      importNoonSeatDataList[secondSeat] = tempName
      console.log(importNoonSeatDataList)
      str = importNoonSeatDataList.join('\n')
      console.log(str)
      importNoonSeatData.value = str

      tempName = importEveningSeatDataList[firstSeat]
      if (importEveningSeatDataList[secondSeat] == '') {

      } else {
        importEveningSeatDataList[firstSeat] = importEveningSeatDataList[secondSeat] + '*'
      }
      importEveningSeatDataList[secondSeat] = tempName
      console.log(importEveningSeatDataList)
      str = importEveningSeatDataList.join('\n')
      console.log(str)
      importEveningSeatData.value = str; // 后面接自执行函数，会被判定为函数str()，需要加;

      //重新导入座位
      (function () {
        console.log('重新导入座位')
        console.log('importNoonSeatData')
        console.log(importNoonSeatData.value)

        let importNoonSeatDataList = importNoonSeatData.value.split('\n')
        console.log(importNoonSeatDataList)
        console.log(typeof (importNoonSeatDataList))

        /* 导入午托座位 */
        let noonImportNum = 1
        let noonSeatCnt = noonInf.num + trusteeshipInf.num
        noonChildren.forEach(function (node) {
          let tempName = importNoonSeatDataList[noonImportNum]
          //空位置1：名单空行
          if (tempName == '' && node.className == 'changedListName') {
            console.log('位置置空')
            node.className = 'changedListName hiddenSpan'
            noonImportNum++
            noonSeatCnt++
            //空位置2：无人
          } else if (tempName == '' && node.className == 'changedListName hiddenSpan') {
            console.log('位置置空')

            noonImportNum++
            noonSeatCnt++
          } else {
            //腾出一个位置
            if (node.classList.contains('hiddenSpan')) {
              node.classList.remove('hiddenSpan')
            }
            if (node.className == 'changedListName' || node.className == 'changedListName fixedListName') {
              if (noonImportNum <= noonSeatCnt) {

                node.innerHTML = tempName
                if (tempName.indexOf('*') > 0) {
                  let seatName = tempName.slice(0, tempName.length - 1)
                  console.log(seatName)
                  node.innerHTML = seatName
                  node.classList.add('fixedListName')
                } else {
                  // console.log(tempName)
                  // node.innerHTML = tempName
                  if (node.className == 'changedListName fixedListName') {
                    node.className = 'changedListName'
                  }
                }
                noonImportNum++
              } else {
                node.className = 'changedListName hiddenSpan'
              }
            }
          }

        })

        console.log('importEveningSeatData')
        console.log(importEveningSeatData.value)

        let importEveningSeatDataList = importEveningSeatData.value.split('\n')
        console.log(importEveningSeatDataList)
        console.log(typeof (importEveningSeatDataList))

        /* 导入晚托座位 */
        let eveningImportNum = 1
        let eveningSeatCnt = eveningInf.num + trusteeshipInf.num
        eveningChildren.forEach(function (node) {
          let tempName = importEveningSeatDataList[eveningImportNum]
          //空位置1：名单空行
          if (tempName == '' && node.className == 'changedListName') {
            console.log('位置置空')
            node.className = 'changedListName hiddenSpan'
            eveningImportNum++
            eveningSeatCnt++
            //空位置2：无人
          } else if (tempName == '' && node.className == 'changedListName hiddenSpan') {
            console.log('位置置空')

            eveningImportNum++
            eveningSeatCnt++
          } else {
            //腾出一个位置
            if (node.classList.contains('hiddenSpan')) {
              node.classList.remove('hiddenSpan')
            }
            if (node.className == 'changedListName' || node.className == 'changedListName fixedListName') {
              if (eveningImportNum <= eveningSeatCnt) {

                node.innerHTML = tempName
                if (tempName.indexOf('*') > 0) {
                  let seatName = tempName.slice(0, tempName.length - 1)
                  console.log(seatName)
                  node.innerHTML = seatName
                  node.classList.add('fixedListName')
                } else {
                  // console.log(tempName)
                  // node.innerHTML = tempName
                  if (node.className == 'changedListName fixedListName') {
                    node.className = 'changedListName'
                  }
                }
                eveningImportNum++
              } else {
                node.className = 'changedListName hiddenSpan'
              }

            }
          }

        })
      })();
      // 一旦获取了第二个点击事件的信息，立即将该监听器移除
      document.removeEventListener('click', arguments.callee);
    }
  });


});



// var eveningList = document.querySelector('[data-name="eveningList"')
// var eveningName = eveningList.querySelectorAll('*')
// eveningInf.listNum = eveningName.length
// console.log(eveningInf)

//获取banner窗口大小
// console.log(window.screen.height)
// winSeat = document.querySelector('.csw_goods_new.csw_panel')
// winSeat.Height = window.clientHeight
// // console.dir(winSeat)
// console.log(winSeat.Height)




// // 从文本域获取输入的人员名单
// const noon = document.querySelectorAll('.textStyle')[0].value.split('\n')
// const evening = document.querySelectorAll('.textStyle')[1].value.split('\n')
// console.log(noon)
// console.log(evening)


// 自执行函数
// // (function () {

// // })();



// ExportTxt("文件名","文件内容")

//         function ExportTxt(name, data) {
//             const urlObject = window.URL || window.webkitURL || window;
//             const export_blob = new Blob([data]);

//             const save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
//             save_link.href = urlObject.createObjectURL(export_blob);
//             save_link.download = name;

//             const ev = document.createEvent("MouseEvents");
//             ev.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
//             save_link.dispatchEvent(ev);
//         }



