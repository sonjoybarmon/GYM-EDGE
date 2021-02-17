/*search icon click function*/ 
$(document).ready(function(){
    $("#click_s").click(function(){
      $(".search_box").toggle(300);
    });
});
/*card click funtion*/
$(document).ready(function(){
    $("#card_hover").click(function(){
      $(".cart_text").slideToggle("slow");
    });
  });
/*swiper theme funtion*/
var swiper = new Swiper('.swiper-container');
var swiper = new Swiper('.swiper-container', {
  autoplay: {
  delay: 2000,
  disableOnInteraction: false,
  }, 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  spaceBetween: 30,
  effect: 'fade', 
});
/*owl-corousel themes owl-1*/
$(document).ready(function(){
  $("#owl-one").owlCarousel({
       autoplay:true,
       autoplayTimeout:6000,
       smartSpeed:3000,
      rtl:true,
      loop:true,
      margin:20,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:3
          }
      }
  });
  });
/*owl-corousel themes owl-2*/
$(document).ready(function(){
  $("#owl-two").owlCarousel({
      //  autoplay:true,
      //  autoplayTimeout:6000,
       smartSpeed:1000,
      rtl:true,
      loop:true,
      margin:20,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:2
          }
      }
  });
  });
  /*owl-corousel themes owl-3*/
$(document).ready(function(){
  $("#owl-three").owlCarousel({
      //  autoplay:true,
      //  autoplayTimeout:6000,
      smartSpeed:1000,
      rtl:true,
      loop:true,
      margin:20,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:4
          },
          1000:{
              items:4
          }
      }
  });
  });
    /*owl-corousel themes owl-4*/
$(document).ready(function(){
  $("#owl-four").owlCarousel({
      //  autoplay:true,
      //  autoplayTimeout:6000,
      smartSpeed:1000,
      rtl:true,
      loop:true,
      margin:20,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:4
          },
          1000:{
              items:4
          }
      }
  });
  });
      /*owl-corousel themes owl-5*/
$(document).ready(function(){
    $("#owl-five").owlCarousel({
         autoplay:true,
         autoplayTimeout:3000,
        smartSpeed:1000,
        rtl:true,
        loop:true,
        margin:40,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:4
            },
            1000:{
                items:4
            }
        }
    });
    });

/* sticky menu js  */
$(".menu").sticky({topSpacing:0});

/*mixitop themes plugin */
var container = document.querySelector('.filter_img');
var inputFil = document.querySelector('.input_filter');
var mixer = mixitup(container,{
});
var mixer = mixitup(inputFil,{
});


/*scroll to top button */
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 110) {
            $('#scroll_btn').fadeIn();
        }else{
            $('#scroll_btn').fadeOut();
        }
    });
    $('#scroll_btn').click(function(){
        $('html,boby').animate({scrollTop:0},2000);
    });
});
