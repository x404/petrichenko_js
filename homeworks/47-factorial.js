function factorial(n) {

    if (typeof(n) !== 'number' || !Number.isInteger(n)) {
        return "Error";
    }

   if (n > 1){
       let b =  n * factorial(n - 1); debugger;
       return b;
   } else {
       let b = 1; debugger;
       return b;
   }
}

console.log(factorial(4))