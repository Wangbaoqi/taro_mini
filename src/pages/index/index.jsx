import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton, AtSearchBar, AtTabs, AtTabsPane } from 'taro-ui'
import { NtTab, NtTabPane } from '../../components/highOrder/index'

import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  constructor () {
    super()
    this.state = {
      searchVal: '',
      labelCurrent: 0,
      lableList: [
        { title: '推荐' },
        { title: '关注' },
        { title: '前端' },
        { title: '后端' },
      ],
      clientWidth: 0

    }
  }

  componentWillMount () { }

  componentDidMount () { 
    const query = Taro.createSelectorQuery()

    query.select('#book').boundingClientRect(res => {
      console.log(res, 'book');
      this.setState({
        clientWidth: res.width
      })
    }).exec()
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  handleClick (v) {
    this.setState({
      labelCurrent: v
    })
  }

  render () {
    const { clientWidth } = this.state;
    const tabLists = [{
      title: '关注'
    },{
      title: '沸点'
    },{
      title: '前端'
    },{
      title: '后端'
    }]


    console.log( clientWidth, 'initbook');

    return (
      <View className='book' id='book'>
        <NtTab tabLists={tabLists} panelWidth={clientWidth} >
          <NtTabPane>33</NtTabPane>
          <NtTabPane>44</NtTabPane>
          <NtTabPane>55</NtTabPane>
          <NtTabPane>66</NtTabPane>

        </NtTab>
      </View>
    )
  }
}
