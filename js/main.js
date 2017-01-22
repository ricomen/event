(function() {
var myBox = document.querySelector(".event");
var myBoxHeight = myBox.offsetHeight;

function boxCenter() {
  if (((document.documentElement.clientHeight - myBox.offsetHeight)/2) > 0) {
  myBox.style.marginTop = ((document.documentElement.clientHeight - myBox.offsetHeight)/2) + "px";
  }
}

window.onload = boxCenter;
window.onresize = boxCenter;

})();