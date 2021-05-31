document.addEventListener('scroll', () => {
    let nav = document.querySelector('#nav');
    if (window.pageYOffset > 50) {
        nav.classList.remove('bg-transparent');
        nav.classList.remove('navbar-light')
        nav.style.backgroundColor = "#000";
        nav.style.color = ("#FFFFFF");
        nav.classList.add('bg-accent');
        nav.style.transition = "0.4s";

    } else {
        nav.classList.remove('bg-accent');
        nav.classList.add('bg-transparent');
        nav.classList.add('navbar-light');
    }
    let btn = document.querySelector('#buscar');
    if (window.pageYOffset > 50) {

        btn.classList.add('text-white')
    } else {
        btn.classList.remove('text-white');
    }
})

var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});


ScrollReveal().reveal('.headline', { duration: 1500, delay: 500, distance: '80px', interval: 600, easing: 'cubic-bezier(0.5, 0, 0, 1)' });