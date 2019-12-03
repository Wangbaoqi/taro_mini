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
