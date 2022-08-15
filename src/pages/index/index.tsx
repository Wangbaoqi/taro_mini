import { View, Text } from '@tarojs/components';
import { Component } from 'react';

import { NavBar, MyIcon } from '@/components';

import './index.scss';

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <NavBar>bar</NavBar>
        <View className="banner"></View>
        <View className="box">
          <MyIcon />
        </View>
      </View>
    );
  }
}
