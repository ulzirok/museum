const menuBtn = document.querySelector('.menu__icon')
const menu = document.querySelector('.header__menu')
const menuList = document.querySelector('.header__menu-list')
const body = document.body

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active')
  menuBtn.classList.toggle('active')
  body.classList.toggle('lock')
})

menu.addEventListener('click', (event) => {
  if(event.target.classList.contains('header__menu')) {
    menu.classList.remove('active')
    menuBtn.classList.remove('active')
    body.classList.remove('lock')
  }
})

const menuLinks = menu.querySelectorAll('.header__menu-link')

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('active')
    menuBtn.classList.remove('active')
    body.classList.remove('lock')
  })
})