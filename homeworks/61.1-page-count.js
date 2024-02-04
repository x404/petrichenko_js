function amountOfPages(n){
    const arr = [];
    let count = 0;
    for (let i = 1; i <= n; i++){
        arr.push(i);
        count = arr.reduce( (acc, item) => acc + Array.from(item.toString()).length, 0);
        if (count === n) {
            break;
        }
    }
    return arr.length;
}

amountOfPages(25); //?
amountOfPages(1095); //?
amountOfPages(185); //?