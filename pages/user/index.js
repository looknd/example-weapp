//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    userInfo: {},
    oneList: [
        {
            img: 'http://www.easyicon.net/api/resizeApi.php?id=1133668&size=48',
            title: '书影音·活动'
        },
        {
            img: 'http://www.easyicon.net/api/resizeApi.php?id=1201124&size=48',
            title: '喜欢'
        },
        {
            img: 'http://www.easyicon.net/api/resizeApi.php?id=507340&size=48',
            title: '日记'
        },
        {
            img: 'http://www.easyicon.net/api/resizeApi.php?id=1182127&size=48',
            title: '相册'
        }
    ],
    twoList: [
        {
            img: 'http://www.easyicon.net/api/resizeApi.php?id=1138853&size=48',
            title: '我的广播'
        },
        {
            img: 'http://www.easyicon.net/api/resizeApi.php?id=1133668&size=48',
            title: '小事'
        },
        {
            img: 'http://www.easyicon.net/api/resizeApi.php?id=1201124&size=48',
            title: '豆列'
        },
        {
            img: 'http://www.easyicon.net/api/resizeApi.php?id=507340&size=48',
            title: '我的订单'
        }
    ]
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
  }
})
