
var app = getApp()
var url = app.globalData.url
Page({

  data: {
    evaluate_contant: ['维度一', '维度二', '维度三', '维度四', '维度五', '维度六liuliu'],
    stars: [0, 1, 2, 3, 4, 5, 6],
    normalSrc: '../../images/no-star.png',
    selectedSrc: '../../images/full-star.png',
    halfSrc: '../../images/half-star.png',
    score: 0,
    scores: [0, 0, 0],
  },

  // 提交事件
  submit_evaluate: function () {
    console.log('评价得分' + this.data.scores)
  },

  //点击左边,半颗星
  selectLeft: function (e) {
    var score = e.currentTarget.dataset.score
    if (this.data.score == 0.5 && e.currentTarget.dataset.score == 0.5) {
      score = 0;
    }

    this.data.scores[e.currentTarget.dataset.idx] = score,
      this.setData({
        scores: this.data.scores,
        score: score
      })

  },

  //点击右边,整颗星
  selectRight: function (e) {
    var score = e.currentTarget.dataset.score

    this.data.scores[e.currentTarget.dataset.idx] = score,
      this.setData({
        scores: this.data.scores,
        score: score
      })
  },

  test: function(){
    console.log('test')
    wx.request({
      url: 'http://47.95.254.255:8080/theme/search?session_id='+wx.getStorageSync('session_id'),
      method: "POST",
      data: { session_id: wx.getStorageSync('session_id')},
      header: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      success: (res) => {
        console.log(res)
      }
    })
  }

})
