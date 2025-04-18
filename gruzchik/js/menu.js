// menu.js
const menuHTML = `
  <div class="menu-container fx f-col f-c f-m">
    <div class="menu-burger" id="burger">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <p class="fs14">Меню</p>

    <div class="menu__burger_min fx f-s" id="menu-min">
      <div class="container">

      <div class="menu-close" id="menu-close">
        <span></span>  
        <span></span>  
      </div>      
  
      
      <ul class="fx f-col t-white  mt100 t-upper g20">

        <li class="menu-burger-item fx f-col ">
            <span class="fx f-sb ">грузчики <i class="icon-img2  t-white"><img class="menu__item_btn" src="./img/arrow.svg" alt=""></i>   </span>
            <ul class="menu-burger-item-content ml20 fx g20  ">
                <div class="fx f-col g20 mt20">
                  <li class=""><a href="#about">Подъем/спуск на этаж</a></li>
                  <li><a href="#services">Стоимость грузчиков</a></li>
                  <li><a href="#contact">Вывоз мусора/материалов</a></li>
                  <li><a href="#contact">Грузчики на производство</a></li>
                  <li><a href="#contact">Грузчики на разовую работу</a></li>
                  <li><a href="#contact">Грузчики на погрузочно-разгрузочные работы</a></li>
                </div>
                
            </ul>
        </li>

        <li class="menu-burger-item fx f-col">
            <span class="fx f-sb ">офисный переезд <i class="icon-img2  t-white"><img class="menu__item_btn" src="./img/arrow.svg" alt=""></i></span>
            <ul class="menu-burger-item-content ml20 fx g20   ">
              <div class="fx g20 mt20">
                <li><a href="#about">Подъем/спуск на этаж</a></li>
                <li><a href="#services">Стоимость грузчиков</a></li>
                <li><a href="#contact">Вывоз мусора/материалов</a></li>
                <li><a href="#contact">Грузчики на производство</a></li>
                <li><a href="#contact">Грузчики на разовую работу</a></li>
                <li><a href="#contact">Грузчики на погрузочно-разгрузочные работы</a></li>
              </div>
            </ul>
        </li>

        <li class="menu-burger-item fx f-col">
            <span class="fx f-sb ">грузоперевозки <i class="icon-img2  t-white"><img class="menu__item_btn" src="./img/arrow.svg" alt=""></i></span>
            <ul class="menu-burger-item-content ml20 fx g20   ">
              <div class="fx g20 mt20">
                <li><a href="#about">Подъем/спуск на этаж</a></li>
                <li><a href="#services">Стоимость грузчиков</a></li>
                <li><a href="#contact">Вывоз мусора/материалов</a></li>
                <li><a href="#contact">Грузчики на производство</a></li>
                <li><a href="#contact">Грузчики на разовую работу</a></li>
                <li><a href="#contact">Грузчики на погрузочно-разгрузочные работы</a></li>
              </div>
            </ul>
        </li>

        <li class="menu-burger-item fx f-col">
            <span class="fx f-sb ">такелажные работы <i class="icon-img2  t-white"><img class="menu__item_btn" src="./img/arrow.svg" alt=""></i></span>
            <ul class="menu-burger-item-content ml20 fx g20">
              <div class="fx g20 mt20">
                <li><a href="#about">Подъем/спуск на этаж</a></li>
                <li><a href="#services">Стоимость грузчиков</a></li>
                <li><a href="#contact">Вывоз мусора/материалов</a></li>
                <li><a href="#contact">Грузчики на производство</a></li>
                <li><a href="#contact">Грузчики на разовую работу</a></li>
                <li><a href="#contact">Грузчики на погрузочно-разгрузочные работы</a></li>
                <li><a href="#about">Подъем/спуск на этаж</a></li>
                <li><a href="#services">Стоимость грузчиков</a></li>
                <li><a href="#contact">Вывоз мусора/материалов</a></li>
                <li><a href="#contact">Грузчики на производство</a></li>
                <li><a href="#contact">Грузчики на разовую работу</a></li>
                <li><a href="#contact">Грузчики на погрузочно-разгрузочные работы</a></li>
              </div>
            </ul>
        </li>
      </ul>

      <hr class="w100">

     

      <ul class="menu-burger-item-content  fx f-col  t-upper t-white g20 ">
        <li><a href="#">О компании</a></li>
        <li><a href="#">Вакансии</a></li>
        <li><a href="#">Новости</a></li>
        <li><a href="#">Контакты</a></li>
      </ul> 

      <hr class="w100">
      
       <div class="menu__contact">
        <div class="fx t-white">
            <i><img src="./img/menu-contact1.svg" alt=""></i>
            <div class="fx f-col ml20">
                <span>8 (800) 700-51-53</span>
                <span> +7 (965) 226-57-90</span>
            </div>
        </div>

        <div class="fx t-white mt20">
            <i><img src="./img/menu-contact2.svg" alt=""></i>
            <div class="fx f-col ml20">
                <span>info@standart-express.ru</span>
                <span>Выполняем заказы: 24/7</span>
            </div>
        </div>
      </div>

      <button class="w100 w-s-fit t-center btn btn-accent t-white fx f-c mt20">Перезвоните</button>
      
      </div>
    </div>
  </div>
`;

document.addEventListener('DOMContentLoaded', () => {
  // Получаем элементы для управления мобильным меню
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu-min');
  const body = document.body; // Ссылка на body для управления прокруткой

  // Получаем элементы для управления отступом шапки
  const hTop = document.querySelector('.h-top');
  const header = document.querySelector('.header');
  const nextElement = hTop.nextElementSibling;


  // Для такой конструкции определяем отступ для header в высоту h-top который в свою очередь будет absolute
  // <header>
  //     <h-top></h-top>
  //     <h-nav></h-nav> или nextElement
  // </header>

  // Устанавливаем отступ для шапки равный высоте верхнего блока
  if (hTop && header) { // Проверяем существование элементов hTop и nextElement перед выполнением кода
    const hTopHeight = hTop.offsetHeight;
    header.style.paddingTop = `${hTopHeight}px`;
  }



  // Пересчитываем отступ при изменении размера окна
  window.addEventListener('resize', () => {
    if (hTop && nextElement) {
      const hTopHeight = hTop.offsetHeight;
      header.style.paddingTop = `${hTopHeight}px`;
    }
  });


  // Функция для вычисления ширины полосы прокрутки
  const getScrollbarWidth = () => {
    return window.innerWidth - document.documentElement.clientWidth;
  };
  const scrollbarWidth = getScrollbarWidth(); // Получаем ширину полосы прокрутки


  // Обработчик клика по бургер-меню
  burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
    body.style.overflow = 'hidden'; // Отключаем прокрутку страницы при открытом меню
   
  });



  // Закрытие меню по клику на пустую область вне меню
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !burger.contains(e.target)) {
      // Проверяем, что клик вне меню и вне иконки бургера
      if (menu.classList.contains('active')) {
        menu.classList.add('noactive');
        burger.classList.remove('active');
        body.style.overflow = ''; // Восстанавливаем прокрутку страницы
        body.style.paddingRight = ''; // Убираем компенсирующий отступ
        setTimeout(() => {
          menu.classList.remove('active');
          menu.classList.remove('noactive');
        }, 500);
      }
    }
  });

  // Закрытие меню при клике на пункт меню
  menu.addEventListener('click', (e) => {
    // Проверяем, является ли элемент, на который кликнули, ссылкой
    if (e.target.tagName === 'A') {
      menu.classList.add('noactive');
      burger.classList.remove('active');
      body.style.overflow = ''; // Восстанавливаем прокрутку страницы
    
      setTimeout(() => {
        menu.classList.remove('active');
        menu.classList.remove('noactive');
      }, 500);
    }
  });

  // Код для закрытия меню по клику на крестик
  document.getElementById('menu-close').addEventListener('click', (e) => {

    // Проверяем, что клик вне меню и вне иконки бургера
    if (menu.classList.contains('active')) {
      menu.classList.add('noactive');
      burger.classList.remove('active');
      body.style.overflow = ''; // Восстанавливаем прокрутку страницы

      setTimeout(() => {
        menu.classList.remove('active');
        menu.classList.remove('noactive');
      }, 500);
    }
  });
});

// в главный js файл кинуть это
// document.getElementById('appMenu').innerHTML = menuHTML;

// СТИЛИ ДЛЯ ЭТОГО МЕНЮ
// body::-webkit-scrollbar 
// {
//     display: none; /* Для Chrome, Safari и Opera */
// }




// .menu-container 
// {
//     position: relative;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
//     z-index: 100;
// }

// .menu-burger
// {
//     width: 20px;
//     height: 28px;
//     position: relative;
// }

// .menu__burger_min 
// {
//     position: fixed; 
//     top: 0;
//     left: 0;
//     transform: translateX(-100%) !important;
//     width: 30%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.8); 
//     color: white;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     opacity: 1;
//     pointer-events: none; 
//     transition: opacity 0.5s ease;
//     z-index: 100; 
// }

// .menu__burger_min.active
// {
//     opacity: 1;
//     pointer-events: all; 
//     transform: translateX(0%) !important;
//     transition: 0.5s;
// }  

// .menu__burger_min.noactive 
// {
//     transform: translateX(-100%) !important;
//     transition: 0.5s;
// }



// @media (max-width: 968px)
// {
//     .menu__burger_min 
//     {
//         transform: translateY(-100%) !important;
//         width: 100%;
//     }
//         /* Видимое состояние */
//     .menu__burger_min.active 
//     {
//         transform: translateY(0%) !important;
//         transition: 0.5s;
//     }  
//     .menu__burger_min.noactive 
//     {
//         transform: translateY(-100%) !important;
//         transition: 0.5s;
//     }
// }

// .menu-burger span
// {
//     height: 3px;
//     border-radius: 5px;
//     width: 100%;
//     background-color: black;
//     position: absolute;
//     margin-top: 4px
// }

// .menu-burger span:nth-child(1)
// {
//     transform: translateY(5px);
// }
// .menu-burger span:nth-child(2)
// {
//     transform: translateY(10px);
// }
// .menu-burger span:nth-child(3)
// {
//     transform: translateY(15px);
// }

// .menu-close {
//   width: 30px;
//   height: 30px;
//   cursor: pointer;
//   position: absolute;
//   top: 50px;
//   left: 50px;
//   z-index: 100;
// }

// .menu-close span {
//   display: block;
//   width: 100%;
//   height: 2px;
//   background: #fff;
//   position: absolute;
//   top: 50%;
//   left: 0;
//   transform-origin: center;
//   z-index: 1;
// }

// .menu-close span:first-child {
//   transform: rotate(45deg);
// }

// .menu-close span:last-child {
//   transform: rotate(-45deg);
// }