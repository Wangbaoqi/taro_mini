import { View, Text } from '@tarojs/components';
import { Component } from 'react';

import { NavBar } from '@/components';
import { Button } from '@antmjs/vantui';

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
          <Button type="default">默认按钮</Button>
          <Button plain hairline type="primary">
            主要按钮
          </Button>
          <Button type="info">信息按钮</Button>
          <Button type="warning">警告按钮</Button>
          <Button type="danger">危险按钮</Button>
        </View>
      </View>
    );
  }
}
