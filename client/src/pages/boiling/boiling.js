import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import './boiling.scss'

export default class Boilling extends Component {

  config = {
    navigationBarTitleText: '沸点',
    enablePullDownRefresh: true
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onPullDownRefresh () {

    // Taro.startPullDownRefresh().then(res => console.log(res, 'all'))

    console.log('stop');

    
  }

  render () {
    return (
      <View className='boilling'>
        <Text>boilling!</Text>
        <ScrollView
         className='scrollview'
         scrollY
         scrollWithAnimation
        //  scrollTop={scrollTop}
        //  style={scrollStyle}
        //  lowerThreshold={Threshold}
        //  upperThreshold={Threshold}
        //  onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
        //  onScroll={this.onScroll}
        >
          <View className="infoItem">this is boiling</View>
          <View className="infoItem">this is boiling</View>
          <View className="infoItem">this is boiling</View>
          <View className="infoItem">this is boiling</View>
          <View className="infoItem">this is boiling</View>
          <View className="infoItem">this is boiling</View>
          <View className="infoItem">this is boiling</View>
          <View className="infoItem">this is boiling</View>
          <View className="infoItem">this is boiling</View>
          <View className="infoItem">this is boiling</View>
        </ScrollView>
      </View>
    )
  }
}
