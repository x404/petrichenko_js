const someString = 'This is some strange string';

function reverse(str) {
    if (typeof str !== 'string') {
        return 'Ошибка!';
    }
    return Array.from(str).reverse().join('');
}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    if (arr.length === 0){
        return 'Нет доступных валют';
    }

    let str = 'Доступные валюты:\n';
    arr.forEach(currency => {
        if (currency !== missingCurr){
            str += `${currency}\n`;
        }
    });
    return str;
}