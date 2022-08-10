// 修改主题颜色CSS
function theme() {
  window.setTimeout("theme()", 1000);
  var a = getComputedStyle(document.documentElement).getPropertyValue('--themecolor');
  if (!a) {
    console.log('没有找到元素？');
    return;
  } else {
    // document.documentElement.style.setProperty('--themecolor', "#999");
    // document.documentElement.style.setProperty('--fontcolor2', "#999");
  };
};
theme();