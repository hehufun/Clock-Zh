// 修改主题颜色CSS
var th = 0;
var link =
  document.querySelector('link[rel*="icon"]') || document.createElement("link");
link.rel = "shortcut icon";

function switchtheme() {
  var a = getComputedStyle(document.documentElement).getPropertyValue('--themebg');
  if (!a) {
    console.log('没找到元素')
  } else if (th < 1) {
    th++;
    document.documentElement.style.setProperty('--themebg', "#ededed");
    document.documentElement.style.setProperty('--big-fontcolor', "#242424");
    document.getElementById("switchbtn").innerHTML = '🌑';
    link.href = "./assect/img/sun-icon.svg";
    // console.log('变成白天模式' + th);
  } else {
    th = 0;
    document.getElementById("switchbtn").innerHTML = '🔆';
    document.documentElement.style.setProperty('--themebg', "#242424");
    document.documentElement.style.setProperty('--big-fontcolor', "#ededed");
    link.href = "./assect/img/moon-icon.svg";
    // console.log('变成暗夜模式' + th);
  }
};
