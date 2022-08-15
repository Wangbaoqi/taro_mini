import { useState, Component } from 'react';
import { CoverView, View, Text, Image } from '@tarojs/components';

import Taro from '@tarojs/taro';

import { MyIcon, CustomIcon } from '@/components';

import '../components/icon/style/iconfont.scss';

import './index.scss';

const Index = () => {
  const [active, setActive] = useState(0);
  const tabList = [
    {
      path: '/pages/index/index',
      icon: 'home',
      text: '首页',
      name: 'home'
    },
    {
      path: '/pages/stroke/index',
      icon: 'list',
      text: '行程',
      name: 'stroke'
    },
    {
      path: '/pages/serve/index',
      icon: 'apps',
      text: '服务',
      name: 'serve'
    },
    {
      path: '/pages/mine/index',
      icon: 'my',
      text: '我的',
      name: 'mine'
    }
  ];

  const handleToggle = (i: number, url: string) => {
    Taro.switchTab({
      url
    });
  };

  return (
    <View className="t-tab-bar">
      <View className="t-tab-bar__border"></View>
      <View className="t-tab-bar__content">
        {tabList.map((tab, i) => {
          const checked = i === active;
          return (
            <View
              className="t-tab-bar__item"
              key={i}
              onClick={() => handleToggle(i, tab.path)}
            >
              <CustomIcon
                name={tab.icon}
                size="20px"
                color={checked ? '#07c160' : ''}
              />
              <Text style={{ color: checked ? '#07c160' : '' }}>
                {tab.text}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

Index.options = {
  addGlobalClass: true
};

class IndexC extends Component {
  state = {
    tabList: [
      {
        path: '/pages/index/index',
        icon: 'home',
        text: '首页',
        name: 'home'
      },
      {
        path: '/pages/stroke/index',
        icon: 'list',
        text: '行程',
        name: 'stroke'
      },
      {
        path: '/pages/serve/index',
        icon: 'apps',
        text: '服务',
        name: 'serve'
      },
      {
        path: '/pages/mine/index',
        icon: 'my',
        text: '我的',
        name: 'mine'
      }
    ],
    active: 0
  };

  static options = {
    addGlobalClass: true
  };

  handleToggle(i: number, url: string) {
    this.setState({ active: i });

    Taro.switchTab({ url });
  }

  render() {
    const { tabList, active } = this.state;
    return (
      <View className="t-tab-bar">
        <View className="t-tab-bar__border"></View>
        <View className="t-tab-bar__content">
          {tabList.map((tab, i) => {
            const checked = i === active;
            return (
              <View
                className="t-tab-bar__item"
                key={i}
                onClick={this.handleToggle.bind(this, i, tab.path)}
              >
                <CustomIcon
                  name={tab.icon}
                  size="20px"
                  color={checked ? '#07c160' : ''}
                />
                <Text style={{ color: checked ? '#07c160' : '' }}>
                  {tab.text}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

export default IndexC;
