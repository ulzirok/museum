let mainVideo = document.querySelector('.video-main')
const progress = document.querySelector('.video__range-input')
const play = document.querySelector('.video__range-play')
const toggle = document.querySelector('.play-toggle')
const volume = document.querySelector('.video__range-input-vol')
const fullscreen = document.querySelector('.video__range-fullscreen')
const time = document.querySelector('.controls__time')
const volumeImg = document.querySelector('.video__range-volume')
const volumeBtn = document.querySelector('.video__range-btn')

play.addEventListener('click', toggleVideo) 
mainVideo.addEventListener('click', toggleVideo) 

function toggleVideo () {
  if (mainVideo.paused) {
    mainVideo.play()
    toggle.src = './assets/icon/pause.png'
    toggle.style.width = '23px'
    toggle.style.height = '31px'
  }
  else {
    mainVideo.pause()
    toggle.src = './assets/icon/video-play.svg'
  }
}

mainVideo.addEventListener('timeupdate', updateProgress)

function updateProgress() {
   progress.value = (mainVideo.currentTime / mainVideo.duration) * 100

   let minutes = Math.floor(mainVideo.currentTime / 60)
   if(minutes < 10) {
      minutes = '0' + String(minutes)
   }
   
   let seconds = Math.floor(mainVideo.currentTime % 60)
   if(seconds < 10) {
      seconds = '0' + String(seconds)
   }
   
   time.innerHTML = `${minutes}:${seconds}`
   time.style.color = '#fff'
}

volume.addEventListener('input', volum)

function volum() {
   let vol = this.value
   mainVideo.volume = vol / 100
}

volumeBtn.addEventListener('click', () => {
  mainVideo.muted = !mainVideo.muted;
  
  if (mainVideo.muted) {
    volumeImg.src = './assets/icon/muted.png'
    volumeImg.style.width = '35px'
    volumeImg.style.height = '35px'
  } else {
    volumeImg.src = './assets/icon/video-volume.svg'
  }
})

fullscreen.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    mainVideo.requestFullscreen()
  }
  else {
    document.exitFullscreen()
  }
})