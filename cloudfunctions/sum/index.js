const cloud = require('wx-server-sdk')
console.log(cloud.DYNAMIC_CURRENT_ENV)
cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database() 

exports.main = async (event, context) => {
     return db.collection('nickName').doc("e3ca065c-744d-4c0d-a47b-015a0d41ce6c").update({
       data:{
         imgurl:event.imgurl
       },
        success: function(res) {
          // res.data 包含该记录的数据
          console.log(res.data)
        } 
      })
}


