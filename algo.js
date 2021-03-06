/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n > 1) {
    return n * factorial(n-1)
  } else if (n === 1) {
    return 1
  } else {
    return null
  }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  let array2 = array.slice();
  if (array.length !== 0) {
    return array2.shift() + sum(array2)
  } else {
    return 0
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  let array2 = array.slice();
  if (array.length !== 0) {
    return array2.shift() + sum(array2)
  } else {
    return 0
  }
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n === 0) {
    return true
  } else if (n === 1)
    return false
  } else {
    return isEven(n-2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 2){
    return 1
  } else {
    return n-1 + sumBelow(n-1);
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  if (x === y-1){
    return [x]
  } else {
    return [x].concat(range(x+1,y))
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 1){
    return base
  } else {
    return base*exponent(base,exp-1)
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n < 1){
    return false
  } else if (n === 1){
    return true
  } else {
    return powerOfTwo(n/2)
  }
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string.length === 1){
    return string
  } else {
    return string.slice(-1) + reverse(string.slice(0,-1))
  }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  if (string.length === 0){
    return true
  } else if (string[0] !== string.slice(-1)){
    return false
  } else {
    return palindrome(string.slice(1,-1))
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (x < y){
    return x
  } else {
    return modulo(x-y,y)
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (y === 1){
    return x
  } else {
    return x + multiply(x,y-1)
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y){

};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (y === 0){
    return x
  } else {
    return gcd(y, x%y)
  }
};

var gcd = (num1,num2) => {
	n1 = num1;
	n2 = num2;
	while (n1 !== n2) {
		if (n1>n2){
			n1 = n1-n2;
        } else {
			n2 = n2-n1;
        }
    }
	return n1
}

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1[0] !== str2[0]){
    return false
  } else if (str1 === "" && str2 === ""){
    return true
  } else {
    return compareStr(str1.substr(1), str2.substr(1))
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if (str.length === 1){
    return str
  } else {
    return [str.slice(0,1)].concat(createArray(str.substr(1)))
  }
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if (array.length === 1){
    return array
  } else {
    return array.slice(-1).concat(reverseArr(array.slice(0,-1)))
  }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length === 1){
    return value
  } else {
    return [value].concat(buildList(value,length-1))
  }
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  let array = [];
  for (let i = 1; i <= n; i++){
    array.push(i)
  }
  for (let i = 0; i < array.length; i++){
      if (array[i] % 3 === 0 && array[i] % 5 === 0){
        array[i] = "FizzBuzz";
      } else if (array[i] % 3 === 0){
        array[i] = "Fizz";
      } else if (array[i] % 5 === 0){
        array[i] = "Buzz";
      }
  }
  return array
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  sum = 0;
  if (array[0] === value) {
    sum += 1
  }
  if (array.length === 1) {
    return sum
  }
  sum += countOccurrence(array.slice(1), value)
  return sum
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array.length === 1){
    return [callback(array[0])]
  } else {
    return [callback(array[0])].concat(rMap(array.slice(1)))
  }
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var num = 0;
  for (let k in obj){
    if (k === key){
      num += 1
    }
    if (typeof obj[k] === "object"){
      num += countValuesInObj(obj[k], key)
    }
  }
  return num
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var num = 0;
  for (let k in obj){
    if (obj[k] === value){
      num += 1
    }
    if (typeof obj[k] === "object"){
      num += countValuesInObj(obj[k], value)
    }
  }
  return num
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  let fib = [];
  fib[0] = 0;
  fib[1] = 1;
  while (fib.length !== n+1) {
    fib.push(fib.slice(-1) + fib.slice(-2,-1))
  }
  return fib
};

function fibonacci(num) {
  if (n <= 1) {
    return [0,1];
  } else {
    var s = nthFibo(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }

}


// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n <= 1) return 1;
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
   if (array.length === 1){
     return array[0].toUpperCase()
   } else {
     return [array.shift().toUpperCase()].concat(capitalizeWords(array))
   }
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  output = array.slice()
  for (let i = 0; i < array.length; i++){
    output[i] = output[i].slice(0,1).toUpperCase() + output[i].substr(1);
  }
  return output
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  let sum = 0;
  for (let key in obj){
    if (obj[key]%2 === 0){
      sum += obj[key]
    } else if (typeof obj[key] === "object"){
      sum += nestedEvenSum(obj[key])
    }
  }
  return sum
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  let newarray = [];
  for (let i=0; i<array.length; i++){
    if (typeof array[i] === "object"){
      newarray = newarray.concat(flatten(array[i]))
    } else {
      newarray.push(array[i])
    }
  }
  return newarray
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str) {
  for (let i = 0; i < str.length; i ++){
    if (!obj[str[i]]){
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++
    }
  }
  return obj
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  let output = [];
  for (let i = 1; i < list.length; i ++){
    if (list[i] !== list[i-1]){
      output.push(list[i])
    }
  }
  output.unshift(list[0])
  return output
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  if (array.length === 1){
    array[0].push(aug)
    return [array[0]]
  } else {
    array[0].push(aug)
    return [array[0]].concat(augmentElements(array.slice(1),aug))
  }
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  let hitzero = false;
  let output = [];
  output.push(array[0])
  for (let i = 1; i < array.length; i ++){
    if (output.slice(-1)[0] !== 0 || array[i] !== 0){
      output.push(array[i])
    }
  }
  return output
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  let output = [];
  output.push(Math.abs(array[0]));
  for (let i = 1; i < array.length; i ++){
    output.push(output[i-1]/Math.abs(output[i-1]) * -1 * array[i])
  }
  return output
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  let map = {1:"one", 2:"two", 3:"three", 4:"four", 5:"five", 6:"six", 7:"seven", 8:"eight", 9:"nine"};
  let input = str.split(" ");
  for (let i = 0; i < input.length; i ++){
    if (map[input[i]]){
      input[i] = map[input[i]];
    }
  }
  return input.join(" ")
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};

var common = function(number1, number2){
  n1 = number1.toString();
  n2 = number2.toString();
  number = "";
  let addition = "";
  for (let i = 0; i < n1.length; i++){
    addition = n1[i];
    for (let j = 0; j < n2.length; j++){
      if (n1[i] === n2[j]){
        addition = "";
      }
    }
    number += addition
  }
  return number
}

/**
 * Matrix Spiral
 *
 * Write a function that accepts an integer N
 * and returns a NxN spiral matrix.
 *
 * Examples:
 * matrix(2) = [[1, 2],
 *              [4, 3]]
 *
 * matrix(3) = [[1, 2, 3],
 *              [8, 9, 4],
 *              [7, 6, 5]]
 *
 * matrix(4) = [[1,   2,  3, 4],
 *              [12, 13, 14, 5],
 *              [11, 16, 15, 6],
 *              [10,  9,  8, 7]]
 */

function matrix(n) {
  let output = [];

}

var maxChar = (str) => {
	let array = str.split("");
	let frequency = {};
	for (let i = 0; i < array.length; i++){
    	if (frequency[array[i]]){
			frequency[array[i]] += 1;
        } else {
			frequency[array[i]] = 1;
        }
	}
	return frequency
}

var pyramid = (num) => {
    if (num === 1) {
        console.log("#")
    } else {
		pyramid(num-1)
        console.log(Array(2*num -1).fill("#").join(""))

    }
}

class Queue {

	constructor() {
		this.items = [];
    }

	show () {
		return this.items
    }

	add (num) {
		this.items.unshift(num)
    }

	remove (num) {
		return this.items.pop()
    }
}
