var app = getApp();

Page({
  data:{
    menuList: [
        {
            title: '热门',
            show: false
        },{
            title: '电影',
            show: false
        },{
            title: '读书',
            show: false
        },{
            title: '电视',
            show: false
        },{
            title: '活动',
            show: false
        },{
            title: '音乐',
            show: false
        }
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
});