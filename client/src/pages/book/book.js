import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton, AtSearchBar, AtTabs, AtTabsPane } from 'taro-ui'

import { NtTab } from '../../components/highOrder/index'
import './book.scss'

import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))

export default class Book extends Component {

  config = {
    navigationBarTitleText: '书籍'
  }
  constructor(props) {
    super(props)
    this.state = {
      
    }

  }

  componentWillMount () { }

  componentDidMount () { 
    wx.cloud.init()
    const db = wx.cloud.database({
      env: 'nate-front-o7l4u'
    })

    
    
    db.collection('blog').get().then(res => {
      // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
      console.log(res, 'blog')
    })


    wx.cloud.callFunction({
      // 云函数名称
      name: 'getFoucsList',
      // 传给云函数的参数
      data: {
        weRunData: wx.cloud.CloudID("28_ICS7AzmVLE9V1DBQWpHes5u4SkUsKbyFAUS96h0vXLCmB-E_7T1AaKQ2DBw"),
        obj: {
          shareInfo: wx.cloud.CloudID("28_ICS7AzmVLE9V1DBQWpHes5u4SkUsKbyFAUS96h0vXLCmB-E_7T1AaKQ2DBw"), // 非顶层字段的 CloudID 不会被替换，会原样字符串展示
        }
      },
      success: function(res) {
        console.log(res, 'cloud') // 3
      },
      fail: console.error
    })

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }



  render () {
    
    console.log(this.props);

    return (
      <View>

        <Text>book</Text>
        <View>{this.props.counter.num}</View>

      </View>
      
    )
  }
}
