import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import './infoList.scss'

import { Follow } from '../index'


export default class InfoList extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  // 滚动到顶部
  onScrollToUpper() {
    // Taro.startPullDownRefresh().then(res => console.log(res, 'all'))
  }

  onScroll() {

  }

  render () {
    return (
      <View className='infoList'>
        <ScrollView
         className='scrollview'
         scrollY
         scrollWithAnimation
        //  scrollTop={scrollTop}
        //  style={scrollStyle}
        //  lowerThreshold={Threshold}
        //  upperThreshold={Threshold}
         onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
         onScroll={this.onScroll}
        >
          <Follow />
        </ScrollView>
      </View>
    )
  }
}
