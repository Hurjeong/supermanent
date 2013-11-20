var el = $("#one");
var menu = $("#nav");
var menuItems = $(".menu > a");
var pos = el.offset().top;
didScroll = false;

$(window).on("scroll", function() {
  didScroll = true;
});


// http://ejohn.org/blog/learning-from-twitter/#postcomment
setInterval(function() {
  if(didScroll) {
    didScroll = false;
      var scrollPos = $(window).scrollTop();
  
  if (scrollPos > (pos - 50)) { //Adjust menu opening
    menu.addClass('stick');
  } 
  else { 
    menu.removeClass('stick');
  }; 

<script>

  $('.inview').each(function(){
  var itemOffset = Math.abs($(this).offset().top);
    if (itemOffset > 0 && itemOffset < scrollPos) {
      var menuElm = $(this).attr('id');
      console.log(menuElm);
      menuItems.removeClass("active");
      $("." + menuElm).addClass("active");
    }
  });     
  }
}, 250);
</script>

/* Performs a smooth page scroll to an anchor on the same page.
http://css-tricks.com/snippets/jquery/smooth-scrolling/ */
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script>

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 500);
            return false;
        }
    }
});


</script>




