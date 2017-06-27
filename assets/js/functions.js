//$( document ).ready(function() {

  //
  //slide-animation();
//});
/*
$(window).load(function () {
var fixmeTop = $('.work-close').offset().top;       // get initial position of the element

var fixNavTop = $('.nav').offset().top;  

$(window).scroll(function() {                  // assign scroll event listener

    var currentScroll = $(window).scrollTop(); // get current position

    if (currentScroll >= fixmeTop) {           // apply position: fixed if you
        $('.work-close').css({                      // scroll to that element or below it
            position: 'fixed',
            top: '10px',
            left: '5px'
        });
    } else {                                   // apply position: static
        $('.work-close').css({                      // if you scroll above it
            position: 'static'  
        });
    }
    


});
}); */
$(function()
{
  slideAnimation();
  $('.mech-info').hide();
  $('.synth-info').hide();
  $('.tilt-info').hide();
  $('.other-info').hide();
    $('.work-close').hide(); 
    $('.hippo-info').hide();
  
  $("header h1").fitText(1.2, { minFontSize: '20px', maxFontSize: '72px' });
  
});

function slideAnimation()
{
    $('#mech-thumb').click(function(){
    $('.project-container').css('margin-left', '0');
    $('.main-project-container').css('margin-left', '0');
    $('#mech-thumb').css('margin', '2.5%');
    $('#mech-thumb').css('width', '95%');
    $('.work-close').show(500);
    $('.thumbnail').css('padding-top', '30%');
    $('.thumbnail-large').css('padding-top', '30%');
    
    $('#synth-thumb').css('width', '0%');
    $('#tilt-thumb').css('width', '0%');
    $('#hippo-thumb').css('width', '0%');
    $('#other-thumb').css('width', '0%');
    $('.mech-info').show();
  });
  
  
  $('#synth-thumb').click(function(){
    $('.project-container').css('margin-left', '0');
    $('.main-project-container').css('margin-left', '0');
    $('#synth-thumb').css('margin', '2.5%');
    $('#synth-thumb').css('width', '95%');
    $('.work-close').show(500);
    $('.thumbnail').css('padding-top', '30%');
    $('.thumbnail-large').css('padding-top', '30%');
    $('#mech-thumb').css('width', '0%');
    $('#tilt-thumb').css('width', '0%');
    $('#hippo-thumb').css('width', '0%');
    $('#other-thumb').css('width', '0%');
    $('.synth-info').show();
  });
  
  $('#tilt-thumb').click(function(){
    $('.project-container').css('margin-left', '0');
    $('.main-project-container').css('margin-left', '0');
    $('#tilt-thumb').css('margin', '2.5%');
    $('#tilt-thumb').css('width', '95%');
    $('.work-close').show(500);
    $('.thumbnail').css('padding-top', '30%');
    $('.thumbnail-large').css('padding-top', '30%');
    $('#synth-thumb').css('width', '0%');
    $('#mech-thumb').css('width', '0%');
    $('#hippo-thumb').css('width', '0%');
    $('#other-thumb').css('width', '0%');
    $('.tilt-info').show();
    
  });
  
  
    $('#hippo-thumb').click(function(){
    $('.project-container').css('margin-left', '0');
    $('.main-project-container').css('margin-left', '0');
    $('#hippo-thumb').css('margin', '2.5%');
    $('#hippo-thumb').css('width', '95%');
    $('.work-close').show(500);
    $('.thumbnail').css('padding-top', '30%');
    $('.thumbnail-large').css('padding-top', '30%');
    
    $('#mech-thumb').css('width', '0%');
    $('#synth-thumb').css('width', '0%');
    $('#tilt-thumb').css('width', '0%');
    $('#other-thumb').css('width', '0%');
    $('.hippo-info').show();
  });
  
    $('#other-thumb').click(function(){
    $('.project-container').css('margin-left', '0');
    $('.main-project-container').css('margin-left', '0');
    $('#other-thumb').css('margin', '2.5%');
    $('#other-thumb').css('width', '95%');
    $('.work-close').show(500);
    $('.thumbnail').css('padding-top', '30%');
    $('.thumbnail-large').css('padding-top', '30%');
    
    $('#mech-thumb').css('width', '0%');
    $('#synth-thumb').css('width', '0%');
    $('#tilt-thumb').css('width', '0%');
    $('#hippo-thumb').css('width', '0%');
    $('.other-info').show();
  });
  
  
  
  $('.work-close').click(function() {
    $('#mech-thumb').css('margin', '0');
    $('#synth-thumb').css('margin', '0');
    $('#tilt-thumb').css('margin', '0');
    $('#hippo-thumb').css('margin', '0');
    $('#other-thumb').css('margin', '0');
    
    $('.project-container').css('margin-top', '2.5%');
    $('.project-container').css('margin-left', '2.5%');
    $('.main-project-container').css('margin-top', '2.5%');
    $('.main-project-container').css('margin-left', '2.5%');
    
    $('.thumbnail').css('padding-top', '100%'); 
    $('.thumbnail-large').css('padding-top', '63%');
    
    $('#synth-thumb').css('width', '47%');
    $('#mech-thumb').css('width', '47%');
    $('#tilt-thumb').css('width', '30%');
    $('#other-thumb').css('width', '30%');  
    $('#hippo-thumb').css('width', '30%');  
    
    $('.mech-info').hide();
    $('.synth-info').hide();
    $('.tilt-info').hide();
    $('.other-info').hide();
    $('.hippo-info').hide();
    $('.work-close').hide(500);  
    
    //scroll 
    $('html, body').animate({
        scrollTop: $('#work-div').offset().top }, 600);
    
    $("iframe").each(function() { 
      var src= $(this).attr('src');
      $(this).attr('src',src);  
    });
    
  });
  
  $('a[href^=#]').click(function(){
    event.preventDefault();
    var target = $(this).attr('href');
    if (target == '#')
      $('html, body').animate({scrollTop : 0}, 600);
    else
      $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 600);
 });
  
  
}




/*global jQuery */
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );