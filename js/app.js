const btn = document.querySelector("#calculate");
const closeBtn = document.querySelector(".closebtn");
const billAmount = document.querySelector("#bill-amount");
const tipSlider = document.querySelector("#tipRange");
const tipOutput = document.querySelector("#tip");
const splitSlider = document.querySelector("#splitRange");
const splitOutput = document.querySelector("#split");

tipOutput.textContent = tipSlider.value;
splitOutput.textContent = splitSlider.value;

tipSlider.oninput = function () {
  tipOutput.textContent = this.value + "%";
};

splitSlider.oninput = function () {
  splitOutput.textContent = this.value;
};

function calculate() {
  let total = 0;
  let billTotal = 0;
  let splitTotal = 0;
  total = (billAmount.value * tipSlider.value) / (splitSlider.value * 100);
  billTotal =
    (billAmount.value * tipSlider.value) / 100 + Number(billAmount.value);
  splitTotal = billTotal / splitSlider.value;
  billTotal = Math.round(billTotal * 100) / 100;
  billTotal = billTotal.toFixed(2);
  splitTotal = Math.round(splitTotal * 100) / 100;
  splitTotal = splitTotal.toFixed(2);

  document.querySelector("#bill-total").textContent = billTotal;
  document.querySelector("#split-total").textContent = splitTotal;

  if (billAmount.value === "") {
    document.querySelector(".alert").style.display = "block";
    return;
  }
}

btn.addEventListener("click", calculate);

closeBtn.addEventListener("click", function () {
  this.parentElement.style.display = "none";
});
