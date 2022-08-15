import { Component } from 'react';
import { View, Text } from '@tarojs/components';
import './index.scss';

export default class Stroke extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="stroke">
        <Text>Hello stroke!</Text>
      </View>
    );
  }
}
