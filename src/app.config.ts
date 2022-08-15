export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/mine/index',
    'pages/serve/index',
    'pages/stroke/index'
  ],

  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    color: '#000000',
    selectedColor: '#333333',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: 'images/barIcon/home.png',
        selectedIconPath: 'images/barIcon/home-o.png',
        text: '首页'
      },
      {
        pagePath: 'pages/stroke/index',
        selectedIconPath: 'images/barIcon/apps-o.png',
        iconPath: 'images/barIcon/apps.png',
        text: '行程'
      },
      {
        pagePath: 'pages/serve/index',
        selectedIconPath: 'images/barIcon/notes-o.png',
        iconPath: 'images/barIcon/notes.png',
        text: '服务'
      },
      {
        pagePath: 'pages/mine/index',
        selectedIconPath: 'images/barIcon/mine-o.png',
        iconPath: 'images/barIcon/mine.png',
        text: '我的'
      }
    ]
  }
});
