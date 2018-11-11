var canvasDemo = document.getElementById('canvasDemo');
var context = canvasDemo.getContext('2d');
autoCanvasSize(canvasDemo);
listenToMouse(canvasDemo);
function listenToMouse(canvas) {

  var using = false;
  var lastPoint = { x: undefined, y: undefined }
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


//画线
function drawLine(x1, y1, x2, y2) {
  context.beginPath();
  context.lineWidth = 3;
  context.fillStyle = 'black';
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}

var eraserEnabled = false;
eraser.onclick = function () {
  eraserEnabled = true;
  actions.className = 'actions x';
}
brush.onclick = function () {
  eraserEnabled = false;
  actions.className = 'actions';
}
