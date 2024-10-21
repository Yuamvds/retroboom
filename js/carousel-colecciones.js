$('.slider-colec').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    responsive: [{
        breakpoint: 700,
        settings: {
            slidesToShow: 3
        },
        breakpoint: 470,
        settings: {
            slidesToShow: 2
        }

    }]
});