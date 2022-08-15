import { Component } from 'react';
import { View, Text } from '@tarojs/components';
import './index.scss';

export default class Service extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="service">
        <Text>Hello serve!</Text>
      </View>
    );
  }
}
