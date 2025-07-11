const header = document.querySelector('.header')
const sections = document.querySelectorAll('section')

const headerHeight = header.offsetHeight
let sectionHeight

sections.forEach(section => {
 sectionHeight = section.offsetHeight
})

window.addEventListener('scroll', () => {
   let scrollDistance = window.scrollY
   
   if(scrollDistance > (sectionHeight + headerHeight)) {
      header.classList.add('header--fixed')
   }
   else {
      header.classList.remove('header--fixed')
   }
})