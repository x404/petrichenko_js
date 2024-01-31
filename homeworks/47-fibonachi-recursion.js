function fib(n){
    if (n <= 1){
        return 1
    } else {
        return  fib(n-1) + fib(n-2)
    }
}


console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(10));
// console.log(fib(20));
// console.log(fib(30));
// console.log(fib(40));

// 1, 1, 2, 3, 5, 8, 13, 21, 34,