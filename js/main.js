(function() {
var myBox = document.querySelector(".event");
var myBoxHeight = myBox.offsetHeight;

function boxCenter() {    
  margTop = (document.documentElement.clientHeight - myBoxHeight)/2;  
  myBox.style.marginTop = margTop + "px";
}

window.onload = boxCenter;
window.onresize = boxCenter;

})();