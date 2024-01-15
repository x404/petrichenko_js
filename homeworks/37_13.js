const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let area = 0;
    data.shops.forEach(shop => {
        area += shop.length * shop.width
    });
    const volume = area * data.height;
    const price = volume * data.moneyPer1m3;
    return price > data.budget ? 'Бюджета недостаточно' : 'Бюджета достаточно';
}

isBudgetEnough(shoppingMallData) //?