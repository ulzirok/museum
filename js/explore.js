const inputRange = document.querySelector('.slider__explore input')

inputRange.addEventListener('input', function () {
   const imageAfter = document.querySelector('.original-image')
   imageAfter.style.width = this.value + '%'
})