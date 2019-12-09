import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Textarea } from '@tarojs/components'
import classNames from 'classnames'
import './article.scss'

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

export default class Article extends Component {

  config = {
    navigationBarTitleText: '分享文章'
  }

  constructor(props) {
    super(props)
    this.state = {
      tagIndex: 0,

      articleTitle: '',
      articleContent: '',
      articleTagType: 'boiling'
    }

  }

  componentWillMount () { }

  componentDidMount () { 
    
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }



  handleTagClick(idx, type) {
    this.setState({
      tagIndex: idx,
      articleTagType: type
    })
  }

  handleArticleContent(e) {
    this.setState({
      articleContent: e.detail.value
    })
    console.log(e, 'e');
    
  }

  handleArticleTitle(e) {
    this.setState({
      articleTitle: e.detail.value
    })
    console.log(e, 'e');
  }

  handlePublishArticle() {
    const { articleTitle, articleContent, articleTagType} = this.state;

    wx.cloud.init()
    const db = wx.cloud.database({
      env: 'nate-front-o7l4u'
    })

    
    
    // db.collection('blog').get().then(res => {
    //   // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
    //   console.log(res, 'blog')
    // })


    wx.cloud.callFunction({
      // 云函数名称
      name: 'publishArticle',
      // 传给云函数的参数
      data: {
        articleTitle,
        articleContent,
        articleTagType
      },
      success: function(res) {
        console.log(res, 'cloud') // 3
      },
      fail: console.error
    })


  }



  render () {
    const { tagIndex } = this.state
    
    const tags = [{
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

    const tag = tags.map((item, idx) => {

      const className = classNames({
        'tag': true,
        'active': idx === tagIndex
      })
      return <Text 
        className={className} 
        key={`tag${idx}`}
        onClick={this.handleTagClick.bind(this, idx, item.type)}
        >{item.title}</Text>
    })

    return (
      <View className="article-write">

        <View className="article article-title">
          <View className='article-icon at-icon at-icon-lightning-bolt'></View>
          <Input className="article-input" type='text' placeholder='文章标题' onBlur={this.handleArticleTitle.bind(this)} focus/>
        </View>
        <View className="article article-content">
          <View className='article-icon at-icon at-icon-list'></View>
          <Textarea className="article-textarea" placeholder='文章内容' onBlur={this.handleArticleContent.bind(this)}/>
        </View>


        <View className="article-category">

          <View className='category-title'>
            <View className='article-icon at-icon at-icon-tags'></View>
            <Text>选择分类</Text>
          </View>

          <View className='category-tags'>
            {tag}
          </View>
        </View>

        <View className="article-publish" onClick={this.handlePublishArticle.bind(this)}>
          <View className="at-icon at-icon-upload write-icon"></View>
        </View>

        

      </View>
      
    )
  }
}
