function createCounter() { //debugger;
    let counter = 0; //debugger;
    // console.log(counter);
    const myFunction = function (){ //debugger;
        counter = counter + 1;
        return counter;
    }
    return myFunction;
}
const increment = createCounter(); //debugger;
let c1 = increment();
let c2 = increment();
let c3 = increment();

console.log(c1, c2, c3);