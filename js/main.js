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
      on:{
        slideChangeTransitionStart: function () {
          gsap.from('.text__slider',{
            duration:2.5,
            y:-100,
            opacity:0,
            });
        }
      },
});
    
  // hambuger nav
const hamburger = document.getElementById('hamburger');
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
  
const section = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navScroll);
function navScroll (){
let scrollY = window.pageYOffset;

section.forEach(current => {
const sectionHeight = current.offsetHeight;
const  sectionTop = current.offsetTop - 120;
sectionId = current.getAttribute("id");


if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
    document.querySelector(".navbar a[href*=" + sectionId + "]").classList.add('active');
}else{
    document.querySelector(".navbar a[href*=" + sectionId + "]").classList.remove('active');
    }
 });
}

