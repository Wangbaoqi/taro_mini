import { useMemo } from 'react';
import { View, Text } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';
import CustomTabBar from '../../custom-tab-bar';

import './index.scss';

const Mine = () => {
  const page = useMemo(() => Taro.getCurrentInstance().page, []);

  useDidShow(() => {
    // if (page && typeof page.getTabBar === 'function') {
    //   const tabbar = page.getTabBar()
    //   // @ts-ignore
    //   tabbar?.setData({
    //     selected: 3
    //   })
    // }
  });

  return (
    <View className="mine">
      <Text>Hello mine!</Text>
    </View>
  );
};

export default Mine;
