import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton, AtSearchBar, AtTabs, AtTabsPane } from 'taro-ui'
import { NtTab, NtTabPane } from '../../components/highOrder/index'

import { NbTar, NbList } from '../../components/business/index'

// import { TabContext } from '../../context/index' 

import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/actions'


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
        { title: 'flutter' },
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

  tabClick () {

  }

  render () {
    const { clientWidth } = this.state;
    const tabLists = [{
      title: '关注',
      type: 'follow'
    },{
      title: '沸点',
      type: 'boiling'
    },{
      title: '前端',
      type: 'front'
    },{
      title: '后端',
      type: 'end'
    },{
      title: 'flutter',
      type: 'app'
    }]

    


    return (

      <View className='index' id='book'>
        <NbTar tabList={tabLists} clientWidth={clientWidth}>
        </NbTar>

      </View>
    )
  }
}
