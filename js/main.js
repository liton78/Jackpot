$(document).ready(function(){
    'use strict'

    // spin section tilt image js 

    $('.js-tilt').tilt();


    $(window).on('scroll', function(){
        
    var scrolling = $(this).scrollTop();

        // nav fixed scroll

    if(scrolling > 100){
        $('.navbar').addClass('nav-bg');
    }else{
        $('.navbar').removeClass('nav-bg');
    };

    });

    

    // question-list
    $('.question-list ol .click1 i').on('click',function(){
        $('.question-list ol .click1 p').slideToggle();
        $('.click2 p, .click3 p, .click4 p').hide();
        $('.question-list ol .click1').toggleClass('border-show',1000);
        $('.click2, .click3, .click4').removeClass('border-show',1000);
    });

    $('.question-list ol .click2 i').on('click',function(){
        $('.question-list ol .click2 p').slideToggle();
        $('.click1 p, .click3 p, .click4 p').hide();
        $('.question-list ol .click2').toggleClass('border-show',1000);
        $('.click1, .click3, .click4').removeClass('border-show',1000);
    });

    $('.question-list ol .click3 i').on('click',function(){
        $('.question-list ol .click3 p').slideToggle();
        $('.click1 p, .click2 p, .click4 p').hide();
        $('.question-list ol .click3').toggleClass('border-show',1000);
        $('.click1, .click2, .click4').removeClass('border-show',1000);
    });

    $('.question-list ol .click4 i').on('click',function(){
        $('.question-list ol .click4 p').slideToggle();
        $('.click1 p, .click2 p, .click3 p').hide();
        $('.question-list ol .click4').toggleClass('border-show',1000);
        $('.click1, .click2, .click3').removeClass('border-show',1000);
    });

    

    $('#remaining-time').countdown('2022/12/29', function(event) {
        $(this).html(event.strftime(
            // '<div>%w weeks</div>'
            // +'<div>%d days</div>'
            'Time Remaining:'
            +'<div>%H Hour</div>'
            +'<div>%M Min</div>'
            +'<div>%S Sec</div>'));
    });


    // $('#simply-countdown').simplyCountdown({
    //     year: 2022,
    //     month: 12,
    //     day: 30,
    // });



    // $(document).ready(function(){
        // $(".scroll-list").scroll(function(){
        // });
        // });

    $(".mCustomScrollbar").mCustomScrollbar({
        axis:"y",
        scrollbarPosition: "inside"
    });







});