
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(function() {
      $('.hero-slides').vegas({
          slides: [
              
              { src: 'https://www.cambiatufisico.com/wp-content/uploads/batidos-de-suplementos.jpg' },
              { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyMPyWkMciEsoM58EqT_LwVqCfDsDegeicZg&s' },
            { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUre6-zYF-IsKc7W1S8XUxHLUX-J2f0JjTw&s' }
          ],
          timer: false,
          animation: 'kenburns',
      });
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height() + 60;
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);


