const liVideoAll = document.querySelectorAll('.video__slider-indicator')
const innerVideo = document.querySelector('.video__slider-inner')

let moveVideo = 0
let k = 0

liVideoAll.forEach((li, index) => {
  li.addEventListener('click', function () {
    liVideoAll.forEach((li) => {
      li.classList.remove('active')
    })
    
    this.classList.add('active')
    k = index
    
    moveVideo = -470 * index
    if (moveVideo < -1000 * (liVideoAll.length - 1)) {
    moveVideo = 0;
  }
    
    innerVideo.style.left = moveVideo + 'px'
  })
})