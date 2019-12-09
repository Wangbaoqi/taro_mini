

const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database({
  env: 'nate-front-o7l4u'
})
exports.main = async (event, context) => {
  let { OPENID, APPID, UNIONID } = cloud.getWXContext()
  const { articleContent, articleTitle, articleTagType } = event;
  
  console.log(OPENID, APPID, UNIONID);
  

  return new Promise((resolve, reject) => {
    db.collection('article').add({
      data: {
        title: articleTitle,
        name: '',
        date: new Date(),
        tagType: articleTagType,
        content: articleContent,
        openId: OPENID
      }
    }).then(res => {
      // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
      console.log(res, 'article publish')
      const { errMsg = ''} = res;
      if(errMsg == "collection.add:ok") {
        resolve({
          code: 000,
          message: '发布成功'
        })
      }else {
        resolve({
          code: 200,
          message: '发布失败'
        })
        console.log(res);
      }
    })
  })
  
}