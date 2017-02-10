$(document).ready(function(){
  $(window).on('beforeunload', function() {
    $(window).scrollTop(0);
  });
  var target = $(".container").offset().top;
  var interval = setInterval(function() {
    if ($(window).scrollTop() >= target) {
      $('#navibar').addClass("navbelow");
      $('li a').addClass("navitembelow");
      $('#logo').addClass("logonew");
      clearInterval(interval);
    }
  }, 250);

  var x;//corresponding img    
  $('li[id^="li"]').mouseenter(function(){
    x= $(this).attr("title");    
    var soon=$('#'+x).attr("title");
    var current=4;  
    var diff=current-soon;
    var imagewidth=$('#'+x).width();
    var move=-1100+(imagewidth*diff);//(parseInt($(".photobanner").css("margin-left").replace("px", "")))
    $(".photobanner").animate({"margin-left":move},{ "duration": 100, "easing": "linear" });
    $(this).addClass("activeli");
    $('#'+x).animate({left: "-=10px",height: "+=20px",width: "+=20px",top: "-=10px"},"400000000");
    $('#'+x).addClass("activelimg");
  });

  $('li[id^="li"]').mouseleave(function(){
    x= $(this).attr("title");
    $('#'+x).animate({left: '+=10px',height: '-=20px',width: '-=20px',top: '+=10px'},"400000000");
    $(this).removeClass("activeli");
    $('#'+x).removeClass("activelimg"); 
  });
});