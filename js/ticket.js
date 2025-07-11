const counters = document.querySelectorAll('.tickets__form-amount-count');

let total;

counters.forEach((counter) => {
  const minusBtn = counter.querySelector('.tickets-minus');
  const plusBtn = counter.querySelector('.tickets-plus');
  const span = counter.querySelector('span');

  let count = parseInt(span.textContent);

  minusBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (count > 1) {
      count--;
      span.textContent = count;
      
      updateTotal();
    }
  });

  plusBtn.addEventListener('click', (e) => {
    e.preventDefault();

    count++;
    span.textContent = count;
    
    updateTotal();
  });
});

const radios = document.querySelectorAll('.radio-input')
radios.forEach((radio) => {
  radio.addEventListener('change', () => {
    updateTotal()
  })
})

function updateTotal() {
  const selectedRadio = document.querySelector('input[name="ticket-type"]:checked')
  const ticketPrice = parseInt(selectedRadio.value)
  const basicCount = parseInt(document.querySelectorAll('.tickets__form-amount-count span')[0].textContent)
  const seniorCount = parseInt(document.querySelectorAll('.tickets__form-amount-count span')[1].textContent)
  const totalDisplay = document.querySelector('.tickets__form-total')
  
  totalDisplay.textContent = ticketPrice * basicCount * seniorCount
}


