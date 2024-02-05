const user = {
    name: 'Alex',
    surname: 'Smith',
    a: 123,
    showMyPublicData: function (){
        console.log(`${this.name} ${this.surname}`);
    }
}

console.log(Object.getOwnPropertyDescriptor(user, 'name'));
Object.defineProperty(user, 'name', {
    writable : false
})

user.name = '123' //?
// user


Object.defineProperty(user, 'nick', {
    value : 'may'
})


console.log(user) //?
console.log(Object.getOwnPropertyDescriptor(user, "nick")) ; //?


// add new property
Object.defineProperty(user, 'birthday', {
    value: prompt('Date?'),
    enumerable: true,
    configurable: true
})

console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));



// hide method showMyPublicData in output
Object.defineProperty(user, 'showMyPublicData', {
    enumerable: false,
})
for (let key in user){
    console.log('key=', key)
}


// print PI number
console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));


// many changes
Object.defineProperties(user, {
    name: {writable: false},
    surname: {writable: false},
})
