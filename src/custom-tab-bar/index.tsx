import { useState, useEffect, Component } from 'react';
import { CoverView, CoverImage, View, Text, Image } from '@tarojs/components';

import Taro from '@tarojs/taro';

import { MyIcon, CustomIcon } from '@/components';

import '../components/icon/style/iconfont.scss';

import './index.scss';

const isEqualPath = (a: string, b: string) =>
  (a || '').replace(/^\//, '') === (b || '').replace(/^\//, '');

const Index = () => {
  const [path, setPath] = useState(Taro.getCurrentInstance().router?.path);

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

  console.log('render custom template');

  useEffect(() => {
    // @ts-ignore
    wx.onAppRoute(function (res) {
      setPath(res.path);
    });
  }, [path]);

  const handleToggle = (i: number, url: string) => {
    Taro.switchTab({
      url
    });
    // setActive(i);
  };

  return (
    <View className='t-tab-bar'>
      <View className='t-tab-bar__border'></View>
      <View className='t-tab-bar__content'>
        {tabList.map((tab, i) => {
          // const checked = i === active;
          const checked = isEqualPath(path, tab.path);
          return (
            <View
              className='t-tab-bar__item'
              key={i}
              onClick={() => handleToggle(i, tab.path)}
            >
              <CustomIcon
                name={tab.icon}
                size='20px'
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
        iconPath: '../images/barIcon/home.png',
        iconCheckPath: '../images/barIcon/home-o.png',
        text: '首页',
        name: 'home'
      },
      {
        path: '/pages/stroke/index',
        icon: 'list',
        iconPath: '../images/barIcon/notes.png',
        iconCheckPath: '../images/barIcon/notes-o.png',
        text: '行程',
        name: 'stroke'
      },
      {
        path: '/pages/serve/index',
        icon: 'apps',
        iconPath: '../images/barIcon/apps.png',
        iconCheckPath: '../images/barIcon/apps-o.png',
        text: '服务',
        name: 'serve'
      },
      {
        path: '/pages/mine/index',
        icon: 'my',
        iconPath: '../images/barIcon/mine.png',
        iconCheckPath: '../images/barIcon/mine-o.png',
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
    Taro.switchTab({ url });
    // this.setSelected(i)
  }

  setSelected(idx: number) {
    this.setState({ active: idx });
  }

  render() {
    const { tabList, active } = this.state;
    return (
      <View className='t-tab-bar'>
        <View className='t-tab-bar__border'></View>
        <View className='t-tab-bar__content'>
          {tabList.map((tab, i) => {
            const checked = i === active;
            return (
              <View
                className='t-tab-bar__item'
                key={i}
                onClick={this.handleToggle.bind(this, i, tab.path)}
              >
                <CustomIcon
                  name={tab.icon}
                  size='20px'
                  color={checked ? '#50b2fa' : ''}
                />
                <View style={{ color: checked ? '#50b2fa' : '' }}>
                  {tab.text}
                </View>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

export default Index;
