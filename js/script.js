
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  document.addEventListener('DOMContentLoaded', function() {
    // When the event DOMContentLoaded occurs, it is safe to access the DOM
  
    // When the user scrolls the page, execute myFunction 
    window.addEventListener('scroll', myFunctiondos);
  // window.onscroll = function() {myFunctiondos()};

var navbar = document.getElementById("#navbar");
var sticky = navbar.offsetTop;


function myFunctiondos() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
  })