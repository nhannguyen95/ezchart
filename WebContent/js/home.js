$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: true
            }
        }
    });

    $('a.gallery').featherlightGallery({
        gallery: {
            previous: '«',
            next: '»',
            fadeIn: 300
        },
        openSpeed: 300
    });

//    $('nav').find('a').click(function (e) {
//        e.preventDefault();
//        var section = $(this).attr('href');
//        if (section == '#') {
//            $('html, body').animate({
//                scrollTop: 0
//            });
//        } else {
//              $('html, body').animate({
//                scrollTop: $(section).offset().top
//            });
//        }
//    });
});

