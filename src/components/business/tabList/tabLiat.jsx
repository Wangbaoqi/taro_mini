import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import classNames from 'classnames'

import './tabList.scss'

export default class TabList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      _tabIndex: 0
    }

  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }



  tabClick (item, id) {
    const { type = '' } = item
    this.setState({
      _tabIndex: id
    })

  }


  render () {
    const { 
      tabList = []
    } = this.props

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


    return (
      <View className='tabList'>
        {tabItems}
      </View>
    )
  }
}
