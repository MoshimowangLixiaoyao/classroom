// 第一大模块，页面滑动可以显示和隐藏
(function () {
  // 获取元素
  const entry = document.querySelector('.csw_entry')
  const elevator = document.querySelector('.csw-elevator')
  const operationAll = document.querySelector('.csw_seatOperationAll')
  const operation = document.querySelector('.csw_seatOperation')
  const seatPanelHeader = document.querySelector('.csw_panel_header')

  // console.log(seatPanelHeader.offsetTop)
  // 1. 当页面滚动大于 entry.offsetTop，就显示 电梯导航
  //    当页面滚动大于 seatPanelHeader.offsetTop，就显示两个座位操作
  // 2. 给页面添加滚动事件
  window.addEventListener('scroll', function () {
    // 被卷去的头部大于xx
    const n = document.documentElement.scrollTop
    // if (n >= xx) {
    //   elevator.style.opacity = 1
    // } else {
    //   elevator.style.opacity = 0
    // }
    // 简写
    elevator.style.opacity = n >= entry.offsetTop ? 1 : 0
    if (n <= seatPanelHeader.offsetTop - 50 || n >= seatPanelHeader.offsetTop + 80) {
      operation.style.opacity = 0
      confirmSeat.classList.add("hiddenSpan")  // 显示确认按钮
      changeSeatBtn[0].classList.remove("hiddenSpan") // 换座位按钮
    }
    operationAll.style.opacity = n >= seatPanelHeader.offsetTop - 10 && n <= seatPanelHeader.offsetTop + 30 ? 1 : 0

  })

  //出错。，。
  // document.getElementById('topnavSeat').onclick(function (e) {
  //   document.documentElement.scrollTop = seatPanelHeader.offsetTop
  // })

  topnavSeat = document.getElementById('topnavSeat')
  topnavSeat.addEventListener('click', function () {
    console.log('座位安排')
    document.documentElement.scrollTop = seatPanelHeader.offsetTop
  })

  // 点击返回页面顶部
  const backTop = document.querySelector('#backTop')
  backTop.addEventListener('click', function () {
    // 可读写
    // document.documentElement.scrollTop = 0
    // window.scrollTo(x, y)
    window.scrollTo(0, 0)
  })
})();

// 第二第三都放到另外一个执行函数里面
(function () {
  // 2. 点击页面可以滑动 
  const list = document.querySelector('.csw-elevator-list')
  list.addEventListener('click', function (e) {
    // console.log(11)
    if (e.target.tagName === 'A' && e.target.dataset.name) {
      // 排他思想  
      // 先移除原来的类active 
      // 先获取这个active的对象
      const old = document.querySelector('.csw-elevator-list .active')
      // console.log(old)
      // 判断 如果原来有active类的对象，就移除类，如果开始就没有对象，就不删除，所以不报错
      if (old) old.classList.remove('active')
      // 当前元素添加 active 
      e.target.classList.add('active')
      // 获得自定义属性  new   topic 
      // console.log(e.target.dataset.name)
      // 根据小盒子的自定义属性值 去选择 对应的大盒子
      // console.log(document.querySelector(`.csw_goods_${e.target.dataset.name}`).offsetTop)
      // 获得对应大盒子的 offsetTop
      const top = document.querySelector(`.csw_goods_${e.target.dataset.name}`).offsetTop
      // 让页面滚动到对应的位置
      document.documentElement.scrollTop = top

    }
  })




  // 3. 页面滚动，可以根据大盒子选 小盒子 添加 active 类
  window.addEventListener('scroll', function () {
    //  3.1  先移除类 
    // 先获取这个active的对象
    const old = document.querySelector('.csw-elevator-list .active')
    // console.log(old)
    // 判断 如果原来有active类的对象，就移除类，如果开始就没有对象，就不删除，所以不报错
    if (old) old.classList.remove('active')
    // 3.2 判断页面当前滑动的位置，选择小盒子

    // 获取4个大盒子
    const news = document.querySelector('.csw_goods_new')
    const popular = document.querySelector('.csw_goods_popular')
    const brand = document.querySelector('.csw_goods_brand')
    const topic = document.querySelector('.csw_goods_topic')
    const n = document.documentElement.scrollTop
    if (n >= news.offsetTop && n < popular.offsetTop) {
      // 选择第一个小盒子
      document.querySelector('[data-name=new]').classList.add('active')
    } else if (n >= popular.offsetTop && n < brand.offsetTop) {
      document.querySelector('[data-name=popular]').classList.add('active')
    } else if (n >= brand.offsetTop && n < topic.offsetTop) {
      document.querySelector('[data-name=brand]').classList.add('active')
    } else if (n >= topic.offsetTop) {
      document.querySelector('[data-name=topic]').classList.add('active')
    }
  })

})();

