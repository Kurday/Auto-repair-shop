let btn = document.querySelector('.food__menu-button');
let sidebar = document.querySelector('.food__sidebar');
let activeClass = document.querySelector('.active');
let fadeClass = document.querySelector('.fade');
let slider = document.querySelector('.slider');


// let toggleActive = function (currentClass, classActive, classFade){
//     if(!(currentClass.classList.contains(classActive))) 
//     {currentClass.classList.add(classActive);
//         setTimeout(() => {
//             currentClass.classList.add(classFade);
//             }, 1);
//     } 
//     else {
//         sidebar.classList.remove(classFade)
//         setTimeout(() => {
//             sidebar.classList.remove(classActive)
//         }, 1000);
//     }
// }

// btn.onclick = toggleActive(sidebar, 'active', '.fade');
// btn.addEventListener('click', toggleActive(sidebar, activeClass, fadeClass));


btn.onclick = function(){
    if(!(sidebar.classList.contains('active'))) 
        {sidebar.classList.add('active');
            setTimeout(() => {
                    sidebar.classList.add('fade');
                }, 1);
        } 
        else {
            sidebar.classList.remove('fade')
            setTimeout(() => {
                sidebar.classList.remove('active')
            }, 1000);
        }
}

console.log(btn);



// Слайдер
// let left = 0;

// function sliderLeft(){
//     left = left - 128;
//     if(left<-1012){
//         left = 0;
//     }
//     slider.style.left = left + 'px';
// }

// btn.onclick = sliderLeft;
new Swiper('.swiper', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 0,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },
    speed: 3000, 
  });
  
  $(function(){
    $('.meal__dinner-item').height($('.meal__dinner-item').width()/0.7);
  
    $(window).resize(function(){
      $('.meal__dinner-item').height($('.meal__dinner-item').width()/0.7);
    });
  });