import { useMemo } from 'react';
import { View, Text } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';
// import CustomTabBar from '../../custom-tab-bar';

import './index.scss';

const Stroke = () => {
  const page = useMemo(() => Taro.getCurrentInstance().page, []);

  useDidShow(() => {
    // if (page && typeof page.getTabBar === 'function') {
    //   const tabbar = page.getTabBar()
    //   // @ts-ignore
    //   tabbar?.setData({
    //     selected: 1
    //   })
    // }
  });

  return (
    <View className='stroke'>
      <Text>Hello stroke!</Text>
    </View>
  );
};

export default Stroke;
