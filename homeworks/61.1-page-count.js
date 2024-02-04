function amountOfPages(sum){

    let result = '';
    let length = 0;

    // const arr = [];
    // for (let i = 1; i <= sum; i++){
    //     arr.push(i);
    //     length = arr.reduce( (acc, item) => acc + Array.from(item.toString()).length, 0);
    //     if (length === sum) {
    //         break;
    //     }
    // }
    // return arr.length;


    for (let i = 1; i <= sum; i++){
        result += i;
        if (result.length === sum){
            length = i;
            break;
        }
    }

    return length;
}

amountOfPages(25); //?
amountOfPages(1095); //?
amountOfPages(185); //?