
// let inputs = document.querySelectorAll('.in'), index, input;
// for (index = 0; index < inputs.length; index++) {
//     input = inputs[index];
//     input.addEventListener('click', selectInCurrency);
// }

// function selectInCurrency(event) {
//     console.log('click', this.innerText);
//     event.preventDefault();
// }

let inputAll = document.querySelectorAll('.input');
let currencyIn = 'RUB';
let currencyOut = 'USD';
let leftText = document.querySelector('.leftText');
let rightText = document.querySelector('.rightText');
let exchangeRate;
let exchangeRateBack;

inputAll.forEach((input) => {
    input.addEventListener('click', (e) => {
        inputAll.forEach((input) => {
            input.style.color = '#C6C6C6';
            input.style.backgroundColor = '#FFFFFF';
        });
        e.target.style.color = '#FFFFFF';
        e.target.style.backgroundColor = '#833AE0'
        currencyIn = e.target.innerText;
        // console.log(currencyIn);
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
        // console.log(currencyOut);
        exchange(currencyIn, currencyOut);
   
    });
});

function exchange(currencyIn, currencyOut) {
    fetch(`https://api.exchangerate.host/latest?base=${currencyIn}&symbols=${currencyOut}`)
    .then(result => result.json())
    .then(data => {
       exchangeRate = JSON.stringify(data.rates).split(':')[1].split('}')[0];
    //    console.log(exchangeRate);
        leftText.innerText = `1 ${currencyIn} = ${exchangeRate} ${currencyOut}`;
        })
    fetch(`https://api.exchangerate.host/latest?base=${currencyOut}&symbols=${currencyIn}`)
    .then(result => result.json())
    .then(data => {
        exchangeRateBack = JSON.stringify(data.rates).split(':')[1].split('}')[0];
        rightText.innerText = `1 ${currencyOut} = ${exchangeRateBack} ${currencyIn}`;
    })
}


// function exchangeRate(currencyIn, currencyOut) {

// }

// switch (currencyIn) {
//     case 'RUB':
//         switch (currencyOut) {
//             case 'RUB':
//                 break;
//             case 'USD':
//                 fetch('https://api.exchangerate.host/latest?base=RUB&symbols=USD')
//                 .then(result => result.json())
//                     .then(data => {
//                         leftText.innerText = `1 ${currencyIn} = ${data.rates.USD} ${currencyOut}`;
//                     })
//                 fetch('https://api.exchangerate.host/latest?base=USD&symbols=RUB')
//                 .then(result => result.json())
//                     .then(data => {
//                         rightText.innerText = `1 ${currencyOut} = ${data.rates.RUB} ${currencyIn}`;
//                     })
//                 break;
//             case 'EUR':   
//             fetch('https://api.exchangerate.host/latest?base=RUB&symbols=EUR')
//             .then(result => result.json())
//                 .then(data => {
//                     leftText.innerText = `1 ${currencyIn} = ${data.rates.EUR} ${currencyOut}`;
//                 })
//             fetch('https://api.exchangerate.host/latest?base=EUR&symbols=RUB')
//             .then(result => result.json())
//                 .then(data => {
//                     rightText.innerText = `1 ${currencyOut} = ${data.rates.RUB} ${currencyIn}`;
//                 })
//             break;
//             case 'GBP':
//                 fetch('https://api.exchangerate.host/latest?base=RUB&symbols=GBP')
//                 .then(result => result.json())
//                     .then(data => {
//                         leftText.innerText = `1 ${currencyIn} = ${data.rates.GBP} ${currencyOut}`;
//                     })
//                 fetch('https://api.exchangerate.host/latest?base=GBP&symbols=RUB')
//                 .then(result => result.json())
//                     .then(data => {
//                         rightText.innerText = `1 ${currencyOut} = ${data.rates.RUB} ${currencyIn}`;
//                     })
//                 break;
//         }
//         break;

//     case: 'USD'
// }

// console.log(inputAll);

// fetch('https://api.exchangerate.host/latest?base=USD&symbols=RUB')
// .then(result => result.json())
//     .then(data => {
//         console.log(data.rates.RUB);
//     })

// fetch(`https://exchangerate.host/latest?base=${currencyIn}&symbols=${currencyOut}`)
// .then(result => result.json())
//     .then(data => {
//         console.log(data);
//         // console.log(data.rates.RUB)
//     })