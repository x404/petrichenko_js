// fibonachi

function fib(n) {
    if (typeof(n) !== 'number' || n <= 0 || !Number.isInteger(n)) {
        return '';
    }

    let first = 0;
    let second = 1;
    let result = '';

    for (let i = 0; i < n; i++){
        if (i === n - 1){
            result += `${first}`;
        } else {
            result += `${first} `;
        }


        let third = first + second;
        first = second;
        second = third;
    }

    // sum
    return result;
}

fib(4) //?
// => "0 1 1 2"

fib(7) //?
// => "0 1 1 2 3 5 8"

fib('7') //?
//  => ""

fib(0) //?

fib(1) //?
//  => "0"

fib(0) //?
//  => ""