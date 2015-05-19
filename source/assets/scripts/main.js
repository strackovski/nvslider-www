$(document).ready(function () {
    $('.slider').nvslider({
        showItems: 2,
        slideFor: 2,
        slideshow: true,
        timer: 2000
    });

    if ($(window).width() < 767) {
        $('.latest-slider').nvslider({
            showItems: 1,
            slideFor: 1,
            slideshow: true,
            timer: 6000
        });

        $('.news-slider').nvslider({
            showItems: 1,
            slideFor: 1,
            slideshow: true,
            timer: 6000
        });
    }
});

$(window).resize(function(){
    if ($(window).width() < 767) {
        $('.latest-slider').nvslider({
            showItems: 1,
            slideFor: 1,
            slideshow: true,
            timer: 6000
        });

        $('.news-slider').nvslider({
            showItems: 1,
            slideFor: 1,
            slideshow: true,
            timer: 6000
        });
    } else {
        $('.latest-slider').nvslider('destroy');
        $('.news-slider').nvslider('destroy');
    }
});