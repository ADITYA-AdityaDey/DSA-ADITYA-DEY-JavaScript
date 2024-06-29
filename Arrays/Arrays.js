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



// Spread & Rest Operators
const score7 = [1, 2, 3, 4, 5];
const score8 = [6, 7, 8, 9, 10];

const totalScore = [...score7, ...score8]; // Spread Operator
console.log(totalScore);


function restOp(...values){ // Rest Operator
    return values;
}
console.log(restOp(score7, score8, `JavaScript`));



// concat() in Arrays
const score9 = [1, 2, 3];
const score10 = [4, 5, 6];
const concatArray = score9.concat(score10);
console.log(concatArray);



// slice() in Arrays
const papersArr = [`DSA`, `DAA`, `OOP`];
const sliceArr = papersArr.slice(0,2);
const anotherSliceArr1 = papersArr.slice(-1);
const anotherSliceArr2 = papersArr.slice(-2);

console.log(sliceArr);
console.log(anotherSliceArr1);
console.log(anotherSliceArr2);



// splice() in Arrays
const arrforSplice = [`JavaScript`, `DSA`, `OS`];

arrforSplice.splice(0, 2, `Javavcript`);

console.log(arrforSplice);



// fill() in Arrays
const arrforFill = [1, 2, 3, 4, 5];
arrforFill.fill(1, 3);
console.log(arrforFill);



// findindex() in Arrays
const arrforFI = [10, 20, 30, 40, 50];
const findIndex = arrforFI.findIndex((item) => item === 40);

console.log(findIndex);



// flat() in Arrays
const arrforFlat = [1, 2, [3, 4, 5, [6, 7], 8, 9], 10];

const flattendArr = arrforFlat.flat(2);

console.log(flattendArr);



// 