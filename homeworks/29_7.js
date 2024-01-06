const a = 'Lorem ipsum';
a.slice(1,4) //?
a.slice(1,-4) //?

a.substring(4,1) //?

a.substring(2,2) //?


// Место для первой задачи
function calculateVolumeAndArea(a) {
    let res = '';
    const textError = 'При вычислении произошла ошибка';

    if (typeof(a) === 'number' && a > 0 && Number.isInteger(a)){
        const v = a * a * a;
        const s = 6 * a * a;
        res = `Объем куба: ${v}, площадь всей поверхности: ${s}`
    } else {
        res = textError;
    }
    return res;
}

calculateVolumeAndArea(5); //?
calculateVolumeAndArea(15); //?
calculateVolumeAndArea('15'); //?
calculateVolumeAndArea(15.5); //?
calculateVolumeAndArea(-15); //?


// Место для второй задачи
function getCoupeNumber(n) {
    const textError1 = 'Ошибка. Проверьте правильность введенного номера места';
    const textError2 = 'Таких мест в вагоне не существует';

    if (n < 0 || !Number.isInteger(n)) {
        return textError1;
    } else if (n === 0 || n > 36) {
        return textError2;
    }

    return Math.ceil(n/4);
}

getCoupeNumber(33) //?
getCoupeNumber(7)//?
getCoupeNumber(300)//?
getCoupeNumber(0) //?
getCoupeNumber(7.7) //?
getCoupeNumber(-10)//?
getCoupeNumber('Hello')//?