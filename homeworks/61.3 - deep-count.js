function deepCount(a) {
    let count = a.length;

    a.forEach(el => {
        if (Array.isArray(el)){
            count +=deepCount(el);
        }
    })
    return count;
}

function deepCount2(a){
    let count = a.length;
    for (let i=0; i<a.length; i++) if (Array.isArray(a[i])) count += deepCount(a[i]);
    return count;
}
function deepCount3(a){
    return a.reduce((s,e)=>s+(Array.isArray(e) ? deepCount(e) : 0),a.length);
}

function deepCount4(a){
    let i = a.length;
    for (let val of a) {
        if (Array.isArray(val)) i +=  deepCount(val);
    }
    return i;
}

// deepCount([1, 5, 3]); //?
deepCount(["1", 5, "3", ["10"]]); //?
deepCount2(["1", 5, "3", ["10"]]); //?
deepCount3(["1", 5, "3", ["10"]]); //?

deepCount([1, 2, [3, 4, [5]]]); //?
deepCount2([1, 2, [3, 4, [5]]]); //?
deepCount3([1, 2, [3, 4, [5]]]); //?
deepCount4([1, 2, [3, 4, [5]]]); //?

// deepCount4([]); //?
deepCount4([[[[[[[[[]]]]]]]]]); //?