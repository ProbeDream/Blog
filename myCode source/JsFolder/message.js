var APP_ID = "D30iDj3vhwJ1FyNftNNhNESs-gzGzoHsz";
var APP_KEY = "DOscwT1elqm8H2krUb9F1RcJ";

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
console.log("运行到这里是没有问题的!over!");

//测试代码: 创建TestObject对象 并且在表中创建数据 如果说保存数据的话 成功的话 就会alert('helloWorld!')
var TestObject = AV.Object.extend("TestObject");
var testObject = new TestObject();
testObject
  .save({
    words: "Hello World!"
  })
  .then(function(object) {
    alert("LeanCloud Rocks!");
  });
