const inner = document.querySelector('.welcome__slider-inner');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const liAll = document.querySelectorAll('.welcome__slider-indicators li');
const currentSpan = document.getElementById('current');
const totalSpan = document.getElementById('total');
const welcomeImg = document.querySelectorAll('.welcome__img');

let move = 0;
let i = 0;
totalSpan.textContent = liAll.length.toString().padStart(2, '0');

next.addEventListener('click', () => {
  right();
});
prev.addEventListener('click', () => {
  left();
});

function right() {

  liAll[i].classList.remove('active');

  i++;
  if (i === liAll.length) {
    i = 0;
  }
  liAll[i].classList.add('active');

  move -= welcomeImg[i].offsetWidth;
  if (move < -welcomeImg[i].offsetWidth * (liAll.length - 1)) {
    move = 0;
  }
  
  inner.style.left = move + 'px';
  
  updateCounter()
}

function left() {

  liAll[i].classList.remove('active');
  i--;
  if (i < 0) {
    i = liAll.length - 1;
  }
  liAll[i].classList.add('active');

  if (move === 0) {
    move = -welcomeImg[i].offsetWidth * (liAll.length - 1);
  } else {
    move += welcomeImg[i].offsetWidth;
  }

  inner.style.left = move + 'px';
  updateCounter()
}

liAll.forEach((li, index) => {
  li.addEventListener('click', function () {
    liAll.forEach((li) => {
      li.classList.remove('active');
    });
    
    this.classList.add('active');
    i = index
    
    move = -welcomeImg[i].offsetWidth * index;
    inner.style.left = move + 'px';
    
    updateCounter()
  });
})

function updateCounter () {
  currentSpan.textContent = (i + 1).toString().padStart(2, '0')
}



