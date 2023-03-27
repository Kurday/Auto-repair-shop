let close = document.querySelector('.menu__close');
let btn = document.querySelector('.header__burger');
let menu = document.querySelector('.menu__main');
// для секции choice 
let choice = document.querySelectorAll('.choice__item');

// меню бургер
btn.addEventListener('click', function (e) {
  menu.classList.add('menu-active');
})

close.addEventListener('click', function (e) {
  menu.classList.remove('menu-active');
})


// секция choice событие наведения мыши по item 
choice.forEach((e)=> {
  let content = e.querySelector('.item__wrapper');
  let buttons = e.querySelector('.item__buttons');
  e.addEventListener('mouseover', function(el){
    content.classList.add('no-active');
    buttons.classList.add('active');
    e.classList.add('f-m');
  })
  e.addEventListener('mouseout', function(el){
    content.classList.remove('no-active');
    buttons.classList.remove('active');
    e.classList.remove('f-m');
  })
 
  
  // e.addEventListener('mouseover', function(e){
  //   let content = e.children;
  //   console.log(content);
  // });
  // e.addEventListener('mouseout', function(e){
  //   console.log('k');
  // })
})

new Swiper('.work__slider', {
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination',
      clickble: true,
  },
});

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

