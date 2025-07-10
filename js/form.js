//
const inputDate = document.getElementById('form__date')
const todayDate = new Date().toISOString().split('T')[0]
inputDate.setAttribute('min', todayDate);
//
const realDateInput = document.getElementById('form__date');
const fakeDateText = document.getElementById('fakeDateText');
const fakeDateArrow = document.getElementById('fakeDateArrow');

realDateInput.addEventListener('change', () => {
  const selectedDate = realDateInput.value;
  fakeDateArrow.style.display = 'none'
  fakeDateText.textContent = `${selectedDate}`;
});
//
const realTimeInput = document.getElementById('form__time');
const realTimeText = document.getElementById('fakeTimeText');

realTimeInput.addEventListener('input', () => {
  const selectedTime = realTimeInput.value
  realTimeText.textContent = `${selectedTime}`
})
//
const realTypeInput = document.getElementById('form__type');
const realTypeText = document.getElementById('fakeTypeText');

realTypeInput.addEventListener('input', () => {
  const selectedTime = realTypeInput.value
  realTypeText.textContent = `${selectedTime}`
})
//


