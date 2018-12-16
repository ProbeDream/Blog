//定义一个滚动的方法!
window.addEventListener("scroll", function(x) {
    if (window.scrollY > 0) {
      topNavbar.classList.add("sticky");
    } else {
      topNavbar.classList.remove("sticky");
    }
  });