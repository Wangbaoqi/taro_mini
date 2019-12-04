import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './infoList.scss'

export default class InfoList extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='infoList'>
        {this.props.title}
      </View>
    )
  }
}
