let js = 'amazing';
if (js === 'amazing') alert('JavaScript is Fun!');

// Q1
console.log('Q1');
function bmi (mass, height) {
    return mass / (height * height);
};

// Mark
const massMark = 78;
const heightMark = 1.69;
// John
const massJohn = 92;
const heightJohn = 1.95;
// BMI
const bmiMark = bmi(massMark, heightMark);
const bmiJohn = bmi(massJohn, heightJohn);
const markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn, markHigherBMI);

// Q2
console.log('Q2');
if (markHigherBMI) {
    console.log('Mark\'s BMI is higher than John\'s!');
} else {
    console.log('John\'s BMI is higher than Mark\'s');
};

// Q3
console.log('Q3');
const matchData = [{
    'dolphins': [96,108,89],
    'koalas': [88,91,110]
},{
    'dolphins': [97,112,101],
    'koalas': [109,95,123]
}, {
    'dolphins': [97,112,101],
    'koalas': [109,95,106]
}];

// for (let x = 0; x <= matchData.length; x++) {
//     console.log(matchData[x][0]);
// };

function calcScore(points) {
    let dolphinsWin = 0;
    let koalasWin = 0;
    for (let x = 0; x < points.length; x++) {
        function sumScore(tot, score) {
            return tot + score;
        };
        let dolphinAvg = Math.round(points[x].dolphins.reduce(sumScore, 0) / 3);
        let koalaAvg = Math.round(points[x].koalas.reduce(sumScore, 0) / 3);
        if (dolphinAvg > koalaAvg & dolphinAvg >= 100) {
            dolphinsWin += 1;
        } else if (koalaAvg > dolphinAvg & koalaAvg >= 100) {
            koalasWin += 1;
        }
        console.log(`Dolphins: ${dolphinAvg} | Koalas: ${koalaAvg}`);
    };
    if (dolphinsWin > koalasWin)   {
        console.log('Dolphins Won!');
    } else {
        console.log('Koalas Won!');
    }
};

calcScore(matchData);

// Q4
console.log('Q4');



