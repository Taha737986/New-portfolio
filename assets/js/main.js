
var swiper = new Swiper('.slider-active .swiper-container', {
    speed: 600,
    effect: "fade",
    loop: true,
    pagination: {
        el: '.slider-active .swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 8000,
     },
});


