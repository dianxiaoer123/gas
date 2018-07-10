// pages/wrap/wrap.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stepIndex:0, //步骤
    sruindex:0, //确定取消圈存按钮index
    isOpen:true,
    isDialog:2,
    cardPer:0, //插卡进度
    qcPer:0 //圈存进度
  },

//  开启蓝牙设备按钮
  isOpen:function(){
    var a = this.data.isOpen;
    // 点击进入步骤3
    this.setData({
      isOpen:!a,
      stepIndex:2
    })

    if (this.data.stepIndex == 2){
      this.quancunPER();
    }
  

  },

  quancunPER:function(){
    var count = 0;
    var that = this;
    var timer1 = setInterval(function () {
      count = Math.round(count + Math.random() * 10);
      if (count >= 100) {
        count = 100;
        clearInterval(timer1);
        that.setData({
          isDialog: 0
        })
      }
      that.setData({
        qcPer: count
      })

    }, 100);
  },

  sureClick:function(e){
    var index = e.currentTarget.dataset.index;
    this.setData({
      sruindex: index
    })
 
  },

  // 失效
  sxClick:function(){
    this.setData({
      isDialog:1
    })
  },

  // 重新圈存
  restFunc:function(){
    this.setData({
      isDialog: 2
    })
    this.quancunPER();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //  步骤一插卡
    var count = 0;
    var that = this;
    var timer1 = setInterval(function(){
      count = Math.round(count + Math.random()*10);
       if(count >= 100){
         count = 100;
         clearInterval(timer1);
        //  进入步骤2
        that.setData({
          stepIndex:1
        })
       }
       that.setData({
         cardPer:count
       })

    },100);
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