const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
]

const budget = [5000, 12000, 2500];
const map = new Map();

shops.forEach( (shop,i) => {
    map.set(shop, budget[i])
});

// map.set(shops[0], 5000);
// map.set(shops[1], 12000);
// map.set(shops[2], 2500);

// or
map.set(shops[0], 5000)
    .set(shops[1], 12000)
    .set(shops[2], 2500);

console.log(map);
console.log(map.get(shops[0]));
console.log(map.has(shops[0]));

// map.delete(key);
// map.clear();
map.size; //?



//
const map2 = new Map([
    [{paper: 400}, 8000]
])

shops.forEach( (shop,i) => {
    map2.set(shop, budget[i])
});

console.log(map2);


// Map's method's
//keys()
console.log(map2.keys());
const goods = [];
for (let shop of map2.keys()){
    console.log(shop);
    goods.push(Object.keys(shop)[0]);
}
console.log(goods)

//entries()
for (let [shop, price] of map2.entries()){
    console.log(price, ':', shop);
    // goods.push(Object.keys(shop)[0]);
}

//forEach()
map2.forEach((value, key, map) => {
    console.log(key, value);
})



// Object -> Map
const user = {
    name: 'Alex',
    surname: 'Smith',
    age: 20,
    showMyPublicData: function (){
        console.log(`${this.name} ${this.surname}`);
    }
}

const userMap = new Map(Object.entries(user));
console.log(userMap);


// Map -> Object
const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);