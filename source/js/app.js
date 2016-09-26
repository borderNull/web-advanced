'use strict';

//-------------------------Welcome Flip Card Function-----------//
 $(document).ready(function () {

//   $(function() {
//     var imgs = [],
//         percents = 1;

//     $('*').each(function() {
//       var $this = $(this),
//           img = $this.is('img'),
//           background = $this.css('background-image');

//       if (background != 'none') {
//         var path = background.replace('url(','').replace(')','');
//         if (path[0] === '"' || path[0] === '\'') {
//           path = path.substr(1);
//         }
//         if (path[path.length-1] === '"' || path[0] === '\'') {
//           path = path.substring(0,path.length-1);
//         }
//         if (path) {
//           imgs.push(path);
//         }
//       }

//       if (img) {
//         var path = $this.attr('src');
//         if (path) {
//           imgs.push(path);
//         }
//       }
//     });
//     for (var i = 0; i < imgs.length; i++) {
//       var image = $('<img>', {
//         attr: {
//           src: imgs[i]
//         }
//       });
//       image.load(function() {
//         setPercents(imgs.length, percents);
//         percents++;
//       });
//     }

//     function setPercents(total, current) {
//       var percent = Math.ceil(current / total * 100);
//       $('.preloader__text').text(percent + '%');
//       if (percent >= 100) {
//         $('.wrapper').css('display', 'block');
//         $('.inner-wrapper').css('display', 'block');
//         $('.preloader__section').css('display', 'none');
//         setTimeout(function() {
//           $('.flipper').removeClass('flipper--unload');
//         }, 400);
//       }
//     }

// });
function preloader() {
    var duration = 1000;
    var st = new Date().getTime();

    var $circle__o = $(".circle__outer"),
      $circle__c = $(".circle__center"),
      $circle__i = $(".circle__inner");

    var c_o = Math.PI*($circle__o.attr("r") * 2),
      c_c = Math.PI*($circle__c.attr("r") * 2),
      c_i = Math.PI*($circle__i.attr("r") * 2);


    var interval = setInterval(function() {
      var diff = Math.round(new Date().getTime() - st),
        val = Math.round(diff / duration * 100);

      val = val > 100 ? 100 : val;

      var pct_o = ((100-val)/100)*c_o,
        pct_c = ((100-val)/100)*c_c,
        pct_i = ((100-val)/100)*c_i;

      $circle__o.css({strokeDashoffset: pct_o});
      $circle__c.css({strokeDashoffset: pct_c});
      $circle__i.css({strokeDashoffset: pct_i});

      $(".preloader__text").text(val);
      $(".preloader__round").css({opacity:1});

      if (diff >= duration) {
        clearInterval(interval);

        if($(".flip-container").length){
          $(".preloader__section").delay(1000).fadeOut(700, function(){
            $(".preloader__container").remove();
            $(".flip-container").addClass("loaded");
          });
        } else {
          $(".preloader__section").delay(1000).fadeOut(700, function(){
            $(".preloader__container").remove();
          });
        }
      }
    }, 200);
  }
  preloader();


var scene = document.getElementById('scene');
 if(scene) {
 var parallax = new Parallax(scene);
   };  



$(document).on('click', function (e) {
  if($(e.target).is('.button')) { 
         $('#fl').toggleClass('flip');
         $('.button').css({'opacity':0,'visibility':'hidden'});
       }
   if($(e.target).is('#back')) {
          $('#fl').removeClass('flip');
          $('.button').css({'opacity':1,'visibility':'visible'});
      }
   if($(e.target).is('#exit')) {
          $('#fl').removeClass('flip');
          $('.button').css({'opacity':1,'visibility':'visible'});
      }      
});


$('#nav__btn').on('click', function (e) {

if ($('.menu_btn').hasClass('active')) {

      $(this).removeClass('active');
   } 
else { 
       $(this).toggleClass('active');    
    }

 });


    $(".nav__item").each(function(index) {

     $(this).css("transition-delay", 0.3+0.1*index + "s");

     });



    $('.swipe__btn').on('click', function(){

    if($('.aside').hasClass('active')) {
       $('.aside').removeClass('active');
      } else { $('.aside').addClass('active')}


      });


//       $('.aside__item-link').on('click', function(e) {
//           e.preventDefault();

//           showArticle($(this).attr('href'),true);
//       });



//    showArticle(window.location.hash,false);
 

//  function showArticle(article,isAnimate) {
//         var 
//             direction = article.replace(/#/,''),
//             reqArticle = $('.article__container').filter('[data-type="'+ direction + '"]'),
//             reqArticlePos = reqArticle.offset().top;
          
//           if(isAnimate) {
//             $('body, html').animate({ scrollTop: reqArticlePos},1000);
//           }
//           else {
//             $('body, html').scrollTop(reqArticlePos);
//           }

//       };

//        function spyList() {

// $('.article__container').each(function(){
     
//      var $this = $(this),
//          topEdge = $this.offset().top,
//          bottomEdge = topEdge + $this.height(),
//          wScroll = $(window).scrollTop();

//          if(topEdge   < wScroll && bottomEdge > wScroll ) {
//           var 
//             currentId = $this.data('type');
//             reqLink = $('.aside__item-link').filter('[href="#' + currentId + '"]');
//             reqLink.closest('.aside__list-item').addClass('active').siblings().removeClass('active');

//             window.location.hash = currentId;
//          };
//    }); // -> scroll_end;
//   };

//--------------------------SLIDER----------------------------------//
   (function() {

    var downBtn = $("#downBtn");
    var upBtn = $("#upBtn");
    var slide = $("#slide");
    var description = $("#slideDescr");
    var counterDown = 0;
    var counterUp = 2;
    var counterSlide = 1;
 
    var itemsDown = downBtn.find('.thumbnail__item'),
        itemsUp = upBtn.find('.thumbnail__item'),
        itemsSlide = slide.find('.slider__current-item'),
        itemsDescr = description.find('.slider__description-item');
    
    downBtn.on('click', function() {
    
      counterDown--;
      counterUp--;
      counterSlide--;
  
      function toggleSlide() {
        
        activeItemSlide.fadeOut(700);
        reqItemSlide.fadeIn(700);
        activeItemSlide.removeClass('slider__current-item--active').css('opacity', '0');
        reqItemSlide.addClass('slider__current-item--active');
        reqItemDescr.addClass('slider__description-item--active');
        activeItemDescr.removeClass('slider__description-item--active');
      }
  
      var activeItemDown = downBtn.find('.thumbnail__item--active'),
          activeItemUp = upBtn.find('.thumbnail__item--active'),
          activeItemSlide = slide.find('.slider__current-item--active'),
          activeItemDescr = description.find('.slider__description-item--active');

      if (counterDown < 0) counterDown = itemsDown.length-1;
      if (counterUp < 0) counterUp = itemsUp.length-1;
      if (counterSlide < 0) counterSlide = itemsUp.length-1;

      var reqItemDown = itemsDown.eq(counterDown),
          reqItemUp = itemsUp.eq(counterUp),
          reqItemSlide = itemsSlide.eq(counterSlide),
          reqItemDescr = itemsDescr.eq(counterSlide);
      activeItemDown.animate({
        'top': '100%'
      }, 300);
      activeItemUp.animate({
        'top' : '-100%'
      }, 300);
      toggleSlide();
      reqItemDown.animate({
        'top' : '0'
      }, 300, function() {
        activeItemDown.removeClass('thumbnail__item--active').css('top', '-100%');
        reqItemDown.addClass('thumbnail__item--active');
      });
      reqItemUp.animate({
        'top' : '0'
      }, 300, function() {
        activeItemUp.removeClass('thumbnail__item--active').css('top', '100%');
        reqItemUp.addClass('thumbnail__item--active');
      });
    });
    upBtn.on('click', function() {
      counterDown++;
      counterUp++;
      counterSlide++;
      function toggleSlide() {
        activeItemSlide.fadeOut(700);
        reqItemSlide.fadeIn(700);
        activeItemSlide.removeClass('slider__current-item--active').css('opacity', '0');
        reqItemSlide.addClass('slider__current-item--active');
        reqItemDescr.addClass('slider__description-item--active');
        activeItemDescr.removeClass('slider__description-item--active');
      }
      var activeItemDown = downBtn.find('.thumbnail__item--active'),
          activeItemUp = upBtn.find('.thumbnail__item--active'),
          activeItemSlide = slide.find('.slider__current-item--active'),
          activeItemDescr = description.find('.slider__description-item--active');
      if (counterUp >= itemsUp.length) {
        counterUp = 0;
      }
      if (counterDown >= itemsDown.length) counterDown = 0;
      if (counterSlide >= itemsDown.length) counterSlide = 0;
      var reqItemDown = itemsDown.eq(counterDown),
          reqItemUp = itemsUp.eq(counterUp),
          reqItemSlide = itemsSlide.eq(counterSlide),
          reqItemDescr = itemsDescr.eq(counterSlide);
      activeItemDown.animate({
        'top': '100%'
      }, 300);
      activeItemUp.animate({
        'top' : '-100%'
      }, 300);

      toggleSlide();
  
      reqItemDown.animate({
        'top' : '0'
      }, 300, function() {
        activeItemDown.removeClass('thumbnail__item--active').css('top', '-100%');
        reqItemDown.addClass('thumbnail__item--active');
      });
      reqItemUp.animate({
        'top' : '0'
      }, 300, function() {
        activeItemUp.removeClass('thumbnail__item--active').css('top', '100%');
        reqItemUp.addClass('thumbnail__item--active');
      });
    });
  }());
});


$(window).scroll(function(){
  var wScroll = $(window).scrollTop();
  
  
  (function(){
      
    var
      bg = $('.bg__image'),
      sectionText = $('.author__section-img'),
      user = $('.author__section-block');

    slideIt(bg, wScroll / 80);
    slideIt(sectionText, wScroll / 10);
    slideIt(user, wScroll / 3);

    function slideIt(block, strafeAmount) {
      var strafe = -strafeAmount + '%',
        transormString = 'translate3d(0,' + strafe + ',0)';

      block.css({
        'transform' : transormString
      });
    }
  }());

var blog = document.querySelector('.blog-container');
if (blog) {

   (function(){
    var wScroll = $(window).scrollTop(),
        menu = $('.blog-container .aside__list'),
        sidebar = $('.blog-container .wrapper__list'),
        stickyStart = sidebar.offset().top,
        menuClone = sidebar.clone(),
        fixedSidebar = $('.blog-container-fixed .aside');

  if (wScroll >= stickyStart) {

    if (!fixedSidebar.find('.wrapper__list').length) {
      fixedSidebar.append(menuClone);
      menu.hide();
    }


  } else {
    fixedSidebar.find('.wrapper__list').remove();
    menu.show();
  }
}());

};

(function(){
   
    var
      svg = $('.graph__svg'),
      svgPaths = svg.find('.graph__fill'),
      svgPos = svg.offset().top,
      windowMargin = $(window).height() / 3,
      startAnimate = wScroll - svgPos + windowMargin,
      pixelsElapsed = svgPos - wScroll,
      percentsElapsed =  100 - Math.ceil(pixelsElapsed / (svgPos - (svgPos - windowMargin)) * 100),
      percentsDraw = 1200 / 100 * percentsElapsed;


    if (startAnimate >= 0) {

      var drawAmount = percentsDraw;

      if (drawAmount > 0) {
        svgPaths.css({
          'stroke-dashoffset' : drawAmount
        });
      }
    }
  }());


});


//-------------------------- MAP STYLES ----------------------------//

function initMap() {
  var myLatLng = {lat:59.974181, lng:30.321228};
  var styleArray = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#61dac9"
            },
            {
                "visibility": "on"
            },
            {
                "saturation": "0"
            }
        ]
    }
    ]
 
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    scrollwheel: false,
    // Apply the map style array to the map.
    styles: styleArray,
    center: myLatLng,
    zoom: 14
  });
    var image = '../assets/img/map_marker.svg';
   var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    icon: image,
    title: 'Привет я здесь!'
  });
};


