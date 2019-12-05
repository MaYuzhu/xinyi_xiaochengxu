const app = getApp()
const url = app.globalData.url

Page({

  /**
   * 页面的初始数据
   */
  data: {
    number: 0,
    pastList: [],
    havePastList: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.request({
      url: url + 'record/search?session_id=' + wx.getStorageSync('session_id'),
      method: "POST",
      data: {
        //theme_id: that.data.number,
        with_scale: true,
        paging: false
      },
      header: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      success: (res) => {
        //console.log(res)
        if (res.statusCode == 401) {
          //console.log('没有登录')
          app.noUser()
          return
        }
        if (res.data.results.length > 0) {
          that.setData({
            pastList: res.data.results,
            havePastList: true,
          })
        }

      },
      fail: function () {
        console.log('This is fail function')
      }
    })
  },

  gotoPagePast: function (event) {
    const record_id = event.currentTarget.id  //1或者2得到点击了按钮1或者按钮2 
    let title = event.currentTarget.dataset.title
    wx.navigateTo({
      url: "/pages/pastItem/pastItem?record_id=" + record_id + "&title=" + title,

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