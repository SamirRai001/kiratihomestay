// --------------- function that runs when scroll ---------------
$(window).on('scroll', function () {
    if ($(window).scrollTop() >= 80) {
        $('.navbar').addClass('navbar-slide-down');
        $('.navbar').addClass('navbar-toggle');
        $('.logo-color-animation').removeClass('fill-white');

        $('.navbar-toggler').removeClass('text-white');
        $('.nav-link').removeClass('text-white');

        $('.nav-social-links-icon').removeClass('text-white');
    } else if ($(window).scrollTop() === 0) {
        $('.navbar').removeClass('navbar-toggle');
    } else {
        $('.navbar').removeClass('navbar-slide-down');
        $('.logo-color-animation').addClass('fill-white');

        $('.navbar-toggler').addClass('text-white');
        $('.nav-link').addClass('text-white');

        $('.nav-social-links-icon').addClass('text-white');
    }
});

// ------------------------------ Contact Page Start ------------------------------
// --------------- Contact page contact owl carousel ---------------
$(document).ready(function () {
    var owl = $('.contact-page.contact.owl-carousel');
    owl.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            991: {
                items: 3
            }
        }
    });

    $('.next-btn').click(function () {
        owl.trigger('next.owl.carousel');
    });

    $('.prev-btn').click(function () {
        owl.trigger('prev.owl.carousel');
    });
});
// ------------------------------ Contact Page End ------------------------------

// ------------------------------ Login Page Animation Start ------------------------------
function rain() {
    const backgroundDiv = document.getElementById('background');
    const image = new Image();
    image.onload = function () {
        var rainyDay = new RainyDay({
            image: this,
            blur: 10,
            fps: 40
        });
        RainyDay.rain([
            [5, 2, 2]
        ], 0);
    };

    backgroundDiv.style.backgroundImage = "url('../../assets/frontent/image/hero image.jpg')";
    backgroundDiv.style.backgroundSize = "cover";
    backgroundDiv.style.backgroundPosition = "center";
    image.src = '../../assets/frontent/image/hero image.jpg';
}
// ------------------------------ Login Page Animation End ------------------------------