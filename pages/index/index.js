//index.js
//获取应用实例
const app = getApp()
var url = app.globalData.url

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
      var that = this
    if (wx.getStorageSync('session_id')) {
        wx.request({
            url: url + '/theme/search?session_id=' + wx.getStorageSync('session_id'),
            method: "POST",
            data: { },
            header: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            success: (res) => {
                console.log(res)
                that.setData({
                    scrolls: res.data.results
                })
            }
        })
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
      wx.navigateTo({
              url: "/pages/gaugelist/gaugelist",
        //url: '/pages/mime/mine'
      })
    } else {
      wx.switchTab({
        url: '/pages/mime/mine'
      })
    }
    
  },
  
})
