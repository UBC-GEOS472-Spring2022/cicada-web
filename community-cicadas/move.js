AFRAME.registercomponent('beginanimation', {
  
  init: function () {
    var view = document.getElementById("bugs");
    this.el.addEventListener('click', function () {
      view.emit("startAnimation");
    });
  }
});
