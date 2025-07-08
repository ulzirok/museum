const scrollTop = document.querySelector('.scrollTop')

window.addEventListener('scroll', function () {
  if (scrollY > 300) {
    scrollTop.style.display = 'block'
  }
  else {
   scrollTop.style.display = 'none' 
  }
})

scrollTop.addEventListener('click', scrollToTop)

function scrollToTop () {
  window.scrollTo(0, 0)
}