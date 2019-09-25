
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }



  window.onscroll = function() {myFunctiondos()};

var navbar = document.querySelector("#navbar");
var Home = navbar.offsetTop;


function myFunctiondos() {
  if (window.pageYOffset >= Home) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}