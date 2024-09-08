window.addEventListener('DOMContentLoaded', () => {

    // sliders 
    new Swiper(".accessories-slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: ".accessories-slider__btn-next",
            prevEl: ".accessories-slider__btn-prev"
        },
        pagination: {
            el: ".accessories-swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            1024: {
                slidesPerView: 4.2,
                spaceBetween: 32,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            500: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
        },
    });
    
    new Swiper(".reviews-slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: ".reviews-slider__btn-next",
            prevEl: ".reviews-slider__btn-prev"
        },
        pagination: {
            el: ".reviews-swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            500: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
        },
    });

    // navmenu

    const burgerBtn = document.querySelector('.header-wrapper__burger');
    const navContent = document.querySelector('.nav');

    burgerBtn.addEventListener('click', () => {
        navContent.classList.toggle('active');
        burgerBtn.classList.toggle('active');
        document.body.classList.toggle('lock');
    })
});