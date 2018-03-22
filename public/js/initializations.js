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

    function setupEvents() {
        if (typeof window.ontouchstart !== 'undefined') {
            view.on('touchstart.carousel', tap);
            view.on('touchmove.carousel', drag);
            view.on('touchend.carousel', release);
        }
        view.on('mousedown.carousel', tap);
        view.on('mousemove.carousel', drag);
        view.on('mouseup.carousel', release);
        view.on('mouseleave.carousel', release);
        view.on('click.carousel', click);
    }

    setupEvents();

});
