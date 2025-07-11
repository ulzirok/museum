const counters = document.querySelectorAll('.tickets__form-amount-count');
const totalDisplay = document.querySelector('.tickets__form-total');
const radioButtons = document.querySelectorAll('input[name="ticket-type"]');

let ticketTypePrice = parseInt(document.querySelector('input[name="ticket-type"]:checked').value);


function updateTotal() {
  const counts = document.querySelectorAll('.tickets__form-amount-count span');

  const basicCount = parseInt(counts[0].textContent);
  const seniorCount = parseInt(counts[1].textContent);

  const seniorPrice = ticketTypePrice / 2;

  const total = (basicCount * ticketTypePrice) + (seniorCount * seniorPrice);

  totalDisplay.textContent = total;
}

radioButtons.forEach((radio) => {
  radio.addEventListener('change', () => {
    ticketTypePrice = parseInt(radio.value);
    updateTotal();
  });
});

counters.forEach((counter) => {
  const minusBtn = counter.querySelector('.tickets-minus');
  const plusBtn = counter.querySelector('.tickets-plus');
  const span = counter.querySelector('span');

  minusBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let count = parseInt(span.textContent);
    if (count > 1) {
      count--;
      span.textContent = count;
      updateTotal();
    }
  });

  plusBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let count = parseInt(span.textContent);
    count++;
    span.textContent = count;
    updateTotal();
  });
});

updateTotal();

