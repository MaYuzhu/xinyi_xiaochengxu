
var app = getApp()
var url = app.globalData.url
Page({

  data: {
    evaluate_contant: ['维度一', '维度二', '维度三', '维度四', '维度五', '维度六liuliu'],
    stars: [0, 1, 2, 3, 4],
    normalSrc: '../../images/no-star.png',
    selectedSrc: '../../images/full-star.png',
    halfSrc: '../../images/half-star.png',
    score: 0,
    scores: [],
    option_id_arr:[],
    //details:[],
    isHave:'',
    scale_id:'',
    max: 140,
    summary: '',
  },
  onLoad: function (options) {
    var that = this
    wx.request({
      url: url + 'track/get?session_id=' + wx.getStorageSync('session_id'),
      method: "POST",
      data: {},
      header: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      success: (res) => {
        console.log(res)
        let have = res.data.details.length
        let num_star = res.data.details[0].max_level
        let arr_atar = []
        let arr_op_id = []
        for (let i = 0; i < num_star;i++){
          arr_atar.push(i)
        }
        for (let j = 0; j < res.data.details.length; j++) {
          arr_op_id.push(res.data.details[j].option_id)
        }
        console.log(arr_op_id)

        if (have>0){
          that.setData({
            isHave:true,
            evaluate_contant: res.data.details.reverse(),
            stars: arr_atar,
            scale_id: res.data.scale_id,
            option_id_arr: arr_op_id,
          })
        }  
      }
    })
  },

  // 提交事件
  submit_evaluate: function () {
    let that = this
    let details = []
    let option_id_arr = that.data.option_id_arr.reverse()
    for (let i = 0; i < that.data.scores.length;i++){
      details.push({ option_id: that.data.option_id_arr[i] , my_level: that.data.scores[i]})
    }
    console.log(details)

    wx.request({
      url: url + 'track/save?session_id=' + wx.getStorageSync('session_id'),
      method: "POST",
      data: { 
        scale_id: that.data.scale_id,
        summary: that.data.summary,
        details: details,
      },
      header: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      success: (res) => {
        console.log(res)
        
      }
    })

  },
  charChange: function(e){
    
    let that = this
    that.setData({
      summary: e.detail.value
    })
  },

  //点击左边,半颗星
  /* selectLeft: function (e) {
    var score = e.currentTarget.dataset.score
    if (this.data.score == 0.5 && e.currentTarget.dataset.score == 0.5) {
      score = 0;
    }

    this.data.scores[e.currentTarget.dataset.idx] = score,
      this.setData({
        scores: this.data.scores,
        score: score
      })

  }, */

  //点击右边,整颗星
  selectRight: function (e) {
    var score = e.currentTarget.dataset.score

    this.data.scores[e.currentTarget.dataset.idx] = score,
      this.setData({
        scores: this.data.scores,
        score: score
      })
  },

  inputs: function (e) {
    // 获取输入框的内容
    var value = e.detail.value;
    // 获取输入框内容的长度
    var len = parseInt(value.length);

    
    //最多字数限制
    if (len > this.data.max) return;
    // 当输入框内容的长度大于最大长度限制（max)时，终止setData()的执行
    this.setData({
      currentWordNumber: len //当前字数  
    });
  },

  

  test: function(){
    
    
    wx.request({
      url: url + 'person-role/list?session_id=' + wx.getStorageSync('session_id'),
      method: "POST",
      data: {},
      header: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      success: (res) => {
        console.log(res)  
      }
    })
  }

})
