let inputAll = document.querySelectorAll('.in');
let currencyIn = 'RUB';
let currencyOut = 'USD';
let leftText = document.querySelector('.leftText');
let rightText = document.querySelector('.rightText');
let exchangeRate;
let exchangeRateBack;
let sum = document.querySelector('.result');
let calculationResult;
let inputSum = document.querySelector('.inputSum');

function exchange(currencyIn, currencyOut) {
    fetch(`https://api.exchangerate.host/latest?base=${currencyIn}&symbols=${currencyOut}`)
    .then(result => result.json())
    .then(data => {
       exchangeRate = JSON.stringify(data.rates).split(':')[1].split('}')[0];
       calculationResult = (inputSum.value)*exchangeRate;
       sum.innerText = `${calculationResult.toFixed(2)}`;
        leftText.innerText = `1 ${currencyIn} = ${exchangeRate} ${currencyOut}`;
    })
    fetch(`https://api.exchangerate.host/latest?base=${currencyOut}&symbols=${currencyIn}`)
    .then(result => result.json())
    .then(data => {
        exchangeRateBack = JSON.stringify(data.rates).split(':')[1].split('}')[0];
        rightText.innerText = `1 ${currencyOut} = ${exchangeRateBack} ${currencyIn}`;
    })
    .catch((error) => {
        console.error(error);
        alert('Что-то пошло не так');
    })   
}

document.addEventListener("DOMContentLoaded", (e) => {
    exchange(currencyIn, currencyOut);
});

inputAll.forEach((option) => {
    option.addEventListener('click', (e) => {
        inputAll.forEach((option) => {
            option.style.color = '#C6C6C6';
            option.style.backgroundColor = '#FFFFFF';
        });
        e.target.style.color = '#FFFFFF';
        e.target.style.backgroundColor = '#833AE0'
        currencyIn = e.target.innerText;
        exchange(currencyIn, currencyOut); 
    });
});

let outputAll = document.querySelectorAll('.output');

outputAll.forEach((output) => {
    output.addEventListener('click', (e) => {
        outputAll.forEach((output) => {
            output.style.color = '#C6C6C6';
            output.style.backgroundColor = '#FFFFFF';
        });
        e.target.style.color = '#FFFFFF';
        e.target.style.backgroundColor = '#833AE0'
        currencyOut = e.target.innerText;
        exchange(currencyIn, currencyOut);
    });
});

inputSum.addEventListener('keypress', (e) => { 
    if (e.key === 'Enter') {
    exchange(currencyIn, currencyOut)
    }
})

