
// (function() {
//     let burger = document.querySelector('.burger'); 
//     let nav = document.querySelector('#' +burger.dataset.target); 
  
//     burger.addEventListener('click', function(){
//       burger.classList.toggle('is-active'); 
//       nav.classList.toggle('is-active');
//     });
//   })();

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
