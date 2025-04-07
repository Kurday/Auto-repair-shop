document.getElementById('appMenu').innerHTML = menuHTML;

const swiper = new Swiper('.taste__cards', {
  loop: false,
  slidesPerView: 1, 
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
    }
  }
});

const swiper2 = new Swiper('.comments__cards', {
  loop: false,
  slidesPerView: 1, 
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination2',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    
    1200: {
      slidesPerView: 3,
    }


  }
});