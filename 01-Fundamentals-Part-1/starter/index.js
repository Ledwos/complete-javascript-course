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

function tipCalc(bill) {
    if (bill >= 50 & bill <= 300) {
        let tip = bill * 0.15;
        console.log(`The bill is ${bill}, tip ${tip} for a total of ${bill + tip}`)
    } else if (bill > 300) {
        let tip = bill * 0.2;
        console.log(`The bill is ${bill}, tip ${tip} for a total of ${bill + tip}`)
    } else {
        console.log(`The bill is ${bill}, no need to tip`);
    }
};

tipCalc(275);
tipCalc(40);
tipCalc(430);

// JS Fundamentals -Part 2
console.log("\n \n JS Fundamentals -Part 2");
// Q1
console.log('Q1');

const matchData2 = [{
    'dolphins': [44,23,71],
    'koalas': [65,54,49]
},{
    'dolphins': [85,54,41],
    'koalas': [23,34,27]
}

];

calcAvg = (points) => {
    for (let x = 0; x < points.length; x++) {
        sumScore = (tot, score) => tot + score;
        let avgDolphins = Math.round(points[x].dolphins.reduce(sumScore, 0) / 3);
        let avgKoalas = Math.round(points[x].koalas.reduce(sumScore, 0) / 3);
        checkWinner(avgDolphins, avgKoalas);
    }
};

checkWinner = (a, b) => {
    if (a >= (2 * b)) {
        console.log(`Dolphins: ${a} | Koalas: ${b} | Dolphins Win!`);
    } else if (b >= (2*a)) {
        console.log(`Dolphins: ${a} | Koalas: ${b} | Koalas Win!`);
    } else {
        console.log(`Dolphins: ${a} | Koalas: ${b} | No Winner`);
    }
};

calcAvg(matchData2);

// Q2
console.log('Q2');

let bills = [125,555,44];

calcTip = (arr) => {
    let totArr = [];
    for (let x = 0; x < arr.length; x++) {
        if (arr[x] >= 50 & arr[x] <= 300 ){
            totArr.push(arr[x] + (arr[x] * 0.15));
        } else if (arr[x] > 300) {
            totArr.push(arr[x] + (arr[x] * 0.2));
        } else {
            totArr.push(arr[x]);
        }
    };
    console.log(totArr);
};

calcTip(bills);

// Q3
console.log('Q3');

const bmiData = [{
    'name': 'Mark',
    'mass': 78,
    'height': 1.69
},{
    'name': 'John',
    'mass': 92,
    'height': 1.95
}];

calcBMIAgain = (data) => {
    let bmiObject = {}
    for (let x = 0; x < data.length; x++) {
        bmiObject[data[x].name] =  Math.round(data[x].mass / (data[x].height ** 2));
    };
    console.log(bmiObject);
    if (bmiObject.John > bmiObject.Mark) {
        console.log(`John\'s BMI (${bmiObject.John}) is higher than Mark\'s (${bmiObject.Mark})`);
    } else if (bmiObject.Mark > bmiObject.John) {
        console.log(`Mark\'s BMI (${bmiObject.Mark}) is higher than John\'s (${bmiObject.John})`);
    }
}

calcBMIAgain(bmiData);

// Q4
console.log('Q4');

console.log('same as Q2, just a different data set');

let tipData2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86 ,52];
calcTip(tipData2);

// normally would use reduce, but question specified for loop
calcAverage = (billArr) => {
    let billSum = 0;
    for (let x = 0; x < billArr.length; x++) {
        billSum += billArr[x];
    };
    console.log(billSum / billArr.length);
};

calcAverage(tipData2);

// Dev Skills & Editor Setup
console.log('\n \n Dev Skills & Editor Setup');

// Q1
console.log('Q1');

const weatherData1 = [17,21,23];
const weatherData2 = [12,5,-5,0,4];

printForecast = (arr) => {
    for (let x = 0; x < arr.length; x++) {
        console.log(`${arr[x]}\u00B0C in ${x +1} day${x == 0 ? '' : 's'}`);
    }
};
console.log('dataset 1');
printForecast(weatherData1);
console.log('\n dataset 2');
printForecast(weatherData2);

