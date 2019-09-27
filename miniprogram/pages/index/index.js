// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestData()
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
  requestData(){
    wx.request({
      url:"https://free-api.heweather.net/s6/weather/now?location=beijing&key=e3d066620f0245bcb7e8425f18f333c4",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:function(e){
        console.log(e)
      }
    })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   * 
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