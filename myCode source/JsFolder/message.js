!function() {
  //视图View
  var view = document.querySelector("section.message");
  
  //数据模型 model
  var model={
    /**
     * fetch:获取数据
     * save:保存数据!
     */
    init: function() {
      var APP_ID = "D30iDj3vhwJ1FyNftNNhNESs-gzGzoHsz";
      var APP_KEY = "DOscwT1elqm8H2krUb9F1RcJ";
      //AV对象初始化
      AV.init({ appId: APP_ID, appKey: APP_KEY });
    },
    fetch:function(){
      var query=new AV.Query('Message');
      return query.find();//Promise对象
    },save:function(name,content){
      var Message=AV.Object.extend('Message');
      var message=new Message();
      //返回一个Promise对象!
      return message.save({
        'name':name,
        'content':content
      })
    }
  }

  //控制器 Controller
  var controller = {
    view: null,
    messageList: null,
    myForm: null,
    model:null,
    init: function(view,model) {
      this.view = view;
      this.model=model;
      this.messageList = view.querySelector("#messageList");
      this.myForm = view.querySelector("#postMessageForm");
      this.model.init();
      this.loadMessages();
      this.bindEvents();
    },
    loadMessages: function() {
      //获取对象 根据对应的对象ID进行获取操作!
      this.model.fetch().then(
        Messages => {
          let array = Messages.map(item => item.attributes);
          array.forEach(item => {
            /**
        创建一个li元素 并且里面的内容就是 item项里面的内容! 
        最后将li标签插入到ol对应的ID MessageList中!
        **/
            let li = document.createElement("li");
            li.innerText = `${item.name}:${item.content}`;
            this.messageList.appendChild(li);
          });
          // 成功获得实例todo就是id为的Todo对象实例
        },
        function(error) {
          // 异常处理
          alert("提交失败!");
          //打印错误堆栈信息!
          console.log(error);
        }
      );
    },
    bindEvents: function() {
      this.myForm.addEventListener("submit", function(e) {
        e.preventDefault();
        this.saveMessage();
      });
    },
    saveMessage: function() {
      let myForm = this.myForm;
      let name = myForm.querySelector("input[name=name]").value;
      let content = myForm.querySelector("input[name=content]").value;
      this.model.save(name,content)
        .then((object)=> {
          //如果说用户在Input输入框中存入成功了的话 就对其进行局部刷新
          //window.location.reload(); 对当前窗口进行重新载入!
          //如果需要做到无刷新添加的话 就需要用到动态内容插入 直接将标签插入到页面当中!
          let li = document.createElement("li");
          li.innerText = `${object.attributes.name}:${object.attributes.content}`;
          this.appendChild(li);
          //内容清空 也就是表单内容为空字符串!
          myForm.querySelector("input[name=content]").value = "";
        });
    }
  };
  controller.init(view,model);
}.call();
