// Место для первой задачи
function getTimeFromMinutes(minutes) {
    if (minutes < 0 || !Number.isInteger) {
        return "Error";
    }

    let hours = Math.floor(minutes / 60);
    const m = minutes % 60;
    const text = (hours === 1 || (hours > 19 && hours % 10 === 1)) ? 'година' :
        ((hours > 1 && hours < 5) || (hours > 19 && hours % 10 > 1 && hours % 10 < 5)) ? 'години' : 'година';


    return `Це ${hours} ${text} та ${m} хвилин`;
}

getTimeFromMinutes(150) //?
// => "Это 2 часа и 30 минут"

getTimeFromMinutes(50.5) //?
//=> "Это 0 часов и 50 минут"

getTimeFromMinutes(0)//?
// => "Это 0 часов и 0 минут"

getTimeFromMinutes(-150) //?
// "Ошибка, проверьте данные"


// Место для второй задачи
function findMaxNumber(a,b,c,d) {
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        return 0;
    } else{
        return Math.max(a,b,c,d)
    }
}
findMaxNumber(1, 5, 6.6, 11); //?
findMaxNumber(1, 5, '6', '10'); //?


