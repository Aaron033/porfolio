document.addEventListener('DOMContentLoaded', () => {

   // Get all "navbar-burger" elements
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
 
   // Check if there are any navbar burgers
   if ($navbarBurgers.length > 0) {
 
     // Add a click event on each of them
     $navbarBurgers.forEach( el => {
       el.addEventListener('click', () => {
 
         // Get the target from the "data-target" attribute
         const target = el.dataset.target;
         const $target = document.getElementById(target);
 
         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
         el.classList.toggle('is-active');
         $target.classList.toggle('is-active');
 
       });
     });
   }
 
 });

 var slideIndex = 1;
 showDivs(slideIndex);
 
 function plusDivs(n) {
   showDivs(slideIndex += n);
 }
 
 function showDivs(n) {
   var i;
   var x = document.getElementsByClassName("mySlides");
   if (n > x.length) {slideIndex = 1}
   if (n < 1) {slideIndex = x.length}
   for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
   }
   x[slideIndex-1].style.display = "block";  
 }

 
 var slideIndexx = 1;
showSlides(slideIndexx);

function plusSlides(n) {
  showSlides(slideIndexx += n);
}

function currentSlide(n) {
  showSlides(slideIndexx = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndexx = 1}    
  if (n < 1) {slideIndexx = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexx-1].style.display = "block";  
  dots[slideIndexx-1].className += " active";
}