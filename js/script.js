
$(function(){

    $('.bk-scroll-icon').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('.bk-categories').offset().top }, 1000);
        e.preventDefault();
    });

});

/*Carousel*/

$(document).ready(function() {

    $("#owl-demo").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds

        items : 3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]

    });

});
