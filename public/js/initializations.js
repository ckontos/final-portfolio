$(document).ready(function() {
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.collapsible').collapsible();
    $(".button-collapse").sideNav();
    $('.modal').modal();

    // start carrousel
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: false
    });

    // move next carousel
    $('.moveNextCarousel').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.carousel').carousel('next');
    });

    // move prev carousel
    $('.movePrevCarousel').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.carousel').carousel('prev');
    });

    $("#backToTop").on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 2500);
    });
});

var screenWidth = window.innerWidth;
$(window).scroll(function() {

    if (screenWidth <= 600 && screenWidth > 320) {

        var fromTopPxFirstBgChange = 2295;
        var scrolledFromTop = $(window).scrollTop();

        if (scrolledFromTop > fromTopPxFirstBgChange) {
            $('body').addClass('secondBg');
        }
        else {
            $('body').removeClass('secondBg');
        }
    }
    else if (screenWidth <= 320) {
        var scrollBgChange = 2400;
        var scrolledFromtop = $(window).scrollTop();

        if (scrolledFromtop > scrollBgChange) {
            $('body').addClass('secondBg');
        }
        else {
            $('body').removeClass('secondBg');
        }
    }
});
