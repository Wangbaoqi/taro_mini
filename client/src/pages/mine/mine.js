
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Form, Button, Image } from '@tarojs/components'
import classNames from 'classnames'

import { ListShow } from '../../components/dumb/index'
import './mine.scss'




export default class Index extends Component {

  config = {
    navigationBarTitleText: '我的'
  }

  constructor() {
    super()
    this.state = {
      userInfo: {}

    }
  }

  componentWillMount () { 
    

  }

  componentDidMount () { 

    
  }

  componentWillUnmount () { }

  componentDidShow () { 
    console.log('show');

    const userInfo = Taro.getStorageSync('userInfo')

    this.setState({
      userInfo
    })
    
  }

  componentDidHide () { }



  
  

  // 跳转到授权页面登录
  handleAuthPage () {
    Taro.navigateTo({
      url: '/pages/auth/auth'
    })
  }
  // 跳转到个人页面
  handleSelfPage () {
    const { userInfo } = this.state;
    if(!userInfo.nickName) return;
    Taro.navigateTo({
      url: 'pages/person/person'
    })
  }

   

  render () {
    const { userInfo } = this.state
    

    const confList = [{
      title: '我赞过的',
      icon: 'heart-2',
      number: `10篇`
    },{
      title: '收藏集',
      icon: 'star-2',
      number: `10篇`
    },{
      title: '看过的书籍',
      icon: 'tags',
      number: `10篇`
    },{
      title: '阅读过的文章',
      icon: 'eye',
      number: `10篇`
    }, {
      title: '标签管理',
      icon: 'tag',
      number: `10篇`
    }]

    

    return (
      <View className="mine-page">
        {/* 我的个人信息 */}
        <View className="mine-info" onClick={this.handleSelfPage.bind(this)}>
          <View className="mine-info-logo">
            <Image className="info-log" src={userInfo.avatarUrl}/>
            {
              userInfo.nickName ?
              <View className="info-name" >
                <View className="industry-name">{userInfo.nickName}</View>
                <View className="industry-post">{userInfo.userPost || '前端代码狗'}</View>
              </View>:
              <View className="info-name" onClick={this.handleAuthPage.bind(this)}>微信登录</View>
            }
          </View>
          <View className='at-icon at-icon-chevron-right'></View>
        </View>
        {/* 我的浏览信息等 */}
        <View className="mine-conf">
          {
            confList.map((item, idx) => (
              <ListShow key={idx} confItem={item}/>
            ))
          }

        </View>
      </View>
    )
  }
}
