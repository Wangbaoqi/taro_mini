import { getSystemInfoSync } from '@/utils';

const info = getSystemInfoSync();
console.log(info);

const getBarStyle = (style: any) => {
  const newStyle = {};

  if (style.safeAreaTop) {
    newStyle['paddingTop'] = info.statusBarHeight + 'px';
  }

  return newStyle;
};

export { getBarStyle };
