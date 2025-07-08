const video = document.querySelector('.video-main')
const progress = document.querySelector('.video__range-input')
const play = document.querySelector('.video__range-play')
const toggle = document.querySelector('.play-toggle')
const volume = document.querySelector('.video__range-input-vol')
const fullscreen = document.querySelector('.video__range-fullscreen')
const time = document.querySelector('.controls__time')

play.addEventListener('click', toggleVideo) 
video.addEventListener('click', toggleVideo) 

function toggleVideo () {
  if (video.paused) {
    video.play()
    toggle.src = './assets/icon/pause.png'
    toggle.style.width = '40px'
  }
  else {
    video.pause()
    toggle.src = './assets/icon/video-play.svg'
  }
}

video.addEventListener('timeupdate', updateProgress)

function updateProgress() {
   progress.value = (video.currentTime / video.duration) * 100

   let minutes = Math.floor(video.currentTime / 60)
   if(minutes < 10) {
      minutes = '0' + String(minutes)
   }
   
   let seconds = Math.floor(video.currentTime % 60)
   if(seconds < 10) {
      seconds = '0' + String(seconds)
   }
   
   time.innerHTML = `${minutes}:${seconds}`
   time.style.color = '#fff'
}

volume.addEventListener('input', volum)

function volum() {
   let vol = this.value
   console.log(vol);
   
   video.volume = vol / 100
}

fullscreen.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    video.requestFullscreen()
  }
  else {
    document.exitFullscreen()
  }
})