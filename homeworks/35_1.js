const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(obj){
        const langs = obj.skills.languages.join(' ').toUpperCase();
        return `Мне ${obj.age} и я владею языками: ${langs}`;
    }
};

function showExperience(plan) {
    const {skills} = plan;
    return skills.exp;
}

function showProgrammingLangs(plan) {
    const {skills} = plan;
    if (Object.keys(skills.programmingLangs).length > 0){
        const entries = Object.entries(skills.programmingLangs);
        let str = '';
        entries.forEach( el => {
            str += `Язык ${el[0]} изучен на ${el[1]}\n`
        })
        return str;
    }
    return '';
}

showProgrammingLangs(personalPlanPeter); //?
personalPlanPeter.showAgeAndLangs(personalPlanPeter); //?