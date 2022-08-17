import { View, Text, StandardProps, ITouchEvent } from '@tarojs/components';
import { FunctionComponent, ReactNode, useState } from 'react';
import { clsx } from 'clsx';

import { getBarStyle } from './wxs';

import './index.scss';

export interface INavBar extends StandardProps {
  title?: ReactNode;
  fixed?: boolean;
  safeAreaTop?: boolean;
  left?: ReactNode;
  leftArrow?: boolean;
  zIndex?: number;
  children?: ReactNode;
  onClickReturn?: (e: ITouchEvent) => void;
}

const NavBar = (props: INavBar) => {
  const {
    fixed = true,
    safeAreaTop = true,
    leftArrow = false,
    zIndex,
    children
  } = props;

  const barCls = clsx(
    't-nav-bar',
    fixed && 'fixed',
    safeAreaTop && 't-safe-top'
  );

  const barStyle = getBarStyle({
    safeAreaTop,
    zIndex
  });

  return (
    <View className={barCls} style={barStyle}>
      <View className='t-nav-bar__content'>{children}</View>
    </View>
  );
};

export default NavBar;
