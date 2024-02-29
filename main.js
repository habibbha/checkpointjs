// function Reverse (1)
function reverse(str) {
  var newStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
console.log(reverse("hello world")); //output = dlrow olleh

// function counter (2)
function counter(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
  }
  return count;
}
console.log(counter("hello")); // output=5

// function Capitalize Words (3)
function CapitalizeWord(str) {
  let mystr = str.split(" ");
  for (let i = 0; i < mystr.length; i++) {
    mystr[i] = mystr[i][0].toUpperCase() + mystr[i].substr(1);
  }
  return mystr.join(" ");
}
console.log(CapitalizeWord("hello world")); //output= Hello World

// function findMinMax
function findMinMax(arr) {
  arr.sort((a, b) => a - b);

  return { min: arr[0], max: arr[arr.length - 1] };
}

const arr = [1, 423, 6, 46, 34, 23, 13, 53, 4];
const { min, max } = findMinMax(arr);
console.log(`min-${min} max-${max}`); // Output: min-1 max-423

// function that calculates the sum of all elements in an array.
const sum = [1, 2, 3, 6, 40, 5].reduce(add, 0);

function add(accumulator, a) {
  return accumulator + a;
}

console.log(sum); // output : 57

//Filter array based on a condition

const myArray = [-5, -4, 1, 3, 7, 12, 13, 15, 17, 21, 23, 25, 27, 30];

function findPrime(item) {
  for (let x = 2; item > x; x++) {
    if (item % x == 0) {
      return false;
    }
  }

  return item > 1; // output :[3,7,13,17,23]
}

//factorial
function factorial(n) {
  let answer = 1;
  if (n == 0 || n == 1) {
    return answer;
  } else if (n > 1) {
    for (var i = n; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  } else {
    return "number has to be positive.";
  }
}
let n = 4;
answer = factorial(n);
console.log("Factorial of " + n + " : " + answer);

//Create a function to check if a number is prime or not

function isPrime(num) {
  var sqrtnum = Math.floor(Math.sqrt(num));
  var prime = num != 1;
  for (var i = 2; i < sqrtnum + 1; i++) {
    // sqrtnum+1
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

// function to generate the Fibonacci sequence up to a given number of terms
function nthFibonacci(currNum) {
  if (currNum <= 1) {
    return currNum;
  } else {
    return nthFibonacci(currNum - 1) + nthFibonacci(currNum - 2);
  }
}

const N = parseInt(prompt("Enter the number of terms: "));

let fn1 = 0,
  fn2 = 1,
  nextFibonacci;

console.log("Fibonacci Series upto N terms is:");

for (let i = 0; i < N; i++) {
  console.log(nthFibonacci(i));
}
