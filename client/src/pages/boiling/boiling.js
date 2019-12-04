import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './boiling.scss'

export default class Boilling extends Component {

  config = {
    navigationBarTitleText: '沸点'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='boilling'>
        <Text>boilling!</Text>
      </View>
    )
  }
}
