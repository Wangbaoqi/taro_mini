import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import classNames from 'classnames'

import { NbList } from '../index'

import './tabList.scss'

export default class TabList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      _tabIndex: 0,
      _panelStyle: {},
      _tabStyle: {},
    }

    this._touchDot = 0,

    this._touchMove = 0,

    this._count = 0,

    this._panelWidth = 375,

    this._distanceX  = 0,

    this._tabIndex = 0,


    this._distanceConf = 0,


    // 是否已经在滑动
    this._isMoving = false

  }

  componentWillMount() { 
    console.log(this.props, 'props');
    
    this._count = this.props.tabList.length;
    this._distanceConf = 100/this.props.tabList.length*10;
  }

  componentDidMount() {
    
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }



  tabClick(item, id) {
    const { type = '' } = item

    
    this.setState({
      _tabIndex: id
    })

  }

  // 添加过渡
  addTransition () {
    let { _panelStyle, _tabStyle } = this.state;

    _panelStyle.transition = 'all 0.2s'
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

    const { _count } = this

    // 判断边界 不能滑动
    if(translateX*0.1 > 0 || translateX*0.1 < -(100*(_count-1)/_count)) return 

    _panelStyle.transform = `translateX(${translateX*0.1}%)`

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

    const { _tabIndex, _distanceConf } = this;

    const touchMove = e.touches[0].pageX

    this._distanceX = touchMove - this._touchDot

    this.removeTransition();

    this.setTranslateX( -_tabIndex * _distanceConf + this._distanceX )

    this._isMoving = true;
    
  }

  touchEnd(e) {
    const { _isMoving, _distanceX, _panelWidth, _count, _distanceConf  } = this;

    if(_isMoving && Math.abs(_distanceX) > _panelWidth / 6) {

      if(_distanceX > 0) {
        this._tabIndex--
        if(this._tabIndex < 0) this._tabIndex = 0
      }else {
        this._tabIndex++
        if(this._tabIndex >= _count) this._tabIndex = _count - 1
      }
    }

    this.addTransition()

    this.setTranslateX(-this._tabIndex * _distanceConf)

    this.resetData()
  }


  render() {
    const {
      tabList = []
    } = this.props

    console.log(this.props.children, 'render list');

    const { _tabIndex } = this.state;

    const tabItems = tabList.map((item, idx) => {

      const tabCls = classNames({
        'tab_item': true,
        'tab_active': idx == _tabIndex
      })

      return <View
        className={tabCls}
        key={`tab${idx}`}
        onClick={this.tabClick.bind(this, item, idx)}
      >
        {item.title}
        <View className='tab_underline'></View>
      </View>
    })

    const paneContentStyle = {
      width: `${tabList.length*100}%`
    }

    Object.assign(paneContentStyle, this.state._panelStyle)


    const tabLists = tabList.map((item, idx) => {
      
      const colors = ['red', 'blue', 'green', 'yellow', '#ffe564']

      return <View className='pane_01' key={idx} style={{ background: colors[idx] }}>
        <NbList title={item.title} />
      </View>
    })


    return (
      <View className='nt-tabs_body'>
        <View className='pane_container' id='panel'>
          <View className='pane_tabs'>
            {tabItems}
          </View>
          <View className='pane-content clearfix'
            style={paneContentStyle}
            onTouchStart={this.touchStart.bind(this)}
            onTouchEnd={this.touchEnd.bind(this)}
            onTouchMove={this.touchMove.bind(this)}
          >
            {tabLists}
          </View>
        </View>
      </View>

    )
  }
}
