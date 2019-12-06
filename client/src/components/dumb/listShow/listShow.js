import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import classNames from 'classnames'


import PropTypes from 'prop-types'

import './listShow.scss'


class listShow extends Component {

  constructor(props) {
    super(props)

  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps, nextState) {

  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillUnmount() {

  }

  render() {
    const { confItem = {} } = this.props;
    const { title = '', icon = '', number = ''} = confItem;

    const confClass = classNames({
      'at-icon': true,
      [`at-icon-${icon}`]: true
    })

    return (
      <View className="list-show">
        <View className="list-left">
          <View className={confClass} ></View>
          <Text className="list-name">{title}</Text>
        </View>
        <View className="list-num">{number}</View>
      </View>
    )
  }
}

listShow.propTypes = {

}

export default listShow