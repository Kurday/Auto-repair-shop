let element = document.getElementById('selector');


// маска для input
let maskOptions = {
  mask: '+{7}(000)000-00-00'
};
let mask = new IMask(element, maskOptions);

// для gallery


// function showgall(){
//     lightbox.open();
// }
    
    
// let lightbox = new FsLightbox();
// lightbox.props.sources = ['./img/work1.jpg','./img/work2.jpg','./img/work3.jpg'];

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
      678: {
        slidesPerView: 2
      },
      400: {
        slidesPerView: 1
      },
    
    }
});

// аккордеон 
let jscontent = document.querySelectorAll('.jscontent');
let plus = document.querySelectorAll('.item__plus');
let plusMinus = document.querySelectorAll('.item__plus-minus');


document.querySelectorAll('.accordion').forEach((el)=> {
    el.addEventListener('click', ()=> {
      let content = el.nextElementSibling;

      // когда нужно закрыть
      if(content.style.maxHeight) {
            jscontent.forEach((el)=> el.style.maxHeight = null)  
            // для горизонтальной
            plus.forEach((el)=> el.classList.remove('item__plus-active'));
            // для вертикальной
            plusMinus.forEach((el)=> el.classList.remove('item__plus-active'));
      } else {
            jscontent.forEach((el)=> el.style.maxHeight = null);
            content.style.maxHeight = content.scrollHeight+'px';
            // для горизонтальной
            plus.forEach((el)=> el.classList.remove('item__plus-active'));
            el.querySelector('.item__plus').classList.add('item__plus-active');
            // для вертикальной
            plusMinus.forEach((el)=> el.classList.remove('item__plus-active'));
            el.querySelector('.item__plus-minus').classList.add('item__plus-active');
          
           
        }



  });
});
 
    

