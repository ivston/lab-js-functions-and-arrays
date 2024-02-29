// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return a, b;
  }
}

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(words) {
  let longestWord = "";
  if (words.length === 0) {
    return 0;
  }
  for (const element of words) {
    if (element.length > longestWord.length) {
      longestWord = element;
    }
  }
  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;
  if (numbers.length === 0) {
    return 0;
  } else if (numbers.length === 1) {
    return numbers[0];
  } else {
    for (const element of numbers) {
      sum += element;
    }
  }
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(arrOfNumbers) {
  let sum = 0;
  if (arrOfNumbers.length === 0) {
    return 0;
  } else if (arrOfNumbers.length === 1) {
    return arrOfNumbers[0];
  } else {
    for (const element2 of arrOfNumbers) {
      sum += element2;
    }
  }
  let average = sum / arrOfNumbers.length;
  return average;
}

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(words2, search) {
  let result = false;
  if (words2.length === 0) {
    return null;
  }
  for (let i = 0; i < words2.length; i++) {
    if (words2[i] === search) {
      result = true;
    }
  }
  return result;
}
