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



// --------------- OTP handaling js ---------------
function initializeOtpInputs() {
    const otpInputs = document.querySelectorAll('.otp-input');
    otpInputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            const value = input.value.trim();
            if (value && index < otpInputs.length - 1) {
                otpInputs[index + 1].disabled = false;
                otpInputs[index + 1].focus();
            }
            if (value.length > 1) {
                input.value = value[0];
            }
        });
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Backspace') {
                if (!input.value && index > 0) {
                    otpInputs[index].disabled = true;
                    otpInputs[index - 1].focus();
                    otpInputs[index - 1].value = '';
                }
            }
        });
    });
    otpInputs[0].disabled = false;
    otpInputs.forEach((input, index) => {
        if (index > 0) input.disabled = true;
    });
}

function initializeOtpTimer() {
    const resendOtpBtn = document.querySelector('.resend-otp-btn');
    const otptimerElement = document.querySelector('.otp-timer');
    const otpTimerHolderElement = document.querySelector('.otp-timer-holder');
    const countdownTime = 60;
    let timeLeft = countdownTime;
    resendOtpBtn.classList.add('disabled');
   const interval = setInterval(() => {
        otptimerElement.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(interval);
            resendOtpBtn.classList.remove('disabled');
            otpTimerHolderElement.style.display = 'none';
        }
        timeLeft--;
    }, 1000);
}



