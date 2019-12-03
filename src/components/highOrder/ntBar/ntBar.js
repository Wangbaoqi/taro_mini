import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import classNames from 'classnames'
import './ntBar.scss'

export default class NtBar extends Component {

  constructor(props) {

    super(props)

    this.state = {
      _panelStyle: {},
      _tabStyle: {},


    }

    this._touchDot = 0,

    this._count = 4,

    this._panelWidth = 0,

    this._distanceX  = 0,

    this._isTransiton = false,

    this._tabIndex = 0,

    this._panelStyles = {},

    // 是否已经在滑动
    this._isMoving = false
  }

  componentWillMount () {

  }

  componentDidMount () { 

    const { tabLists  } = this.props;
    this._count = tabLists.length;
    
    // 坑 使用自定义组件需要 in() 
    const query = Taro.createSelectorQuery().in(this.$scope)

    query.select('#panel').boundingClientRect(res => {
      this._panelWidth = res.width;
      // console.log('get panelWidth');
    }).exec() 
  }

  componentWillUnmount () { }

  componentDidShow () { 

    // console.log('watch show');
    
    
  }

  componentDidHide () { }


  // 添加过渡
  addTransition () {
    let { _panelStyle, _tabStyle } = this.state;

    _panelStyle.transition = 'all 0.3s'
    // _tabStyle.transition = 'all 0.3s'

    this.setState({
      _panelStyle,
    })

  }

  // 移除过渡
  removeTransition () {
    let { _panelStyle, _tabStyle } = this.state;

    _panelStyle.transition = 'none'
    _tabStyle.transition = 'none'

    this.setState({
      _panelStyle,
      _tabStyle
    })

  }

  // 设置滑动距离
  setTranslateX (translateX) {
    let { _panelStyle } = this.state;

    _panelStyle.transform = `translateX(${translateX*2}rpx)`

    this.setState({
      _panelStyle
    })
  }

  // 重置参数
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


  tabClick(id) {
    const { _panelWidth } = this;


    this.props.onClick(...arguments);

    this._tabIndex = id

    this.addTransition()

    // this.setTranslateX(-id * _panelWidth)

    // this.resetData()

  }


  render () {

    const { _tabIndex, _panelWidth } = this;
    const { _panelStyle, _tabStyle } = this.state;
    const { tabLists = [], panelWidth } = this.props;

    // console.log(this.props, 'props');
    // console.log(_panelWidth, '_panelWidth');
    // console.log(`${panelWidth * tabLists.length * 2}rpx`);
    
    

    const paneContentStyle = {
      width: `${panelWidth * tabLists.length * 2}rpx`
    }

    Object.assign(paneContentStyle, _panelStyle)



    const tabItem = tabLists.map((item, idx) => {
      const tabCls = classNames({
        'tab_item': true,
        'tab_active': idx == _tabIndex
      })
      return <View 
        className={tabCls}
        key={`tab${idx}`}
        onClick={this.tabClick.bind(this, idx)}
      >
        {item.title} 
        <Text style={_tabStyle} className='tab_underline'></Text>
      </View>
    })

    const colorList = ['red', 'blue', 'green', 'yellow']
    const tabPanel = tabLists.map((e, idx) => {
      return <View 
      className='pane_01' style={{background: colorList[idx]}}
      key={`pann${idx}`}
      >
        {this.props.children}
      </View>
    })


    return (
      <View className='nt-tabs_body'>
        <View className='pane_container' id='panel'>
          <View className='pane_tabs'>
            {tabItem}
          </View>
          <View className='pane-content clearfix' 
            style={paneContentStyle}
            onTouchStart={this.touchStart.bind(this)}
            onTouchEnd={this.touchEnd.bind(this)}
            onTouchMove={this.touchMove.bind(this)}
            >
            {/* {tabPanel} */}
          </View>
        </View>
      </View>
    )
  }
}
