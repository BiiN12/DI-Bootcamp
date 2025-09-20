const apiUrl =
  "https://v6.exchangerate-api.com/v6/d4f4d1c7bad268e733210628/pair/";
const convertedAmount = document.getElementById("convertedAmount");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");
const switchBtn = document.getElementById("switchBtn");

async function currencyConverter(from, to, amount) {
  try {
    let response = await fetch(`${apiUrl}${from}/${to}`);
    let data = await response.json();
    // console.log(data);

    let conversionRate = data.conversion_rate;
    convertedAmount.value = (amount * conversionRate).toFixed(2);
    result.innerHTML = `${amount} ${from} = ${convertedAmount.value} ${to}`;
  } catch (e) {
    console.log(e);
  }
}

convertBtn.addEventListener("click", () => {
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;
  const amount = document.getElementById("amount").value;

  if (!amount) {
    alert("Please enter an amount");
  } else {
    currencyConverter(fromCurrency, toCurrency, amount);
  }
});

switchBtn.addEventListener("click", () => {
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;
  const amount = document.getElementById("amount").value;

  document.getElementById("fromCurrency").value = toCurrency;
  document.getElementById("toCurrency").value = fromCurrency;

  if (!amount) {
    alert("Please enter an amount");
  } else {
    currencyConverter(fromCurrency, toCurrency, amount);
  }
});
