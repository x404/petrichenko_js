// create triangle with '*'

const lines = 5;
let result = '\n';

for (let i = 0; i < lines; i++){
    for (let j = 0; j <= lines - i; j++){
        result += '_';
    }
    for (let j = 0; j <= 2 * i; j++){
        result += '*';
    }
    result += '\n';
}
// Проверяется именно переменная result, формируйте строку в ней


console.log(result);