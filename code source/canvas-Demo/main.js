var canvasDemo = document.getElementById('canvasDemo');
var context = canvasDemo.getContext('2d');
autoCanvasSize(canvasDemo);
listenToUser(canvasDemo);
function listenToUser(canvas) {

  var using = false;
  var lastPoint = { x: undefined, y: undefined }
  //特性检测 是否能够支持这个特性!
  if (document.body.ontouchstart !== undefined) {
    //触屏设备 
    canvas.ontouchstart = function (aaa) {
      console.log("start touch me !");
      var x = aaa.touches[0].clientX;
      var y = aaa.touches[0].clientY;
      console.log(x, y);
      using = true;
      if (eraserEnabled) {
        context.clearRect(x - 5, y - 5, 10, 10);
      } else {
        lastPoint = { x: x, y: y }
      }
    }

    canvas.ontouchmove = function (aaa) {
      console.log("start touch move !");
      var x = aaa.touches[0].clientX;
      var y = aaa.touches[0].clientY;
      console.log(x, y);
      if (!using) { return; }
      if (eraserEnabled) {
        context.clearRect(x - 5, y - 5, 10, 10);
      } else {
        var newPoint = { x: x, y: y }
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
        lastPoint = newPoint;
      }
    }

    canvas.ontouchend = function () {
      console.log('touch end!');
      using = false;
    }
  } else {
    //非触屏设备
    //当canvasDemo鼠标按下的时候 调用的方法!
    canvas.onmousedown = function (aaa) {
      var x = aaa.clientX;
      var y = aaa.clientY;
      using = true;
      if (eraserEnabled) {
        context.clearRect(x - 5, y - 5, 10, 10);
      } else {
        lastPoint = { x: x, y: y }
      }
    }

    //当canvasDemo鼠标移动的时候 调用的方法!
    canvas.onmousemove = function (aaa) {
      var x = aaa.clientX;
      var y = aaa.clientY;
      if (!using) { return; }
      if (eraserEnabled) {
        context.clearRect(x - 5, y - 5, 10, 10);
      } else {
        var newPoint = { x: x, y: y }
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
        lastPoint = newPoint;
      }

    }

    //当canvasDemo鼠标松开的时候 调用的方法!
    canvas.onmouseup = function (aaa) {
      using = false;
    }
  }

}



function autoCanvasSize(canvas) {
  // canvas 布局宽高适应! 
  setCanvasSize();
  window.onresize = function () {
    setCanvasSize();
  }

  function setCanvasSize() {
    var pageWidth = document.documentElement.clientWidth;
    var pageHeight = document.documentElement.clientHeight;
    canvas.width = pageWidth;
    canvas.height = pageHeight;
  }
}
//画圆
function drwaCicle(x, y, radius) {
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.fill();
}


//画线
function drawLine(x1, y1, x2, y2) {
  context.beginPath();
  context.lineWidth = 3;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}

var eraserEnabled = false;
pen.onclick = function () {
  eraserEnabled = false;
  pen.classList.add('active');
  eraser.classList.remove('active');
}
eraser.onclick = function () {
  eraserEnabled = true;
  eraser.classList.add('active');
  pen.classList.remove('active');
}
//设置 填充色和描边色 还有设置当前值的时候将其余的两种颜色的擦老实说List删除
red.onclick = function () {
  context.fillStyle = 'red';
  context.strokeStyle = 'red';
  red.classList.add('active');
  green.classList.remove('active');
  blue.classList.remove('active');
}
//设置 填充色和描边色 还有设置当前值的时候将其余的两种颜色的擦老实说List删除
green.onclick = function () {
  context.fillStyle = 'green';
  context.strokeStyle = 'green';
  green.classList.add('active');
  red.classList.remove('active');
  blue.classList.remove('active');
}
//设置 填充色和描边色 还有设置当前值的时候将其余的两种颜色的擦老实说List删除
blue.onclick = function () {
  context.fillStyle = 'blue';
  context.strokeStyle = 'blue';
  blue.classList.add('active');
  red.classList.remove('active');
  green.classList.remove('active');
}