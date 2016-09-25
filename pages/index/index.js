//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    topicList: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../user/index'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    this.initTopicList();
  },
  initTopicList: function() {
   wx.request({
    url: 'https://api.douban.com/v2/book/search',
    data: {
      q: '书',
    },
    header: {
        'Content-Type': 'application/json'
    },
    success: function(res) {
      console.log(res.data)
      this.topicList = res.data.books;
    }
   })
  }
})
