// miniprogram/pages/weather/weather.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    temperature: {},
    latitude: '',
    longitude: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    var that=this;
    wx.getSetting({
      success(res) { // 查看所有权限
        let status = res.authSetting['scope.userLocation']
        if (!status) {
          wx.authorize({
            scope: 'scope.userLocation',
            success:function() {
             that.mylocation()
            }
          })
        }else{
          that.mylocation()
        }
      }
    })
  },
  mylocation:function(){
    wx.getLocation({
      type: 'gcj02',
      success:res=>{
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
        this.requestData()
      }
    })
  },
  requestData:function() {
    wx.request({
      url: `https://free-api.heweather.net/s6/weather/now?location=${this.data.longitude},${this.data.latitude}&key=e3d066620f0245bcb7e8425f18f333c4`,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:e=>{
        let {data,statusCode} = e;
        if (statusCode == "200") {
          this.setData({
            temperature: data.HeWeather6[0]
          })
        }
      }
    })
  },
  gosurprise: function () {
    wx.navigateTo({
      url: "../index/index"
    })
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