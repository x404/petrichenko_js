const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length === 0) return `Семья пуста`;
    const names = arr.join(' ');
    return `Семья состоит из: ${names}`
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase());
    })
}

