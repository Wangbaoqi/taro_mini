import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './search.scss'


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

class Search extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    console.log(this.props);
    
    return (
      <View className='search'>
        <Text>search</Text>
        <View className='todo'>
          <Button className='add_btn' onClick={this.props.add}>+</Button>
          <Button className='dec_btn' onClick={this.props.dec}>-</Button>
          <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
          <View>{this.props.counter.num}</View>
        </View>
      </View>
    )
  }
}
export default Search
