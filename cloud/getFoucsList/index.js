

const cloud = require('wx-server-sdk')

cloud.init()

exports.main = async (event, context) => {
  let { OPENID, APPID, UNIONID } = cloud.getWXContext()

  console.log(event, 'fouch');
  
  return {
    OPENID,
    APPID,
    UNIONID,
  }
}