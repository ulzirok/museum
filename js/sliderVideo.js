const liVideoAll = document.querySelectorAll('.video__slider-indicator')
const innerVideo = document.querySelector('.video__slider-inner')
const slideVideo = document.querySelectorAll('.video__slider-slide')

let moveVideo = 0
let k = 0

liVideoAll.forEach((li, index) => {
  li.addEventListener('click', function () {
    liVideoAll.forEach((li) => {
      li.classList.remove('active')
    })
    
    this.classList.add('active')
    k = index
    
    moveVideo = -(slideVideo[i].offsetWidth + 10) * index
    if (moveVideo < -(slideVideo[i].offsetWidth + 10) * (liVideoAll.length - 1)) {
    moveVideo = 0;
  }
    
    innerVideo.style.left = moveVideo + 'px'
  })
})