$(document).ready(function(){
    /*
      $('li[id^="li"]').hover(function(){
        $(this).toggleClass("activeli");
        var x= $(this).attr("title");
        $('#'+x).toggleClass("activelimg");
        var soon=$('#'+x).attr("title");
        var current=5;  
        var diff=current-soon;
        var imagewidth=300;//$('#'+x).width();
        var move=-1370+(imagewidth*diff);//(parseInt($(".photobanner").css("margin-left").replace("px", "")))
        $(".photobanner").animate({"margin-left":move},{ "duration": Math.abs(100+(diff*50)), "easing": "linear" });
        
      });
*/

      var target = $(".container").offset().top;
      var interval = setInterval(function() {
        if ($(window).scrollTop() >= target) {
          $('#navibar').addClass("navbelow");
          clearInterval(interval);
        }
          }, 250);
    
      var x;//corresponding img
      
      
      $('li[id^="li"]').mouseenter(function(){
        x= $(this).attr("title");    
        var soon=$('#'+x).attr("title");
        var current=5;  
        var diff=current-soon;
        var imagewidth=$('#'+x).width();
        var move=-1410+(imagewidth*diff);//(parseInt($(".photobanner").css("margin-left").replace("px", "")))
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

        
/*
      var e;//this id
      var myTimeout;
      $('li[id^="li"]').mouseenter(function(){  
        e=$(this).attr('id');
        $(this).addClass("hel");
        myTimeout=setTimeout(function(){
        x= $('#'+e).attr("title");    
        $('#'+e).addClass("activeli");
        $('#'+x).animate({left: "-=10px",height: "+=20px",width: "+=20px",top: "-=10px"},"100");
        $('#'+x).addClass("activelimg");
        e=$(this).attr('id');
        }, 100);
    
        });
      var gone=false;
        
      $('li[id^="li"]').mouseleave(function(){
        $(this).removeClass("hel");
      });

       var interval = setInterval(function() {
          if(('li[id^="li"]').width()>=310){
          clearTimeout(myTimeout);
          
        x= $(this).attr("title");
        $('#'+x).animate({left: '+=10px',height: '-=20px',width: '-=20px',top: '+=10px'},"100");
        $(this).removeClass("activeli");
        
        $('#'+x).removeClass("activelimg"); 
        
        }
          clearInterval(interval);
        
          }, 50); 
        
/*
        x= $(this).attr("title");
        if($('#'+x).width()>=310){
          
          
        }
        });
      //if (((isAnimating.attr('id'))!=('#'+e)){
        //alert(this);
      
       // $(this).animate({left: '+=10px',height: '-=20px',width: '-=20px',top: '+=10px'},"700");
      //}
/*
function enteredpart2(var s){
    var x= $('#'+s).attr("title");    
        $(this).addClass("activeli");
        $('#'+s).animate({left: "-=10px",height: "+=20px",width: "+=20px",top: "-=10px"},"700");
        $('#'+s).addClass("activelimg");
}
/*
      function enteredpart2(){
        var x= $(this).attr("title");    
        $(this).addClass("activeli");
        $('#'+x).animate({left: "-=10px",height: "+=20px",width: "+=20px",top: "-=10px"},"700");
        $('#'+x).addClass("activelimg");
      }

    */ /*        
      $('li[id^="li"]').mouseleave(function(){
        var x= $(this).attr("title");
        $('#'+x).animate({left: '+=10px',height: '-=20px',width: '-=20px',top: '+=10px'},"700");
        $(this).removeClass("activeli");
        var x= $(this).attr("title");
        $('#'+x).removeClass("activelimg"); 
        //clearTimeout(myTimeout);
      });   
*/

            
            
            
          


 
  });