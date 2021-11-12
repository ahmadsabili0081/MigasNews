var dots = [' ',' ',' ']
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 80,
    speed:1500,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
        renderBullet: function (index,className){
            return '<span class="' + className + ' ">' +(dots[index]) + '</span>';
        },
    },
  });
  
// hambuger nav
const hamburger = document.getElementById('hamburger');
const blur = document.getElementById('blur');
hamburger.addEventListener('click',function (e){
    const nav = document.querySelector('nav');
    nav.classList.toggle('show');
    hamburger.classList.toggle('rotate');
});

// btnscroll
window.addEventListener('scroll',function (){
  const btn = document.querySelector('.btn');
  btn.classList.toggle('BtnScroll', window.scrollY > 0);
});
function BtnScrolll(){
  document.body.scrollTop = 0;

  document.documentElement.scrollTop = 0;
}
// animmation
  AOS.init({
    offset: 120, 
    delay: 0, 
    duration: 400, 
    easing: 'ease',
  });
  