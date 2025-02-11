
  const MyLibJs = {

    // раскрыть/скрыть блок через кнопку. Параметры модуля:
    // container: document.querySelector('.services__text'),
    // containerHeightStart: 100, даем изначальную высоту контейнера
    // blackout: document.querySelector('.fade-overlay'), необязательныйя, затемнение текста
    // button: document.querySelector('#servicesBtn'),
    // btnActive: 'btnActive',
    // transition: '0.5s',

    // Стиль для блюр текста
    // .fade-overlay {
    //   position: absolute;
    //   transition: 1.5s;
    //   bottom: 0;
    //   left: 0;
    //   right: 0;
    //   height: 50px; 
    //   background: linear-gradient(to bottom, transparent, white); 
    //   pointer-events: none; 
    //   z-index: 1;
    // }

    // toggleBtn(options) {
    //   const container = options.container;
    //   const button = options.button;
    //   const transition = options.transition;
    //   const blackout = options.blackout;
    //   const containerHeightStart = options.containerHeightStart;
    //   const btnActive = options.btnActive;

    //   // const container = document.querySelector(container);

    //   container.style.height = `${containerHeightStart}px`;
    //   container.style.transition = 'height ' + transition + ' ease';
    //   container.style.overflow = 'hidden';
    //   let flag = false;

    //   button.addEventListener('click', () => {
    //     // закрытие
    //     if (flag) {
    //       const currentHeight = `${container.scrollHeight}px`;
    //       container.style.height = currentHeight;
    //       button.classList.remove(btnActive);
    //       setTimeout(() => {
    //         container.style.height = `${containerHeightStart}px`;
    //         if (blackout) blackout.style.opacity = '1'; // Проверка на наличие blackout
    //       }, 10);

    //       flag = false;
    //     }
    //      else // закрытие 
    //     {
    //       const fullHeight = `${container.scrollHeight}px`;
    //       container.style.height = fullHeight;
    //       button.classList.add(btnActive);
    //       flag = true;

    //       setTimeout(() => {
    //         if (flag) {
    //           container.style.height = 'auto';
    //           if (blackout) blackout.style.opacity = '0'; // Проверка на наличие blackout
    //         }
    //       }, parseFloat(transition) * 1000);
    //     }
    //   });
    // },


    toggleBtn: function ({
      containerSelector,
      buttonSelector,
      transition,
      blackoutSelector,
      containerHeightStart,
      btnActive,
    }) {




      const container = document.querySelector(containerSelector);
      const button = document.querySelector(buttonSelector);
      const blackout = blackoutSelector
        ? document.querySelector(blackoutSelector)
        : null;
    
      // Проверяем, что контейнер и кнопка найдены
      if (!container || !button) {
        console.error("Container or button not found!");
        return;
      }
    
      // Инициализация начальных параметров
      container.style.height = `${containerHeightStart}px`;
      container.style.transition = `height ${transition} ease`;
      container.style.overflow = "hidden";
      let flag = false; // Состояние контейнера (открыт/закрыт)
    
      // Обработчик клика
      button.addEventListener("click", () => {
        if (flag) {
          // Закрытие
          const currentHeight = `${container.scrollHeight}px`;
          container.style.height = currentHeight;
          button.classList.remove(btnActive);
    
          setTimeout(() => {
            container.style.height = `${containerHeightStart}px`;
            if (blackout) blackout.style.opacity = "1";
          }, 10);
    
          flag = false;
        } else {
          // Открытие
          const fullHeight = `${container.scrollHeight}px`;
          container.style.height = fullHeight;
          button.classList.add(btnActive);
    
          setTimeout(() => {
            if (flag) {
              container.style.height = "auto"; // Убираем ограничение по высоте
              if (blackout) blackout.style.opacity = "0";
            }
          }, parseFloat(transition) * 1000);
    
          flag = true;
        }
      });
    },
    


    ///////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////





    // Нужен когда необходимо открывать/закрывать flex элементы которые идут друг за другом и нельзя использовать контейнер для анимации потому как прерывается правильное отображение элементов,то-есть если будет обертка(блок) то новые элементы начнутся с новой строки.

    // <div class="addserv__list-wrap">
    //   <class="addserv__list">
    //       <span>Грузчики для офисного переезда</span>
    //       <span>Грузчики для офисного переезда</span>
    //        ...
    //        <button id="open">...</button>
    //   </div>
    // </div>

    // const addserv_list = document.querySelector('.addserv__list-wrap');
    // const addserv_spans = document.querySelectorAll('.addserv__list span'); 
    // const addserv_btn = document.querySelector('#open');
    
    // MyLibJs.toggleListFlex(addserv_spans,
    //   {
    //     container: addserv_list,
    //     button: addserv_btn,
    //     transition: '0.5s',
    //     index: 4,
    //   }
    // )

  // .primer .container 
  // {
  //     gap: 10px;
  // }
  // .primer span 
  // {
  //     height: fit-content;
  // }

  toggleListFlex(options) {
    const spans = options.spans;
    const button = options.button;
    const transition = options.transition;
    const container = options.container;
    const index = options.index;

    container.style.transition = 'height ' + transition + ' ease';
    button.style.transition = 'opacity ' + transition + ' ease';

    // Изначально скрываем элементы, начиная с заданного индекса
    spans.forEach((item, id) => {
      if (id >= index) {
        item.style.display = 'none'; 
        item.style.opacity = '0';   
      }
      item.style.transition = 'opacity ' + transition + ' ease';
      item.style.overflow = 'hidden';
    });

    let flag = false; // Контролируем состояние: открыто или закрыто

    // выносим за цикл, чтобы не изменялось число в цикле и контейнер запоминал начальное положение 
    // const initialHeight = `${container.scrollHeight}px `;

    let initialHeight; // Объявляем переменную в глобальной области видимости

    setTimeout(() => {
      initialHeight = `${container.scrollHeight}px`;
      console.log("✅ Установлен initialHeight:", initialHeight);
    }, 0);
    
    // console.log('initialHeight - начальная высота',initialHeight);
    
    // что это ?
    const updateContainerHeight = () => {
      const currentHeight = `${container.scrollHeight}px`;
      container.style.height = currentHeight;
      return `${currentHeight}px`;
    };

    button.addEventListener('click', () => {
      
      spans.forEach((item, id) => {
        
        if (id >= index) {
          if (!flag) {
            // Процесс открытия
            button.style.opacity = '0';

            setTimeout(() => {
              
              item.style.display = 'flex';
              const currentHeight = `${container.scrollHeight}px`;

              console.log('currentHeight - высота контейнера после клика',currentHeight);
              
              
              container.style.height = currentHeight;

            }, parseFloat(transition) * 1000);

            setTimeout(() => {
              item.style.opacity = '1';
              button.style.opacity = '1';
            }, parseFloat(transition) * 1200);
          } else {
            // Процесс закрытия
            // берем высоту элементов чтобы задать эту высоту контейнеру
            // const currentHeight = `${container.scrollHeight}px`;

            item.style.opacity = '0'; // Плавное исчезновение
            button.style.opacity = '0';
            
            setTimeout(() => {
              
              item.style.display = 'none'; // Скрыть элемент
              button.style.opacity = '1';
              container.style.height = initialHeight; // Уменьшить высоту контейнера
              console.log('initialHeight -',initialHeight);
                            
            }, parseFloat(transition) * 1000);
    
          }
        }
      });
      flag = !flag; 
    });
  },



    ///////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////


  // нужен когда есть элемент с блоком который нужно скрывать/показывать при клике на элемент. Чаще всего это список часто задаваемых вопросов клик на один из них разворачивает блок с ответом

    toggleList: function ({
      // элементы под которыми вкл./выкл. контент
      itemSelector,
      // контент который будет показываться/скрываться
      contentSelector,
      buttonSelector,
      activeBtnClass = 'active',
      transitionDuration = '0.6s',
      closeOthers = true
    }) {
      const items = document.querySelectorAll(itemSelector);

      // проходим по всем видимым элементам под которыми будет контент
      items.forEach(item => {
        const content = item.querySelector(contentSelector);
        const button = item.querySelector(buttonSelector);

        // Устанавливаем начальные стили и флаг
        content.style.maxHeight = '0px';
        content.style.overflow = 'hidden';
        content.style.transition = `max-height ${transitionDuration} ease`; // Используем переданное значение для duration
        item.style.cursor = 'pointer';
        item.dataset.isOpen = 'false'; // Флаг состояния

              
        items.forEach(item => {
          const content = item.querySelector(contentSelector)
          content.style.display = 'none'
        }),

        item.addEventListener('click', function () {

          const isOpen = item.dataset.isOpen === 'true';

          // Если элемент уже открыт, закрываем его
          if (closeOthers) {
            items.forEach(otherItem => {
              const otherContent = otherItem.querySelector(contentSelector);
              const otherButton = otherItem.querySelector(buttonSelector);
              otherContent.style.maxHeight = '0px';
              otherItem.dataset.isOpen = 'false';
              if (otherButton) otherButton.classList.remove(activeBtnClass);
            });
          }

          // Переключаем состояние текущего элемента
          if (isOpen) {
            // Закрываю элемент
            content.style.maxHeight = '0px'; // Закрыть текущий элемент
            item.dataset.isOpen = 'false'; // Обновляем флаг

            setTimeout(() => {
              content.style.display = 'none'; 
            }, 300);
            
            if (button) button.classList.remove(activeBtnClass); // Удалить класс
          } else {
            // Открываю элемент
            content.style.display = 'flex'; 
            content.style.maxHeight = `${content.scrollHeight}px`; // Открыть
            item.dataset.isOpen = 'true'; // Обновляем флаг
            if (button) button.classList.add(activeBtnClass); // Добавить класс
          }

        });

      });
    },
  
    
  /*
      Инструкция по использованию:
      
      Функция toggleList создает аккордеон из элементов на странице. Для использования вызовите:

      MyLibJs.toggleList({
        itemSelector: '.item',           // селектор элемента-контейнера
        contentSelector: '.content',     // селектор скрываемого/показываемого контента
        buttonSelector: '.button',       // селектор кнопки (необязательно)
        activeBtnClass: 'active',       // класс для активной кнопки (по умолчанию 'active')
        transitionDuration: '0.6s',     // длительность анимации (по умолчанию '0.6s')
        closeOthers: true              // закрывать ли другие элементы при открытии нового (по умолчанию true)
      });

    */


      
    ///////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////


   
 
    // Используем когда нужна табуляция на странице

    toggleTab: function ({
      buttonSelector,    // Селектор кнопок
      paneSelector,      // Селектор панелей
    }) 
    {
      const tabButtons = document.querySelectorAll(buttonSelector);
      const tabPanes = document.querySelectorAll(paneSelector);

    // Скрываем все панели, кроме активной (если есть)
    tabPanes.forEach((pane, index) => {
      if (index !== 0) {
          pane.style.display = 'none'; // Скрываем панель
      }
    });

    // Присваиваем каждой кнопке случайный data-атрибут
    tabButtons.forEach((button, index) => {
        const randomAttributeName = 'data-tab-' + Math.random().toString(36).substring(2, 15);
        const randomValue = 'tab-' + Math.random().toString(36).substring(2, 15);

        // Добавляем случайный data-атрибут к кнопке
        button.setAttribute(randomAttributeName, randomValue);

        // Присваиваем соответствующему tabPane id, равное значению атрибута кнопки
        if (tabPanes[index]) {
            tabPanes[index].id = randomValue;
        }

        // Добавляем обработчик клика на кнопку
        button.addEventListener('click', function () {
            // Удаляем активные классы у всех кнопок и панелей
            tabPanes.forEach(pane => {
              pane.style.display = 'none'; // Скрываем все панели
            });
            // Добавляем активный класс к текущей кнопке
            // Получаем значение data-атрибута текущей кнопки
            const tabId = this.getAttribute(randomAttributeName);

            // Находим соответствующую панель и добавляем активный класс
            const tabPane = document.getElementById(tabId);
            if (tabPane) {
                tabPane.style.display = "block"; 
            }
        });
    });
}

   // Пример использования:
    // <button class="tab-button tab-active" data-tab="test-tab1">Вкладка 1</button>
    // <button class="tab-button" data-tab="test-tab2">Вкладка 2</button>
    // <button class="tab-button" data-tab="test-tab3">Вкладка 3</button>
    
    // <div id="test-tab1" class="tab-pane tab-active ">
    //   Контент для вкладки 1
    // </div>
    // <div id="test-tab2" class="tab-pane">
    //   Контент для вкладки 2
    // </div>
    // <div id="test-tab3" class="tab-pane">
    //   Контент для вкладки 3
    // </div>

  };

