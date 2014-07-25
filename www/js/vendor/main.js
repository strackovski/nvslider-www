/* Vladimir Strackovski 2014, info@strackovski.net */
/*jslint browser:true*/
/*global $, jQuery*/
/*global console*/
$(document).ready(function () {
   // $('body,html').animate({scrollTop: 0}, {duration: 700});

    'use strict';

    var win_height = 0;

    $('.nav ul li a').each(function () {
        $(this).parent('li').removeClass('active-link');
    });

    //if home page
    if ($('div.start').length > 0) {
        //set active link
        $('.nav ul li a.btn-home').parent('li').addClass('active-link');

        //hide footer
        $('.page-footer').hide();

        //call nvSlider
        $('.hero ul').nvslider({orientation: 'landscape', showItems: 1, slideFor: 1, rows: 1, containerCss: {background: 'none', border: 'none'}, leftArrowClass: 'slider-arrow', rightArrowClass: 'slider-arrow', height: '300px' });

        //call nvSlider
        $('.introduction-list ul').nvslider({height: '200px'});

        $('.sampleList ul').nvslider({orientation: 'portrait', rows:2});
        //click handler for 'show me' button
        $('.start').on('click', function (e) {
            e.preventDefault();
            win_height = $(window).height();
            $('body, html').animate({scrollTop: win_height}, {duration: 700});
        });

        $('.back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({scrollTop: 0}, 'slow');
        });
    }

    //if download page
    if ($('h2.dl-title').length > 0) {
        //set active link in navigation
        $('.nav ul li a.btn-dl').parent('li').addClass('active-link');
    }

    //if documentation page
    if ($('h2.docs-title').length > 0) {

        //set active link
        $('.nav ul li a.btn-docs').parent('li').addClass('active-link');

        //call nvSlider
        $('.gallery-list ul').nvslider({slideFor: 2, theme: 'gallery', height: '160px'});
        $('.sl1-ul ul').nvslider();
        $('.sl2-ul ul').nvslider({height: '200px'});
        $('.sl3-ul ul').nvslider({orientation: 'portrait', rows: 2, slideFor: 2, showItems: 4, height: '200px'});
        $('.sl4-ul ul').nvslider({height: '200px'});
        $('.sl5-ul ul').nvslider({});

        //manage switching between quick and long guide (top navigation)
        var activeGuide = 'quick guide';
        $('ul.documentation li a').on('click', function (e) {
            $(this).parent('li').siblings().removeClass('active-link');
            $(this).parent('li').addClass('active-link');
            e.preventDefault();
            var target = $(this).attr('class');
            if (!(activeGuide === 'quick guide' && target === 'btn-quick-guide') &&
                !(activeGuide === 'long guide' && target === 'btn-long-guide')) {
                if (target === 'btn-quick-guide') {
                    $('.docs-page> div[class*="guide"]:visible').fadeOut(100, function () {
                        $('.quick-guide').fadeIn(200);
                        activeGuide = 'quick guide';
                    });
                }
                if (target === 'btn-long-guide') {
                    $('.docs-page> div[class*="guide"]:visible').fadeOut(100, function () {
                        $('.long-guide').fadeIn(200);
                        activeGuide = 'long-guide';
                    });
                }
            }
        });

        //manage guide navigation
        var index = 0,
            indexPlus = 0,
            string = 0;
        $('.detailed-guide-nav ul li a').on('click', function (e) {
            e.preventDefault();
            if ($(this).attr('class') === 'back-to-top') {
                $('html, body').animate({scrollTop: 0}, 'slow');
            } else {
                index = $(this).parent('li').index();
                indexPlus = index + 1;
                string = '.target-' + indexPlus;
                $('html, body').animate({scrollTop: $(string).offset().top - 80}, 'slow');
            }
        });

        //click handler for an inline link in documentation
        $('.style-part').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({scrollTop: $('.target-6').offset().top - 80}, 'slow');
        });

        //manage 'explanation bubbles'
        var ex,
            type = $('.popup .type-declaration'),
            pre = $('.popup .usage-declaration pre'),
            details = $('.popup .details-declaration p');

        $('.explanation').hover(function () {
            $(this).stop(true, false);
            ex = $(this).parents('li').index();
            switch (ex) {
            case 0:
                type.html("type: number<br>default :3<br>possible options: any number");
                pre.html("$('ul').nvSlider({itemsShow:6});");
                details.html('Sets the number of items to show in a row.');
                break;
            case 1:
                type.html("type: string<br>default: 'landscape'<br>possible options: 'landscape', 'portrait'");
                pre.html("$('ul').nvSlider({orientation:'portrait'});");
                details.html("Sets the direction of sliding - horizontal/vertical.<br>In landscape mode there can only be 1 row.");
                break;
            case 2:
                type.html("type: number<br>default: 1<br>possible options: any number");
                pre.html("$('ul').nvSlider({rows:2});");
                details.html("Sets the number of rows of items to show.<br>Works only in 'portrait' mode.");
                break;
            case 3:
                type.html("type: number<br>default: 1<br>possible options: any number");
                pre.html("$('ul').nvSlider({slideFor: 3});");
                details.html("Sets how many items to slide forward on arrow click.<br>Cannot be more than the number of items shown.");
                break;
            case 4:
                type.html("type: object<br>default: {background:'#d2d2d2'}<br>possible options: any css style declaration");
                pre.html("$('ul').nvSlider(containerCss:{border:'1px solid blue'});");
                details.html("Sets the style of the (most outer) container.");
                break;
            case 5:
                type.html("type: object<br>default: /<br>possible options: any css style declaration");
                pre.html("$('ul').nvSlider(navCss:{background:'#000', color:'#fff'});");
                details.html("Sets the style of the navigation arrows.<br>" +
                    "When using a theme there is a style defined that you override by setting your style.");
                break;
            case 6:
                type.html("type: object<br>default: /<br>possible options: any css style declaration");
                pre.html("$('ul').nvSlider(navHover:{background:'#333', color:'#fff'});");
                details.html("Sets the style of the navigation arrows when a user hovers over them.");
                break;
            case 7:
                type.html("type: string<br>default: 'default'<br>possible options: 'default', 'gallery'");
                pre.html("$('ul').nvSlider({theme:'default'});");
                details.html("Sets the style of the grid.<br>The 'default' theme will take effect even if you didn't" +
                    " set it explicitly, provided that your content is wrapped with span elements.<br>" +
                    "If you want to disable a theme, pass an empty string: theme:' '");
                break;
            case 8:
                type.html("type: string<br>default: '150px'<br>possible options: any pixel value");
                pre.html("$('ul').nvSlider({height:'200px'});");
                details.html("Sets the height of slider items.");
                break;
            }
            $('.popup').fadeIn(100);

        }, function () {
            $(this).stop(true, false);
            $('.popup').fadeOut(100);
        });
    }

    //if showcase page
    if ($('.sc-title').length > 0) {
        //set active link in navigation
        $('.nav ul li a.btn-sc').parent('li').addClass('active-link');

        //call slider
        $('.example0 ul').nvslider({containerCss: {border: '2px solid #eee', borderRadius: '20px'}, showItems: 3, height: '150px'});
        $('.example1 ul').nvslider({slideFor: 2, showItems: 4, containerCss: {border: '1px dashed #999'}, navCss: {background: 'silver', color: '#fff', opacity: 0.7}, height: '150px'});
        $('.example2 ul').nvslider({orientation: 'portrait', showItems: 2, slideFor: 2, rows: 2, containerCss: {border: '2px solid silver', borderRadius: '5px'}});

        //slider fake links for showcasing
        $('.fake-link').on('click', function (e) {
            e.preventDefault();
        });
    }
});