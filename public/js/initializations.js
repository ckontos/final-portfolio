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

    // Wrap every letter in a span
    $('.ml11 .letters').each(function() {
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });

    anime.timeline({ loop: true })
        .add({
            targets: '.ml11 .line',
            scaleY: [0, 1],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 700
        })
        .add({
            targets: '.ml11 .line',
            translateX: [0, $(".ml11 .letters").width()],
            easing: "easeOutExpo",
            duration: 700,
            delay: 500
        }).add({
            targets: '.ml11 .letter',
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 600,
            offset: '-=775',
            delay: function(el, i) {
                return 34 * (i + 1)
            }
        }).add({
            targets: '.ml11',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
});
