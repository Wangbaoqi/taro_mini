import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView, Image } from '@tarojs/components'
import './follow.scss'

export default class Follow extends Component {


  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View className="follow-article">
        <View className="follow-title">
          <Image className="title-logo" src='../../../assets/imgs/boiling.png'/>
          <View className="title-info">
            <View className="info-name">前端劝退师</View>
            <View className="info-name">
              <Text>natewang</Text>
              <Text>昨天</Text>
            </View>
          </View>
        </View>
        <View className="follow-content">
          <View className="content-title">
            颜值即正义，这几个库能颠覆你对数据交互的想象
          </View>
          <View className="content-info">
            <View className="info-text">
              这个例子的结果也很有可能会被认为抛出异常-renferenceError,但是结果并不是这样，真正输出 undefined。刚开始学习JS的时候看到这个的时候可能会有很大的困惑。。。
              但是掌握的JavaScript的执行顺序「会有单独的章节解释」的时候，这个问题可能会迎刃而解
            </View>
            <View className="info-img"></View>
          </View>
        </View>
        <View className="follow-footer">
          <View className="footer-thumbs">点赞</View>
          <View className="footer-bbs">评论</View>
          <View className="footer-share">分享</View>
        </View>
      </View>
    )
  }
}
