import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton, AtSearchBar, AtTabs, AtTabsPane } from 'taro-ui'

import { NtTab } from '../../components/highOrder/index'
import './book.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '书籍'
  }
  constructor() {
    this.state = {
      clientWidth: 0,
      current: 0
    }

  }

  componentWillMount () { }

  componentDidMount () { 
    
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  handleClick (value) {
    this.setState({
      current: value
    })
  }

  render () {
    

    const tabList = [{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }]
    return (
      <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
        <AtTabsPane current={this.state.current} index={0} >
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={1}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={2}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
        </AtTabsPane>
      </AtTabs>
    )
  }
}
