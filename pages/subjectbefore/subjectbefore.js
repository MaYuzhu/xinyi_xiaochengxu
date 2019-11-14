// pages/subjectbefore/subjectbefore.js
const app = getApp()
const url = app.globalData.url
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xuanxiang:[],
    number: '',
    title: '',
    countDownNum: 0, //问题时长
    roleId:3,  
    record_id:'',     
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({ title: '加载中', icon: 'loading', duration: 10000 })
    let that = this
    that.setData({
      number: options.number,
      title: options.title,
      countDownNum: 1,
    })
    //请求得到问题
    wx.request({
      url: url + 'person-role/list?session_id=' + wx.getStorageSync('session_id'),
      method: "POST",
      data: {},
      header: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      success: (res) => {
        console.log(res)
        wx.hideToast()
        that.setData({
          xuanxiang: res.data.results
        })
      }
    })
  },
  radioChange: function(e){
    let that = this
    let val_id = e.detail.value
    that.setData({
      roleId: val_id
    })
    

  },
  gotoPage: function (event) {
    let that = this
    let number = that.data.number
    let title = that.data.title
    let countDownNum = that.data.countDownNum
    let roleId = that.data.roleId
    wx.navigateTo({
      url: "/pages/subject/subject?number=" + number + "&title=" + title + "&countDownNum=" + countDownNum + "&roleId=" + roleId,
      
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