!function() {
  var view = document.querySelector("#topNavbar");
  var controller = {
    view: null,
    init: function(view) {
      this.view = view;
      this.bindEvents();
      window.addEventListener("scroll", x => {
        if (window.scrollY > 0) {
          this.active.call(this);
        } else {
          this.deactive.call(this);
        }
      });
    },
    bindEvents: function() {
      var view = this.view;
    },
    active: function() {
      this.view.classList.add("sticky");
    },
    deactive: function() {
      this.view.classList.remove("sticky");
    }
  };

  controller.init(view);
}.call();
