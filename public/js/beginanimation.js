AFRAME.registerComponent('beginanimation',{
  
  init:function(){
  var view = document.getElementById("maggot1"&&"maggot2");
     this.el.addEventListener('click',function(){
         view.emit("startAnimation");
       
     });
  }
});