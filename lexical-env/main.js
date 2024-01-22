let value = 2; debugger;

function showValue() {debugger;
 console.log("Value from showValue: " + value); debugger; // 3
}

function wrapper() {
 let value = 3;debugger;
 console.log("Value from wrapper: " + value); debugger; // 3

 showValue();debugger;
}
debugger;
wrapper();