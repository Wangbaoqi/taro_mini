import { useState } from 'react';
import { View, Text, Image } from '@tarojs/components';

import { Tabbar, TabbarItem } from '@antmjs/vantui';
import Taro from '@tarojs/taro';

import '@antmjs/vantui/es/icon/style';

import './index.scss';

function Index() {
  const [active, setActive] = useState(0);

  const tabList = [
    {
      path: '/pages/index/index',
      icon: 'wap-home-o',
      text: '首页',
      name: 'home'
    },
    {
      path: '/pages/stroke/index',
      icon: 'apps-o',
      text: '行程',
      name: 'stroke'
    },
    {
      path: '/pages/serve/index',
      icon: 'notes-o',
      text: '服务',
      name: 'serve'
    },
    {
      path: '/pages/mine/index',
      icon: 'contact',
      text: '我的',
      name: 'mine'
    }
  ];

  const handleToggle = url => {
    Taro.switchTab({
      url
    });
  };
  return (
    <View className="custom-tab-bar">
      <Tabbar
        activeColor="#07c160"
        inactiveColor="#000"
        active={active}
        onChange={e => e.detail}
      >
        {tabList.map((tab, i) => (
          <TabbarItem
            key={i}
            icon={tab.icon}
            onClick={() => handleToggle(tab.path)}
          >
            {tab.text}
          </TabbarItem>
        ))}
      </Tabbar>
    </View>
  );
}
export default Index;
