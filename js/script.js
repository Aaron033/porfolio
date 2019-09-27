
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  

  $(function(){
  
    createSticky($("#myTopnav"));
  
  });
  console.log(window.innerWidth)
  function createSticky(sticky) {
    
    if ((typeof sticky !== "undefined") && (window.innerWidth > 601)) {
  
      var	pos = sticky.offset().top,
          win = $(window);
        
      win.on("scroll", function() {
          win.scrollTop() >= pos ? sticky.addClass("fixed") : sticky.removeClass("fixed");      
      });			
    }
  }
  