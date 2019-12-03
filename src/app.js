import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import configStore from './store'
import Index from './pages/index/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()



class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/mine/mine',
      'pages/search/search',
      'pages/boiling/boiling',
      'pages/book/book',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      backgroundColor: '#fff',
      selectedColor: '#1296db',
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: './assets/imgs/home.png',
          selectedIconPath: './assets/imgs/home-c.png'
        },
        {
          pagePath: 'pages/boiling/boiling',
          text: '沸点',
          iconPath: './assets/imgs/boiling.png',
          selectedIconPath: './assets/imgs/boiling-c.png'
        },
        {
          pagePath: 'pages/search/search',
          text: '搜索',
          iconPath: './assets/imgs/search.png',
          selectedIconPath: './assets/imgs/search-c.png'
        },
        {
          pagePath: 'pages/book/book',
          text: '书籍',
          iconPath: './assets/imgs/book.png',
          selectedIconPath: './assets/imgs/book-c.png'
        },
        {
          pagePath: 'pages/mine/mine',
          text: '我的',
          iconPath: './assets/imgs/mine.png',
          selectedIconPath: './assets/imgs/mine-c.png'
        },
      ]
    },
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
