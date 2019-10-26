// pages/gaugelist/gaugelist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab : 0,
    scrolls: [

      {
        name: '儿童行为情绪量表',
        tag: 15,
      },
      {
        name: '中国儿童注意力量表',
        tag: 15,
      },
      {
        name: '感觉量表',
        tag: 20,
      },
      {
        name: '焦虑量表',
        tag: 10,
      },



    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  gotoPage: function (event) {
    const number = event.target.id;//1或者2得到点击了按钮1或者按钮2 
    const url = "/pages/objectinfo/objectinfo"//得到页面url 
    wx.navigateTo({
      url: url,
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
  // tab切换
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
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