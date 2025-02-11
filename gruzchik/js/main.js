

const swiper = new Swiper('.gall-swiper', {
  // Опции Swiper
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: true, // Центрируем слайды
  navigation: {
    prevEl: '.gall-prev',
    nextEl: '.gall-next',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
    reverseDirection: true, // Включаем обратное направление
  },
  speed: 1000, // Плавность автопрокрутки
  
});

const swiper2 = new Swiper('.reviews-swiper', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: true, // Центрируем слайды
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 111118000,
    disableOnInteraction: false,
  },
  speed: 1000,

});


const swiper3 = new Swiper('.recommended-swiper', {
  loop: true,
  slidesPerView: 1.5,
  spaceBetween: 20,

  navigation: {
    prevEl: '.recommended-prev',
    nextEl: '.recommended-next',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 111118000,
    disableOnInteraction: false,
  },
  speed: 1000,
  breakpoints: {
    600: {
      slidesPerView: 3, // 1.5 слайда
      spaceBetween: 10, // Уменьшаем расстояние между слайдами
    },
    1000: {
      slidesPerView: 4, // 1.5 слайда
      spaceBetween: 20, // Уменьшаем расстояние между слайдами
    },
  }
});







  // Для section - Популярные услуги с ценами  
  // const listContainer = document.querySelector('.price__list-container');

  MyLibJs.toggleBtn(
    {
      containerSelector: '.price__list-container',
      buttonSelector: '#btnPrice',
      btnActive: '.btnActive',
      containerHeightStart: 0,
      transition: '1s',
    }
  );


  // для section - Часто задаваемые вопросы, чтобы раскрыть блок ответа на вопрос 
  MyLibJs.toggleList(
    {
      itemSelector: '.questions__item',
      contentSelector: '.questions__item_content',
      buttonSelector: '.questions__item_btn',
      activeBtnClass: 'active',
      closeOthers: true, 
      transitionDuration: '0.3s' 
    }
  );



  // для section - Часто задаваемые вопросы, скрыть/показать все вопросы
  MyLibJs.toggleBtn(
    {
      containerSelector: '.questions__container',
      buttonSelector: '.questions__show-more-btn',
      transition: '1s',
      btnActive: '.btnActive',
      containerHeightStart: 0,
    }
  );



  // для section - Дополнительные услуги в Москве
  MyLibJs.toggleListFlex(
    {
      spans: document.querySelectorAll('.addserv__list span'),
      container: document.querySelector('.addserv__list-wrap'),
      button: document.querySelector('#open'),
      transition: '0.5s',
      index: 4,
    }
  )



  // для секции Услуги грузчиков в Москве
  MyLibJs.toggleBtn(
    {
      containerSelector: '.services__text',
      containerHeightStart: 100,
      blackoutSelector:'.fade-overlay',

      buttonSelector: '#servicesBtn',
      btnActive: 'btnActive',
      transition: '0.5s',
    }
  );

  // модуль burger menu
  document.getElementById('appMenu').innerHTML = menuHTML;

  // ТАБЫ

  MyLibJs.toggleTab(
    {
      buttonSelector: '.culc-button',
      paneSelector: '.culc__tab',
    }
  )

  MyLibJs.toggleTab(
    {
      buttonSelector: '.reviews-button',
      paneSelector: '.reviews-pane',
    }
  )
   
// для списка меню
  MyLibJs.toggleList(
    {
      itemSelector: '.menu-burger-item',
      contentSelector: '.menu-burger-item-content',
      buttonSelector: '.menu__item_btn',
      activeBtnClass: 'active',
      closeOthers: true, 
      transitionDuration: '0.3s' 
    }
  );