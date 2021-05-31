$(document).ready(function(){
    $("nav>.menu>.menu1>li").hover(
        function(){
        $(this).find(".menuwrap").stop().slideDown(200);
        },
        function() {
        $(this).find(".menuwrap").stop().slideUp(200);
        }
    );

    $(".menu1-1>li").hover(
        function(){
        $(this).find(".menu3").stop().slideDown(200);
        },
        function() {
        $(this).find(".menu3").stop().slideUp(200);
        }
    );

    $(".login").click(function(){
        $(".loginbox").toggleClass("active")
      })

      $(".toggle-menu").click(function(){
        $(".whole-menu").toggleClass("active")
      })

    // $("nav>.menu>.menu2>li:first-child").hover(
    //     function(){
    //         $(".searchbox").stop().slideDown(),
    //         $(".searchin").stop().slideDown();
    //     },
    //     function() {
    //         $(".searchbox").stop().slideUp(),
    //         $(".searchin").stop().slideUp();
    //     }
    // );

    $(".search").click(function () {
        $(".searchbox").show(),
        $(".searchin").show();
    });

    $(".searchbox-btn").click(function() {
        $(".searchbox").hide(),
        $(".searchin").hide();
    });

        var swiper = new Swiper('.swiper-container', {
          spaceBetween: 0,
          centeredSlides: true,
          slidesPerView: 3,
          slidesPerGroup: 1,
              loop: true,
              loopFillGroupWithBlank: false,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
            1340: {
            slidesPerView: 3,
            },
            1024: {
            slidesPerView: 3,
            },
            768: {
            slidesPerView: 3,
            },
            520: {
            slidesPerView: 2,
            },
            450: {
            slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
              },
        }
        });

});