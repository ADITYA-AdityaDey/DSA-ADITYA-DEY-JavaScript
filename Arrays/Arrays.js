///////////////// Array Declaratoin //////////////////
let userDetails = {
    userName: `User 1`,
    userEmail: `xyz@email.com`
}


let arrayofPapers = [`DSA`, `C`, `JavaScript`, userDetails];

console.log(arrayofPapers);
console.log(arrayofPapers[2]);

console.log(arrayofPapers[3].userName);



////////////// Array Length Property ///////////////////////
console.log(arrayofPapers.length);



/////////////// Add/Remove items in Array//////////////////

// push and pop method
arrayofPapers.push(`Operating Systems`);
console.log(arrayofPapers);

arrayofPapers.pop();
arrayofPapers.pop();
console.log(arrayofPapers);


// shift and unshift method
arrayofPapers.unshift(`Operating Systems`);
console.log(arrayofPapers);

arrayofPapers.shift();
console.log(arrayofPapers);



///////////////// Loops in Array //////////////
for (let i = 0; i < arrayofPapers.length; i++) {
    console.log(arrayofPapers[i]);
}


let j = 0;
while (j < arrayofPapers.length) {
    console.log(arrayofPapers[j]);
    j++;
}



///////////// Inbuilt Looping Methods ///////////////////////

// map() in Arrays
const score1 = [89, 78, 90, 98, 87];

const newScore1 = score1.map((item, index, array) => {
    return item + 5;
});
console.log(newScore1);



// filter() in Arrays
const score2 = [80, 89, 54, 53, 78];

const newScore2 = score2.filter((item, index, array) => {
    return item >= 80;
});
console.log(newScore2);



// reduce() in Arrays
const score3 = [78, 57, 65, 98];

const newScore3 = score3.reduce((previous, items) => {
    return previous + items;
}, 0);
console.log(newScore3);



// some() in Arrays
const score4 = [90, 76, 87, 65];

const newScore4 = score4.some((item, index, array) => {
    return item >= 90;
});
console.log(newScore4);



// every() in Arrays
const score5 = [57, 87, 65, 56, 86];

const newScore5 = score5.every((item, index, arrays) => {
    return item > 80;
});
console.log(newScore5);



// find() in Arrays
const score6 = [43, 32, 54, 74, 89];

const newScore6 = score6.find((item, index, arrays) => {
    return item > 50;
});
console.log(newScore6);