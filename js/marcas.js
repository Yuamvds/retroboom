$('.logo-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    responsive: [{
        breakpoint: 500,
        settings: {
            slidesToShow: 4
        }
    }]
});