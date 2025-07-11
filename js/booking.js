const inputDate = document.querySelector('input[type="date"]');
const selectTime = document.querySelector('select[name="form__time"]');
const selectType = document.querySelector('select[name="form__type"]');

inputDate.addEventListener('change', () => {
  const value = inputDate.value;
  const date = new Date(value);
  const formatted = date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  const dateDesc = document.querySelector('.booking__blok1-date');
  dateDesc.innerHTML = `<img src="../assets/icon/form/date.svg" alt="date">${formatted}`;
});


selectTime.addEventListener('change', () => {

  const timeValue = selectTime.value;
  const timeDesc = document.querySelector('.booking__blok1-time');
  timeDesc.innerHTML = `<img src="../assets/icon/form/time.svg" alt="time">${timeValue}`;
});

selectType.addEventListener('change', () => {

  const typeValue = selectType.value;
  const typeDesc = document.querySelector('.booking__blok1-type');
  typeDesc.innerHTML = `<img src="../assets/icon/form/check_circle_outline.svg" alt="check_circle">${typeValue}`;
});



//

const typeSelect = document.getElementById('form__type');
const basicSpan = document.querySelector('.booking__span1');
const seniorSpan = document.querySelector('.booking__span2');

const displayBasicCount = document.querySelector('.booking__spanDisp1');
const displaySeniorCount = document.querySelector('.booking__spanDisp2');

const basicPriceBlock = document.getElementById('basic-price');
const seniorPriceBlock = document.getElementById('senior-price');
const totalBlock = document.getElementById('total-price');

function updatePrices() {
  const selectedOption = typeSelect.options[typeSelect.selectedIndex];

  const basicTicketPrice = parseInt(selectedOption.dataset.price);
  const seniorTicketPrice = Math.floor(basicTicketPrice / 2);

  const basicCount = parseInt(basicSpan.textContent);
  const seniorCount = parseInt(seniorSpan.textContent);

  const totalBasic = basicTicketPrice * basicCount;
  const totalSenior = seniorTicketPrice * seniorCount;
  const total = totalBasic + totalSenior;


  displayBasicCount.textContent = basicCount;
  displaySeniorCount.textContent = seniorCount;

  basicPriceBlock.textContent = `${totalBasic} $`;
  seniorPriceBlock.textContent = `${totalSenior} $`;
  totalBlock.textContent = `${total} $`;
}

const minusBtn1 = document.querySelector('.booking__minus1');
const plusBtn1 = document.querySelector('.booking__plus1');
const minusBtn2 = document.querySelector('.booking__minus2');
const plusBtn2 = document.querySelector('.booking__plus2');

minusBtn1.addEventListener('click', () => {
  let count = parseInt(basicSpan.textContent);
  if (count > 0) {
    count--;
    basicSpan.textContent = count;
    updatePrices();
  }
});

plusBtn1.addEventListener('click', () => {
  let count = parseInt(basicSpan.textContent);
  count++;
  basicSpan.textContent = count;
  updatePrices();
});

minusBtn2.addEventListener('click', () => {
  let count = parseInt(seniorSpan.textContent);
  if (count > 0) {
    count--;
    seniorSpan.textContent = count;
    updatePrices();
  }
});

plusBtn2.addEventListener('click', () => {
  let count = parseInt(seniorSpan.textContent);
  count++;
  seniorSpan.textContent = count;
  updatePrices();
});

typeSelect.addEventListener('change', () => {
  updatePrices();
});

//

const form = document.getElementById('form');
const inputErrorEls = document.querySelectorAll('.error-element');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let isValid = true;
  let name = document.getElementById('name');
  let email = document.getElementById('email');



  const clearError = () => {
    const errors = document.querySelectorAll('.error-text');
    errors.forEach((error) => {
      error.remove();
    });
  };



  const errorForm = (messageText, inputName) => {
    let errorEl = document.createElement('div');
    errorEl.className = 'error-text';
    errorEl.textContent = messageText;
    errorEl.style.color = 'red';
    errorEl.style.fontSize = '14px';
    errorEl.style.fontWeight = '500';
    errorEl.style.width = '100%';
    inputName.parentElement.appendChild(errorEl);
    isValid = false;
  };

  name.addEventListener('focus', () => {
    clearError();
    inputErrorEls[0].style.border = ''
  });

  email.addEventListener('focus', () => {
    clearError();
    inputErrorEls[1].style.border = ''
  });

  clearError();

  if (!name.value.trim()) {
    errorForm('Please enter your name!', name);
    inputErrorEls[0].style.border = '3px solid red';
  }

  if (!emailRegex.test(email.value.trim())) {
    errorForm('Please enter a valid email address!', email);
    inputErrorEls[1].style.border = '3px solid red';
  }

  if (isValid) {
    alert('Form submitted successfully!');
    document.getElementById('form').reset();
  }
})

















