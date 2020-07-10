const btn = document.querySelector('#calculate');
const billAmount = document.querySelector('#bill-amount');
const people = document.querySelector('#people');
const tipAmount = document.querySelector('#service-tip');

function calculate() {
  let total = 0;
  total = (billAmount.value * tipAmount.value) / people.value;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);

  document.querySelector('#tip').textContent = total;
  document.querySelector('#tip-amount').style.display = 'block';

  if (billAmount.value === '' || tipAmount.value === '') {
    alert('Please enter values');
    document.querySelector('.tip-amount').style.display = 'none';
    return;
  }

  if (people === '' || people <= 1) {
    people = 1;
    document.querySelector('#tip-amount').style.display = 'none';
  } else {
    document.querySelector('#tip-amount').style.display = 'block';
  }
}

btn.addEventListener('click', calculate);
