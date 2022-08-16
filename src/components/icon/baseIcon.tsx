import { View } from '@tarojs/components';
import react, { CSSProperties, ReactNode } from 'react';
import clsx from 'clsx';
import { ViewProps } from '@tarojs/components/types/View';

import './style/iconfont.scss';
import './baseIcon.scss';

const ICONSIZELISTS = ['inherit', 'mini', 'small', 'medium', 'large'];
const ICONCOLORLISTS = ['inherit', 'primary', 'info', 'warning', 'danger'];

type IconSize = 'inherit' | 'mini' | 'small' | 'medium' | 'large' | string;

type IconColor =
  | 'inherit'
  | 'primary'
  | 'info'
  | 'warning'
  | 'danger'
  | 'warning'
  | 'danger'
  | string;

export interface IconProps extends ViewProps {
  className?: string;
  style?: CSSProperties;
  name?: string;
  size?: IconSize;
  color?: IconColor;
  children?: ReactNode;
}

export default function TIcon(props: IconProps) {
  const {
    className,
    style,
    name,
    size = 'inherit',
    color = 'inherit',
    ...restProps
  } = props;

  const presetColor = ICONCOLORLISTS.includes(color);
  const presetSize = ICONSIZELISTS.includes(size);

  const cls = clsx(
    't-icon',
    `t-icon-${name}`,
    {
      [`t-icon--${color}`]: presetColor,
      [`t-icon--${size}`]: presetSize
    },
    className
  );
  const sls = {
    color: presetColor ? '' : color,
    fontSize: presetSize ? '' : size,
    ...style
  };
  return <View className={cls} style={sls} {...restProps} />;
}

// factory function for createIcon
export function createIcon(name: string) {
  return function (restProps: IconProps) {
    return <TIcon name={name} {...restProps} />;
  };
}

export function createCustomIcon() {
  return function (props: IconProps) {
    return <TIcon {...props} />;
  };
}
