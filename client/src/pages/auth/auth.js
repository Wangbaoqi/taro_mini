import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button } from '@tarojs/components'
import PropTypes from 'prop-types'

import './auth.scss'
class Auth extends Component {

  config = {
    navigationBarTitleText: '授权页面'
  }

  constructor(props) {
    super(props)

  }

  componentWillMount() {
    // 检测用户是否已经授权了
    this._handleUserAuth()
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps, nextState) {

  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillUnmount() {

  }


  _handleUserAuth() {

    Taro.login().then(res => {
      console.log(res, 'login');
      

    })
    
    Taro.getSetting().then(res => {
      console.log(res, 'setting');
      if(!res.authSetting['scope.userInfo']) {
        console.log('no authSetting');
       
      }else {
        Taro.getUserInfo().then(res => {
          console.log(res, 'has authorize Userinfo');

          Taro.setStorageSync('userInfo', res.userInfo)
         
        })
      }
      
    })
  }

  /**
   * 授权弹框按钮点击之后的回调
   */
  handleAuthLogin = res => {
    console.log('start auth');
    
    if(res.detail.userInfo){ // 返回的信息中包含用户信息则证明用户允许获取信息授权
      console.log(res, '授权成功')
      Taro.setStorageSync('userInfo', res.detail.userInfo)
     
    }else{ // 用户取消授权，进行提示，促进重新授权
      
    }

    Taro.navigateBack()
  }

  render() {
    return (
      <View className="auth-page">
        <Image className="auth-logo" src="../../assets/imgs/home.png"/>
        <View className="auth-title">Nate 前端进阶</View>
        <Text className="auth-dec">
          您暂未授权Nate前端进阶小程序获取您的信息，将无法完整的使用小程序的功能，如要正常使用，请点击授权按钮，打开头像、昵称等信息的授权。
        </Text>
        <Button className="auth-btn"
          hoverClass="none" plain={true} openType='getUserInfo' onGetUserInfo={this.handleAuthLogin}>授权登录</Button>
      </View>
    )
  }
}

Auth.propTypes = {

}

export default Auth