export function randomColor() {
  const colorList = [
    '#14FBA8',
    '#2614FB',
    '#FB7E14',
    '#E9FB14',
    '#FB1483',
    '#34FB14',
    '#7A14FB',
  ];
  return colorList[Math.floor(Math.random() * colorList.length)];
}
