// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('#current').parentElement);
//
// console.log(document.querySelector('[data-current="3"]').innerText);
// console.log(document.querySelector('[data-current="3"]').nextSibling);
// console.log(document.querySelector('[data-current="3"]').previousSibling);
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// console.log(document.querySelector('[data-current="3"]').previousElementSibling);
//
// console.log(document.body.firstElementChild);
// console.log(document.body.childNodes);

console.log('---------');
for (let node of document.body.childNodes){
    if (node.nodeName === '#text') {
        continue;
    }

    console.log(node)
}
