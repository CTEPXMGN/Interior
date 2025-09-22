import Swiper from '../vendor/swiper/swiper-bundle.min.mjs'
import { themeSwitcher } from '../vendor/theme-switcher/theme-switcher.js'
new themeSwitcher()

const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.main-menu ul')

menuBtn.addEventListener('click', function() {
  this.classList.toggle('active')
  menu.classList.toggle('active')
})

const swiper = new Swiper('.head__slider', {
  effect: 'slide',
  speed: 1000,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  mousewheel: true,
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true
  // },
  // breakpoints: {
  //   0: {
  //     slidesPerView: 1,
  //     spaceBetween: 20
  //   },
  //   768: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   }
  // }
})
