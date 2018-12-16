//平滑导航!
//拿到nav.menu里面的ul>li>a的元素
let aTags = document.querySelectorAll("nav.menu > ul > li > a");

function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
}
requestAnimationFrame(animate);

for (let index = 0; index < aTags.length; index++) {
  aTags[index].onclick = function(details) {
    details.preventDefault(); //阻止默认动作!
    let a = details.currentTarget;
    let href = a.getAttribute("href"); //getAttribute 是带有Http协议的 获取到的值不做任何处理!
    let element = document.querySelector(href); //通过指定的href拿到对应的元素!
    let top = element.offsetTop; //拿到浏览器顶端到 当前元素的位置!
    //优化 通过使其有淡入淡出的效果 就是滚动条定位的时候!
    let targetTop = top - 80;
    let currentTop = window.scrollY;
    let Distance = targetTop - currentTop;
    var t = Math.abs((Distance / 100) * 300); //从下往上滑动的话 就代表距离为负数 但是对应的时间单位不能为负数!
    //100px 像素就需要使用0.3s  如果说算出来的滑动时间如果说大于0.5S的话(就是大浮动滑动 就直接设置为0.5S 快速滑动!)
    if (t > 500) {
      t = 500;
    }
    var coords = { Y: currentTop }; //当前坐标
    var tween = new TWEEN.Tween(coords)
      .to({ Y: targetTop }, t) //结束位置 时间
      .easing(TWEEN.Easing.Quadratic.InOut) //效果
      .onUpdate(function() {
        window.scrollTo(0, coords.Y);
      })
      .start();
  };
}
