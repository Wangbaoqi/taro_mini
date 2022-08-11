import { getSystemInfoSync as TaroGetSystemInfoSync } from '@tarojs/taro';

let systemInfo: any;

export function getSystemInfoSync() {
  if (!systemInfo) {
    systemInfo = TaroGetSystemInfoSync();
  }
  return systemInfo;
}
