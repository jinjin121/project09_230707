const MainSlide = new Swiper('.mainSlide', {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

const leftArrow = document.querySelector('.mainSlide .arrows .left');
leftArrow.addEventListener('click', function () {
    MainSlide.slidePrev();
});
const rightArrow = document.querySelector('.mainSlide .arrows .right');
rightArrow.addEventListener('click', function () {
    MainSlide.slideNext();
});


const ItmTap = new Swiper('.itmVisual', {
    slidesPerView: 3,
    spaceBetween: 50,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
});


const TABMENU = document.querySelectorAll('.cateTitle figure');
const TABCONTENT = document.querySelectorAll('.cateItm .cateItm_box');

TABMENU.forEach((it, idx) => {
    it.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(idx);
        TABCONTENT.forEach((it) => it.classList.remove('on'))
        TABCONTENT[idx].classList.add('on');
    })
})



