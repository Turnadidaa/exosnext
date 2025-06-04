const API_KEY = 'ea7f44e8c38fd5ada6b2af31';
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;

const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const amountInput = document.getElementById('amount');
const resultDiv = document.getElementById('result');
const convertBtn = document.getElementById('convertBtn');
const switchBtn = document.getElementById('switchBtn');

// Load supported currencies
async function loadCurrencies() {
  try {
    const res = await fetch(`${BASE_URL}/codes`);
    const data = await res.json();

    data.supported_codes.forEach(([code, name]) => {
      const option1 = new Option(`${code} - ${name}`, code);
      const option2 = new Option(`${code} - ${name}`, code);
      fromCurrency.add(option1);
      toCurrency.add(option2);
    });

    fromCurrency.value = 'USD';
    toCurrency.value = 'EUR';
  } catch (err) {
    resultDiv.textContent = 'Error loading currencies.';
  }
}

// Convert currencies
async function convertCurrency() {
  const from = fromCurrency.value;
  const to = toCurrency.value;
  const amount = parseFloat(amountInput.value);

  if (isNaN(amount) || amount <= 0) {
    resultDiv.textContent = 'Please enter a valid amount.';
    return;
  }

  try {
    const res = await fetch(`${BASE_URL}/pair/${from}/${to}/${amount}`);
    const data = await res.json();

    if (data.result === 'success') {
      resultDiv.textContent = `${amount} ${from} = ${data.conversion_result} ${to}`;
    } else {
      resultDiv.textContent = 'Conversion failed. Try again.';
    }
  } catch (err) {
    resultDiv.textContent = 'Error during conversion.';
  }
}

// Switch currencies
function switchCurrencies() {
  const temp = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;

  // Recalculate after switch
  if (amountInput.value) {
    convertCurrency();
  }
}

// Event listeners
convertBtn.addEventListener('click', convertCurrency);
switchBtn.addEventListener('click', switchCurrencies);

// Init
loadCurrencies();
