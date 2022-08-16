import { Component, useMemo } from 'react';
import { View, Text } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';

import './index.scss';

const Service = () => {
  const page = useMemo(() => Taro.getCurrentInstance().page, []);

  useDidShow(() => {
    // if (page && typeof page.getTabBar === 'function') {
    //   const tabbar = page.getTabBar()
    //   // @ts-ignore
    //   tabbar?.setData({
    //     selected: 2
    //   })
    // }
  });

  return (
    <View className="service">
      <Text>Hello Service!</Text>
    </View>
  );
};

export default Service;
