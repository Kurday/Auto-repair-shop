let close = document.querySelector('.menu__close');
let btn = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu-list');

// меню бургер
btn.addEventListener('click', function (e) {
  menu.classList.add('menu-active');
})

close.addEventListener('click', function (e) {
  menu.classList.remove('menu-active');
})


// свайпер


new Swiper('.reviews__users', {
  pagination: {
      el: '.user-pag',
      clickable: true,
  },
  navigation: {
    nextEl:'.user__right',
    prevEl:'.user__left',
  },
  slidesPerView: 1,
  spaceBetween: 50,
  breakpoints: {
      992: {
        slidesPerView: 3
      },
      600: {
        slidesPerView: 2
      },
      400: {
        slidesPerView: 1
      },
    }
});