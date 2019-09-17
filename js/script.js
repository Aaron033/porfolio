// src="https://code.jquery.com/jquery-3.4.1.min.js"   integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="   crossorigin="anonymous">

// $(document).ready(function(){
//     $(window).scroll(function(){

//         if($(window).scrollTop()> 400){
//             $('nav').addClass('red'); 

//         }else{
//             $('nav').removeClass('red');
//         }
//     })
// })

// $(function () {
//     $(document).scroll(function () {
//       var $nav = $(".navbar-fixed-top");
//       $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//     });
//   });

$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});