const arr = [1,2,2,3,3,3,5,6,7,7];

let set = new Set(arr);

set.add('John');
set.add('John');

set.add('Ivan')
    .add('Oleg');
console.log(set);


// METHODS
// set.delete(value);
// set.has(value);
// set.clear();
// set.size;


// loop
// valueAgain - такой же что и value, нужен для совместимости
set.forEach((value, valueAgain, set) => {
    console.log(value, valueAgain)
});

console.log(set.values());
console.log(set.keys());
console.log(set.entries())