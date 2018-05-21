
// ############################# TASK 1:   Find the maximum ############################# // 


function maxOfTwoNumbers(a,b) {
  if(a > b){
    //console.log(a + "is the larger number.");
    return a;
  }else if(a < b){
    //console.log( b + "is the largest number")
    return b;
  }else{
    //console.log("Numbers are equal.")
    return a, b;
  }  
}

/**
 teacher comment:
 
 function maxOfTwoNumbers (a, b) {
  if (a > b) {
   return a;
  }
  return b;
}
*/


// ############################# TASK 2:   Find the longest word ############################# // 


var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];


function findLongestWord(array) {
  var longestWordLength = 0;
  var longestWord;

  if (array.length > 0) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].length > longestWordLength) {
        longestWordLength = array[i].length;
        longestWord = array[i];
      }
    } 
    return longestWord;
  }
  else {
    return;  // returns undefined as array is empty BUT the else is not needed as JS returns undefined even without it. 
  }
};


// ############################# TASK 3:   Calculating the sum ############################# // 


var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(array) {
  var sum = 0;

  if (array.length > 0) {
    for (var i = 0; i < array.length; i++) {
      sum = sum + array[i];
    }
    return sum;
  }
  else {
    return 0;
  }
}


// ############################### TASK 4:    Calculate the Average ############################# //


var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function averageNumbers(array) {
  var average = 0;

  if (array.length > 0) { 
    average = sumArray(array) / array.length;
    return average;
  }
  else {
    return;
  }
}


// ###################### TASK 5:    Calculate the Average length of the words #################### //


var wordsArr = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];

function sumWordsLength(array) {
  var sum = 0;

  if (array.length > 0) {
    for (var i = 0; i < array.length; i++) {
      sum = sum + array[i].length;
    }
    return sum;
  }
  else {
    return 0;
  }
}


function averageWordsLength(array) {
  var average = 0;

  if (array.length > 0) {
    average = sumWordsLength(array) / array.length;
    return average;
  }
  else {
    return;
  }
}


// ########## TASK 6:    Take the following array, remove the duplicates, and return a new array. ############# //


var wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];


function uniquifyArray(array) {
  newArray = [];
  
  for (var i = 0; i < array.length; i++) {
    if (newArray.includes(array[i])) {
      continue;
    }
    else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}



//  ########## TASK 7:    Take the following array, remove the duplicates, and return a new array. ############# //


var wordsFind = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];


function doesWordexists(array, word) {

  for (var i = 0; i < array.length; i++) {
    if (array.includes(word)) {
      return true;
    }
    else {
      return false;
    }
  }
}

 
//  ########## TASK 8:    return the number of times that word appears in the array ############# //


var wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];


function howManyTimes(array, word) {
  var count = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i] === word) {
      count++;
    }
  } return count;
}


