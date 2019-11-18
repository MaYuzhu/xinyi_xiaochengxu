// pages/mine/mine.js
const app = getApp()
const url = app.globalData.url
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uesrname:'点击授权登录',
    avatar:'',
    isAvatar: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  getUserContent: function(){
    let that = this
    wx.request({
      url: url + 'member/get?session_id=' + wx.getStorageSync('session_id'),
      method: "POST",
      data: {},
      header: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      success: (res) => {
        console.log(res)
        if (res.statusCode == 401) {
          return
        } else {
          wx.hideToast()
          that.setData({
            uesrname: wx.getStorageSync('user'),
            avatar: wx.getStorageSync('avatar'),
            isAvatar: true
          })
        }
        
      }
    })
  },


  gotoUserInfo: function(){
    let that = this
    wx.request({
      url: url + 'member/get?session_id=' + wx.getStorageSync('session_id'),
      method: "POST",
      data: {},
      header: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      success: (res) => {
        if (res.statusCode == 401) {
          app.noUser()
        } else {
          wx.navigateTo({
            url: "/pages/userinfo/userinfo",
          })
        }
      }
    })
    
    
  },
  warrant: function(){
    let that = this
    if(that.data.uesrname == '点击授权登录'){
      app.noUser()
    }else{
      return false
    }
  },
  
  /* gotoClockIn: function(){
    wx.navigateTo({
      url: "/pages/clockIn/clockIn",
    })
  }, */
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let that = this
    
    that.getUserContent()
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})