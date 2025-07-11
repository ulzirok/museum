//Intersection Observer API
 
//Настройки
let options = {
   root: null,
   rootMargin: '5px',
   threshold: 0.5
}

//Функция обратного вызова
let callback = function(entries, observer) {
   entries.forEach(entry => {
      if(entry.isIntersecting) {
         entry.target.classList.add('active')
         observer.unobserve(entry.target)
      }
   })
}

//Наблюдатель
let observer = new IntersectionObserver(callback, options)

//Элементы, за которыми наблюдаем
let targets = document.querySelectorAll('.gallery__img')
targets.forEach(target => {
   observer.observe(target)
})