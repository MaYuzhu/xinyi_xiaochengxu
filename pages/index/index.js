//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //滚动的数组
    scrolls: [
      
      {
        name: '儿童行为主题',
        tag: 'green',
      },
      {
        name: '成人行为主题',
        tag: 'red',
      },
      {
        name: '家庭关系主题',
        tag: 'green',
      },
      {
        name: '中学生心理主题',
        tag: 'red',
      },
      
      
      
    ],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (wx.getStorageSync('user')) {
      
    } else {
      
      wx.redirectTo({
        url: '/pages/mime/mine'
      })
    }
  },
  gotoPage: function (event) {
    const number = event.target.id;//1或者2得到点击了按钮1或者按钮2 
    console.log(wx.getStorageSync('user'))
    if (wx.getStorageSync('user')) {
      const url = "/pages/gaugelist/gaugelist"//得到页面url 
      wx.navigateTo({
        url: url,
        //url: '/pages/mime/mine'
      })
    } else {
      wx.switchTab({
        url: '/pages/mime/mine'
      })
    }
    
  },
  
})
