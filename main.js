const inputPrice = document.getElementById("input-price"),
  inputTip = document.querySelectorAll("#input-tip"),
  inputPeople = document.getElementById("input-people"),
  inputTipCustom = document.getElementById("input-tip-custom"),
  resultTipAmount = document.getElementById("result-tip-amount"),
  resultTotalAmount = document.getElementById("result-total-amount"),
  resetBtn = document.getElementById("rest-btn");

// inputPrice.addEventListener("change", tipC);
// inputTipCustom.addEventListener("change", tipC);
// inputPeople.addEventListener("change", tipC);

// function tipC() {
//   const price = parseFloat(inputPrice.value);
//   const tipPercentage = parseFloat(inputTipCustom.value);
//   const people = parseInt(inputPeople.value);
//   console.log(tipPercentage);
//   console.log(people);

//   if (isNaN(price) || isNaN(tipPercentage) || isNaN(people)) {
//     console.log("Please enter valid value");
//   } else {
//     const tipAmount = parseFloat((price * tipPercentage) / 100);
//     const peopleTotalAmount = ((price + parseFloat(tipAmount)) / people).toFixed(2);
//     const peopleTipAmount = (parseFloat(tipAmount) / people).toFixed(2);

//     if (inputPrice === 0 || inputPeople === 0 || inputTipCustom === 0) {
//       resultTipAmount.textContent = "$0.00";
//       resultTotalAmount.textContent = "$0.00";
//     } else {
//       resultTipAmount.textContent = peopleTipAmount;
//       resultTotalAmount.textContent = peopleTotalAmount;
//       resetBtn.disabled = false;
//     }
//   }
// }

const inputs = [inputPrice, inputTipCustom, inputPeople];

inputs.forEach((input) => {
  input.addEventListener("change", tipCalc);
});

inputTip.forEach((buttons) => {
  buttons.addEventListener("click", tipSelect);
});

function tipSelect() {
  const tipPercentage = parseFloat(this.dataset.tip);
  inputTipCustom.value = tipPercentage;
  tipCalc();
}

function tipCalc() {
  const price = parseFloat(inputPrice.value);
  const tipPercentage = parseFloat(inputTipCustom.value);
  const people = parseFloat(inputPeople.value);

  if (isNaN(price) || isNaN(tipPercentage) || isNaN(people)) {
    console.log("Please enter valid values");
    return
  }

  if (price === 0 || tipPercentage === 0 || people === 0) {
    console.log("Please enter non-zero values");
    return;
  }

  const tipPerson = (
    parseFloat((price * tipPercentage) / 100) / people
  ).toFixed(2);
  const amountPerson = parseFloat(
    ((price * tipPercentage) / 100 + price) / people
  ).toFixed(2);

  resultTipAmount.textContent = "$" + tipPerson;
  resultTotalAmount.textContent = "$" + amountPerson;
  resetBtn.disabled = false;
}

resetBtn.addEventListener("click", resetFunc);
function resetFunc() {
  inputPrice.value = "";
  inputTipCustom.value = "";
  inputPeople.value = "";
  resultTipAmount.textContent = "$0.00";
  resultTotalAmount.textContent = "$0.00";
  resetBtn.disabled = true;
}

window.onbeforeunload = () => {
  inputPrice.value = "";
  inputTipCustom.value = "";
  inputPeople.value = "";
};
