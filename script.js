
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

inputAll.forEach((input) => {
    input.addEventListener('click', (e) => {
        inputAll.forEach((input) => {
            input.style.color = '#C6C6C6';
            input.style.backgroundColor = '#FFFFFF';
        });
        e.target.style.color = '#FFFFFF';
        e.target.style.backgroundColor = '#833AE0'
        currencyIn = e.target.innerText;
        console.log(currencyIn);
   
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
        console.log(currencyOut);
   
    });
});

switch (currencyIn) {
    case 'RUB':
        switch (currencyOut) {
            case 'RUB':
                break;
            case 'USD':
                fetch('https://api.exchangerate.host/latest?base=RUB&symbols=USD')
                .then(result => result.json())
                    .then(data => {
                        console.log(data.rates.USD)
                    })  
        }
}

console.log(inputAll);

fetch('https://api.exchangerate.host/latest?base=USD&symbols=RUB')
.then(result => result.json())
    .then(data => {
        console.log(data);
        console.log(data.rates.RUB)
    })

fetch(`https://exchangerate.host/latest?base=${currencyIn}&symbols=${currencyOut}`)
.then(result => result.json())
    .then(data => {
        console.log(data);
        // console.log(data.rates.RUB)
    })