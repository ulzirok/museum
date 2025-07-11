//
const realDateInput = document.getElementById('form__dateID');
const fakeDateText = document.getElementById('fakeDateText');
const fakeDateArrow = document.getElementById('fakeDateArrow');

document.addEventListener('DOMContentLoaded', () => {
  const inputDate = document.getElementById('form__dateID');
  const todayDate = new Date().toISOString().split('T')[0];
  inputDate.setAttribute('min', todayDate);
});
//
realDateInput.addEventListener('change', () => {
  const selectedDate = realDateInput.value;
  fakeDateArrow.style.display = 'none';
  fakeDateText.textContent = `${selectedDate}`;
});
//
const realTimeInput = document.getElementById('form__time');
const realTimeText = document.getElementById('fakeTimeText');

realTimeInput.addEventListener('input', () => {
  const selectedTime = realTimeInput.value;
  realTimeText.textContent = `${selectedTime}`;
});
//
const realTypeInput = document.getElementById('form__type');
const realTypeText = document.getElementById('fakeTypeText');

realTypeInput.addEventListener('input', () => {
  const selectedTime = realTypeInput.value;
  realTypeText.textContent = `${selectedTime}`;
});
//
const selectYear = document.getElementById('booking__blok4-select');
const currentYear = new Date().getFullYear();

for (let i = 0; i <= 10; i++) {
  const year = currentYear + i;
  const option = document.createElement('option');
  option.value = year;
  option.textContent = year;
  selectYear.appendChild(option);
}


