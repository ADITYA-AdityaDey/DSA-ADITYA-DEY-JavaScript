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


function restOp(...values) { // Rest Operator
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
const sliceArr = papersArr.slice(0, 2);
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



// reverse() in Arrays
const arrforReverse = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reversedArr = arrforReverse.reverse();

console.log(reversedArr);



// sort() in Arrays
const arrforSort = [23, 46, 87, 89, 6, 32, 14, 65];

const sortedArr = arrforSort.sort((a, b) => a - b);

console.log(sortedArr);



//////////////////////////////// DSA Interview Question on Array in JavaScript /////////////////////////////////////

// Question 1: Second Largest Number

// [10, 20, 50, 10, 45, 78, 98, 100, 100]



// Solution 1: Brute Force Approach

function secondLargest(arrforSecondLargest) {
    const uniqueEleArray = Array.from(new Set(arrforSecondLargest)); // O(n)

    uniqueEleArray.sort((a, b) => { // O(nlogn)
        return b - a;
    });

    if (uniqueEleArray.length >= 2) {
        return uniqueEleArray[1];
    } else {
        return -1;
    }
}

console.log(secondLargest([10, 20, 50, 10, 45, 78, 98, 100, 100]));

// Time Complexity: O(nlogn)



// Solution 2: Optimised Approach (Not using any inbuilt method)

function secondLargestFun(arrayforSecondLargestEle) {
    let largestEle = Number.NEGATIVE_INFINITY;
    let secondLargestEle = Number.NEGATIVE_INFINITY;

    for (let i = 0; i <= arrayforSecondLargestEle.length; i++) {    // O(arrayforSecondLargestEle.length) => O(n)
        if (arrayforSecondLargestEle[i] > largestEle) {
            secondLargestEle = largestEle;
            largestEle = arrayforSecondLargestEle[i];
        } else if (arrayforSecondLargestEle[i] != largestEle && arrayforSecondLargestEle[i] > secondLargestEle) {
            secondLargestEle = arrayforSecondLargestEle[i];
        }
    }
    return secondLargestEle;
}

console.log(secondLargestFun(([10, 20, 50, 10, 45, 78, 98, 100, 100])));

// Time Complexity: O(arrayforSecondLargestEle.length) => O(n)
// Space Complexity: O(1) {because create only one Array}





//////////////// Question 2 /////////////////////////////////
// Question 2: Rotate array by k
// Given an integer array nums, rotate the array to the right by k stepa.
// where k is non negative

// Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 3 ----> Output: [5, 6, 7, 1, 2, 3, 4]
// Input: nums = [-1, -100, 3, 99], k = 2 ----------> Output: [3, 99, -1, -100]






// Solution 1: Using inbuilt Functions


// Process: [1, 2, 3, 4, 5, 6, 7] => [7, 1, 2, 3, 4, 5, 6] => [6, 7, 1, 2, 3, 4, 5] => [5, 6, 7, 1, 2, 3, 4]

function rotateArr(nums, k) {
    let size = nums.length;

    if (size < k) {
        k = k % size;
    }

    const rotated = nums.splice(size - k, size); // [5, 6, 7]       // O(n)
    nums.unshift(...rotated); // O(n)

    return nums;
}
console.log(rotateArr([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateArr([-1, -100, 3, 99], 2));





// Time Complexiyt: O(n) + O(n) = O(n)




// Solution 2: without inbuit functions

function rotateArray(nums, k) {
    let size = nums.length;

    if (size < k) {
        k = k % size;
    }

    reverse(nums, 0, nums.length - 1); // it's reverse the whole array [7, 6, 5, 4, 3, 2, 1]            // O(n)
    reverse(nums, 0, k - 1); // it's reverse upto k time(5, 6, 7) [5, 6, 7, 4, 3, 2 ,1]                   // O(k)
    reverse(nums, k, nums.length - 1); // it's now reverse remaining part [5, 6, 7, 1, 2, 3, 4]         // O(n - k)

    return nums;
}

// process: [1, 2, 3, 4, 5, 6, 7] => reverse the whole array [7, 6, 5, 4, 3, 2, 1] => reverse upto k time(5, 6, 7) [5, 6, 7, 4, 3, 2 ,1] => now reverse remaining part [5, 6, 7, 1, 2, 3, 4]

function reverse(nums, left, right) {
    while (left < right) {
        const temp = nums[left];
        nums[left++] = nums[right];
        nums[right--] = temp;
    }
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateArray([-1, -100, 3, 99], 2));



// swapping
// [1, 2, 3, 4]
// left = 0
// right = 3

// temp = 1
// nums[0] = 4
// nums[3] = 1


// after swapping [4, 2, 3, 1]




// Time Complexity: O(n)   // remove the constant from O(n) + O(k) + O(n - k) and get/choose the linear time complexity O(n)
// Space Complexity: O(1) // because i don't create another array just use only one array






//////////////// Question 3 ///////////////////
// Question 3: Remove duplicates from sorted array
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique elements appears only once.
// The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Input: [1, 2, 2] --------> output: 2, [1, 2, _]
// Input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] -------------> 5, [0, 1, 2, 3, 4,_, _, _, _, _]



// Solution 1: With inbuilt js methods

// Process: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] ----> splice(i+1, i)

function removeDuplicatesFun(nums) {
    for (let i = 0; i < nums.length - 1; i++) {    // O(n)
        if (nums[i] === nums[i+1]) {
            nums.splice(i+1, 1);                   // O(1)
            i--;
        }
    }
    return nums.length;
}

console.log(removeDuplicatesFun([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicatesFun([1, 2, 2]));


// Time Complexity: O(n)
// Space Complexity: O(1)



// Solution 2: Without inbuilt Methods

function removeDupliWithoutInbuiltMethod(nums) {
    if (nums.length === 0) return 0;
    let i = 0;

    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i ++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}
console.log(removeDupliWithoutInbuiltMethod([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDupliWithoutInbuiltMethod([1, 2, 2]));


// Time Complexity: O(n)
// Space Complexity: O(1)