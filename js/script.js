
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }





var height = $('.address').height(); 

$(window).scroll(function(){
if($(this).scrollTop() > height){
  $('.nava').addClass('fixed'); 

}else{
  $('.nava').removeClass('fixed');
}
}); 