window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
    //collects values from user
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let values = { amount: 10000, years: 10, rate: 4.5}; //example values
  let amountUI = document.getElementById("loan-amount");//plugs in user value
  amountUI.value = values.amount;
  let yearsUI = document.getElementById("loan-years");
  yearsUI.value = values.years;
  let rateUI = document.getElementById("loan-rate");
  rateUI.value = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const CurrentUIValues = getCurrentUIValues(); //gets the new input
  updateMonthly(calculateMonthlyPayment(CurrentUIValues)); //shows input values
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) /12; 
  const n = Math.floor(values.years * 12); // get total months as whole num
  return (
    (monthlyRate * values.amount) /
    (1 - Math.pow((1 + monthlyRate), -n)) //returns value based on raised num
  ).toFixed(2); // allows 2 decimal places
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUI = document.getElementById('monthly-payment');
  //grabs amount in string form
  monthlyUI.innerText = '$' + monthly; 
  //adds payment to text box and attach $ to shown amount
}
