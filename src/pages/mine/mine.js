
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Form } from '@tarojs/components'
import classNames from 'classnames'

import { AtButton } from 'taro-ui'
import { NtTab, NtTabPane } from '../../components/highOrder/index'
import './mine.scss'




export default class Index extends Component {

  config = {
    navigationBarTitleText: '我的'
  }

  constructor() {
    super()
    this.state = {
      _panelStyle: {},
      _tabStyle: {},

      _scrollLeft: '',
      _scrollRight: '',
      _scrollIntoView: '',

    }

    this._touchDot = 0,

    this._touchMove = 0,

    this._count = 4,

    this._panelWidth = 0,

    this._distanceX  = 0,

    this._isTransiton = false,

    this._tabIndex = 0,

    this._panelStyles = {},


    // 是否已经在滑动
    this._isMoving = false
  }

  componentWillMount () { }

  componentDidMount () { 

    const query = Taro.createSelectorQuery()

    query.select('#panel').boundingClientRect(res => {
      console.log(res);

      this._panelWidth = res.width;

    }).exec()

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }



  // 添加过渡
  addTransition () {
    let { _panelStyle, _tabStyle } = this.state;

    _panelStyle.transition = 'all 0.3s'
    _tabStyle.transition = 'all 0.2s'

    this.setState({
      _panelStyle,
      _tabStyle
    })

  }

  removeTransition () {
    let { _panelStyle, _tabStyle } = this.state;

    _panelStyle.transition = 'none'
    _tabStyle.transition = 'none'

    this.setState({
      _panelStyle,
      _tabStyle
    })

  }

  setTranslateX (translateX) {
    let { _panelStyle } = this.state;

    _panelStyle.transform = `translateX(${translateX*2}rpx)`

    this.setState({
      _panelStyle
    })
  }

  resetData() {
    this._touchDot = 0;
    this._isMoving = false;
    this._distanceX = 0
  }
  


  // 触摸开始
  touchStart (e) {
    this._touchDot = e.touches[0].pageX
  }


  touchMove (e) {

    // console.log(e, 'touchMove');
    const { _tabIndex, _panelWidth } = this;

    const touchMove = e.touches[0].pageX

    this._distanceX = touchMove - this._touchDot

    this.removeTransition();

    this.setTranslateX( -_tabIndex * _panelWidth + this._distanceX )

    this._isMoving = true;
    

    
  }

  touchEnd(e) {
    
    const { _isMoving, _distanceX, _panelWidth, _count  } = this;

    if(_isMoving && Math.abs(_distanceX) > _panelWidth / 3) {

      if(_distanceX > 0) {
        this._tabIndex--
        if(this._tabIndex < 0) this._tabIndex = 0
      }else {
        this._tabIndex++
        if(this._tabIndex >= _count) this._tabIndex = _count - 1
      }
    }

    this.addTransition()

    this.setTranslateX(-this._tabIndex * _panelWidth)

    this.resetData()
  }


  render () {

    const tabLists = [{
      title: '关注'
    },{
      title: '沸点'
    },{
      title: '前端'
    },{
      title: '后端'
    }]

    const { _tabIndex } = this;
    const { _panelStyle, _tabStyle } = this.state;

    const paneContentStyle = {
      width: '3000rpx'
    }

    
    
    Object.assign(paneContentStyle, this.state._panelStyle)

    let transformStyle = { }


    const tabItem = tabLists.map((item, idx) => {
      const tabCls = classNames({
        'tab_item': true,
        'tab_active': idx == _tabIndex
      })
      return <View 
        className={tabCls}
        key={`tab${idx}`}
      >
        {item.title} 
        <Text style={_tabStyle} className='tab_underline'></Text>
      </View>
    })


    return (
      <View 
        >
        {/* <NtTab>
          <NtTabPane >1</NtTabPane>
          <NtTabPane >2</NtTabPane> 
          
        </NtTab> */}


        <View className='nt-tabs_body'>
          <View className='pane_container' id='panel'>
            <View className='pane_tabs'>
              {/* <View className='tab_item tab_active'>首页 <Text style={this.state._panelStyle} className='tab_underline'></Text></View>
              <View className='tab_item'>沸点</View>
              <View className='tab_item'>前端</View>
              <View className='tab_item'>后端</View> */}

              {tabItem}
            </View>
            <View className='pane-content clearfix' 
              style={paneContentStyle}
              onTouchStart={this.touchStart.bind(this)}
              onTouchEnd={this.touchEnd.bind(this)}
              onTouchMove={this.touchMove.bind(this)}
              >
              <View className='pane_01' style={{ background: "red" }}>1</View>
              <View className='pane_01' style={{ background: "blue" }}>2</View>
              <View className='pane_01' style={{ background: "green" }}>3</View>
              <View className='pane_01' style={{ background: "yellow" }}>3</View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
