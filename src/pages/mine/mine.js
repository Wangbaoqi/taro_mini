
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Form } from '@tarojs/components'
import classNames from 'classnames'

import { AtButton } from 'taro-ui'
import { NtTab, NtTabPane } from '../../components/highOrder/index'
import './mine.scss'




export default class Index extends Component {

  config = {
    navigationBarTitleText: '我的'
  }

  constructor() {
    super()
    this.state = {
    

    }
  }

  componentWillMount () { }

  componentDidMount () { 


  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }



  render () {

    

    return (
      <View >
        我的
      </View>
    )
  }
}
