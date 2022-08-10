import { View, Text } from '@tarojs/components';
import { Button } from '@antmjs/vantui';

import './index.scss';

export default function Index() {
  return (
    <View className="index">
      <Text>Hello world!</Text>
      <Button type="primary" block>
        块级元素
      </Button>
    </View>
  );
}
