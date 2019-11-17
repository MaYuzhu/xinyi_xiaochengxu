// pages/userinfo/userinfo.js
const app = getApp()
const url = app.globalData.url
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uesrname: '小程序用户',
    fullname: '',
    avatar: '',
    isAvatar: false,
    phone: '',
    email: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
        wx.hideToast()
        that.setData({
          uesrname: wx.getStorageSync('user'),
          avatar: wx.getStorageSync('avatar'),
          fullname: res.data.full_name,
          phone: res.data.phone,
          email: res.data.email,
          isAvatar: true
        })
      }
    })
  },

  blurPhone: function(e){
    this.setData({
      phone: e.detail.value
    })
    this.setUser()
  },
  blurEmail: function (e) {
    this.setData({
      email: e.detail.value
    })
    this.setUser()
  },
  blurName: function (e) {
    this.setData({
      fullname: e.detail.value
    })
    this.setUser()
  },

  //设置用户头像与昵称
  setUser: function () {
    let that = this
    wx.request({
      url: url + 'member/save?session_id=' + wx.getStorageSync('session_id'),
      method: "POST",
      data: {
        full_name: that.data.fullname,
        phone: that.data.phone,
        nickname: that.data.uesrname,
        portrait: wx.getStorageSync('avatar'),
        email: that.data.email,
        user_info_init: true,
      },
      header: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      success: (res) => {
        console.log(res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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