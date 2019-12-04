

const cloud = require('wx-server-sdk')

cloud.init()

exports.main = async (event, context) => {
  let { OPENID, APPID, UNIONID } = cloud.getWXContext()

  return {
    OPENID,
    APPID,
    UNIONID,
  }
}