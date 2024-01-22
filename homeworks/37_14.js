// #studies
// Arrays
// Students groups

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort(); //?
    const groups = [];
    const restStudents = arr.length - 3 * Math.floor(arr.length / 3); //?
    for (let i = 0; i < (arr.length - restStudents); i = i + 3) {
        const group = arr.slice(i, 3 + i); //?
        groups.push(group);
    }

    restStudents > 0 ? groups.push(`Оставшиеся студенты: ${arr.slice(-restStudents).join(', ')}`) : groups.push(`Оставшиеся студенты: -`);
    return groups;
}

sortStudentsByGroups(students) //?