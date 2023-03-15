/**
 * 指定番号の要素を置き換えます。
 */
export const replaceItemAtIndex = <T>(arr: T[], index: number, newValue: T) => [
  ...arr.slice(0, index),
  newValue,
  ...arr.slice(index + 1),
];
