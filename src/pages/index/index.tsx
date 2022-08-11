import { View, Text } from '@tarojs/components';
import { Button } from '@antmjs/vantui';

import { NavBar } from '@/components';

import './index.scss';

export default function Index() {
  return (
    <View className="index">
      <NavBar>bar</NavBar>
      <View className="banner"></View>
      <Button type="primary" block>
        块级元素
      </Button>
    </View>
  );
}
