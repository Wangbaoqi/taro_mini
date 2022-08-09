import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render() {
    const a = 'dddd'
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
