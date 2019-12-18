var app = getApp()
var util = require('../../utils/util')

Page({
  data: {
    addrIndex: 0,
    date: '2019-10-10',
    time: '12:00',
    bookToastHidden: true
  },
  onLoad: function (options) {
    
  },
  
  bindToastTap: function () {
    console.log('appoinment success')
    this.setData({
      bookToastHidden: false
    })
  },
  hideToast: function () {
    this.setData({
      bookToastHidden: true
    })
  },

  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },

  bindTimeChange: function (e) {
    
    this.setData({
      time: e.detail.value
    })
  }

})