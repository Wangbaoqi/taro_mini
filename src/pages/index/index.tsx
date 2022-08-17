import { View, Text } from '@tarojs/components';
import { Component, useMemo } from 'react';
import Taro, { useDidShow } from '@tarojs/taro';
import { NavBar, MyIcon } from '@/components';

// import CustomTabBar from '../../custom-tab-bar'

import './index.scss';

const Index = () => {
  const page = useMemo(() => Taro.getCurrentInstance().page, []);

  useDidShow(() => {
    // if (page && typeof page.getTabBar === 'function') {
    //   const tabbar = page.getTabBar()
    //   // @ts-ignore
    //   tabbar?.setData({
    //     selected: 0
    //   })
    // }
  });

  return (
    <View className='index'>
      <NavBar>bar</NavBar>
      <View className='banner'></View>
      <View className='box'>
        <MyIcon />
      </View>
    </View>
  );
};

export default Index;
