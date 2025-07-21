// 1) Write a program that checks whether a number is even or odd.

// let num = 7;
// if (num % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }



// 2) If someone's age is more than or equal to 18, print "Eligible to vote", otherwise print "Not eligible".

// let age = 20;
// if (age >= 18) {
//   console.log("Eligible to vote");
// } else {
//   console.log("Not eligible");
// }



//3) Print numbers from 1 to 10 using a for loop.

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }



// 4) Print even numbers between 1 to 20 using a while loop.

// let i = 1;
// while (i <= 20) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// }



//5) Print the reverse of a given string using a for loop.

// let str = "hello";
// let reversed = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   reversed += str[i];
// }
// console.log(reversed);




//6) Write a function that adds two numbers and returns the result.

// function add(a, b) {
//   return a + b;
// }
// console.log(add(5, 3));




//7) Write a function that returns the factorial of a number.

// function factorial(n) {
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }
// console.log(factorial(5));




// 8) Write a function that checks if a given string is a palindrome (e.g., "madam").

// function isPalindrome(str) {
//   let reversed = str.split("").reverse().join("");
//   return str === reversed;
// }
// console.log(isPalindrome("madam"));




// 9) Create an object student with the following properties:
// name, rollNo, marks, isPassed

// let student = {
//   name: "hassan",
//   rollNo: 101,
//   marks: 85,
//   isPassed: true
// };



// 10) Access the properties of the student object using dot and bracket notation.

// console.log(student.name);       // Dot notation
// console.log(student["marks"]);   // Bracket notation



// 11) Add a method inside the student object that prints:

// "Hello, I am [name]"
// let student = {
//   name: "hassan",
//   rollNo: 101,
//   marks: 85,
//   isPassed: true,
//    greet : function () {
//   console.log("Hello, I am " + this.name);
// }
// };
// student.greet();



// 12) Create a function that takes an object and prints all keys and values using a loop.

// function printObject(obj) {
//   for (let key in obj) {
//     console.log(key + ": " + obj[key]);
//   }
// }
// printObject(student);




// 13) Create an array of your favorite fruits.

//let fruits = ["mango", "banana", "apple"];




// 14) Add a new fruit to the array.

// fruits.push("orange")



// 15) Remove the last fruit from the array.

//fruits.pop();



// 16) Check if "banana" is present in the array using .includes().

//console.log(fruits.includes("banana"));




// 17) Create an array of numbers. Return a new array where each number is multiplied by 2.

// let nums = [1, 2, 3];
// let doubled = nums.map(n => n * 2);
// console.log(doubled);




// 18) Create an array of ages. Return only those who are 18 or older.

// let ages = [12, 19, 17, 25];
// let adults = ages.filter(age => age >= 18);
// console.log(adults);




// 19) Use .find() to get the first number greater than 10 from an array.

// let numbers = [5, 8, 12, 4];
// let found = numbers.find(n => n > 10);
// console.log(found);




// 20) Use .forEach() to print every name from an array of names.

// const students = [
//   { name: "Ali", marks: 80 },
//   { name: "Zara", marks: 95 },
//   { name: "Umar", marks: 45 }
// ];

// let names = ["Ali", "Zara", "Ahmed"];
// names.forEach(name => console.log(name));




// 21) Use .map() to return an array of only student names.
// const students = [
//   { name: "Ali", marks: 80 },
//   { name: "Zara", marks: 95 },
//   { name: "Umar", marks: 45 }
// ];

// let namesOnly = students.map(s => s.name);
// console.log(namesOnly);




// 22) Use .filter() to return students who scored more than 50.
// const students = [
//   { name: "Ali", marks: 80 },
//   { name: "Zara", marks: 95 },
//   { name: "Umar", marks: 45 }
// ];

// let passed = students.filter(s => s.marks > 50);
// console.log(passed);




// 23) Use .find() to get the student whose name is "Zara".

// const students = [
//   { name: "Ali", marks: 80 },
//   { name: "Zara", marks: 95 },
//   { name: "Umar", marks: 45 }
// ];

// let zara = students.find(s => s.name === "Zara");
// console.log(zara);




// 24) Use .forEach() to print each student’s name and marks.

//students.forEach(s => console.log(`${s.name} - ${s.marks}`));




// 25) You have an array [2, 4, 6, 8]. Return a new array with each number squared.
// → Output: [4, 16, 36, 64]

// let arr = [2, 4, 6, 8];
// let squared = arr.map(n => n * n);
// console.log(squared);




// 26) Given: ["Ali", "Zara", "Umar", "Ahmed"]. Display each name one by one.

// let people = ["Ali", "Zara", "Umar", "Ahmed"];
// people.forEach(p => console.log(p));




// 27) From [12, 25, 17, 20, 16, 30], return only the ages above 18.

// let list = [12, 25, 17, 20, 16, 30];
// let above18 = list.filter(age => age > 18);
// console.log(above18);




// 28) Check if "apple" exists in the array ["banana", "mango", "grapes", "apple"].

// let fruitsList = ["banana", "mango", "grapes", "apple"];
// console.log(fruitsList.includes("apple"));




// 29) From the following list, find the first student who scored more than 90:
// [
//   { name: "Ali", marks: 75 },
//   { name: "Zara", marks: 92 },
//   { name: "Umar", marks: 85 }
// ]

// let result = [
//   { name: "Ali", marks: 75 },
//   { name: "Zara", marks: 92 },
//   { name: "Umar", marks: 85 }
// ];
// let topper = result.find(s => s.marks > 90);
// console.log(topper);




// 30) You have an array [200, 150, 300, 100]. Return the total sum.
// → Output: 750

// let values = [200, 150, 300, 100];
// let total = values.reduce((sum, val) => sum + val, 0);
// console.log(total); // 750




// 31) From this array:
// [
//   { id: 1, username: "ali123" },
//   { id: 2, username: "zara88" },
//   { id: 3, username: "umar_01" }
// ]

// Return a new array of only usernames.
// let users = [
//   { id: 1, username: "ali123" },
//   { id: 2, username: "zara88" },
//   { id: 3, username: "umar_01" }
// ];
// let usernames = users.map(u => u.username);
// console.log(usernames);



// 32) From [1, 2, 3, 4, 5, 6], return only odd numbers.
// → Output: [1, 3, 5]

// let numbersList = [1, 2, 3, 4, 5, 6];
// let odds = numbersList.filter(n => n % 2 !== 0);
// console.log(odds);



// 33) Count how many vowels are present in the string "javascript".

// function countVowels(str) {
//   let count = 0;
//   for (let char of str.toLowerCase()) {
//     if ("aeiou".includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countVowels("javascript"));




// 34) Loop through this array and log:
// Task: [taskName] - Status: [Completed/Incomplete]
// [
//   { task: "Assignment", completed: true },
//   { task: "Homework", completed: false }
// ]

// let tasks = [
//   { task: "Assignment", completed: true },
//   { task: "Homework", completed: false }
// ];

// tasks.forEach(t => {
//   let status = t.completed ? "Completed" : "Incomplete";
//   console.log(`Task: ${t.task} - Status: ${status}`);
// });




// 35) From a list of employees, return a new array that adds a new field:
// "status": "active" to each object.
// let employees = [
//   { name: "Ali" },
//   { name: "Zara" },
//   { name: "Umar" }
// ];


// let updatedEmployees = employees.map(e => ({ ...e, status: "active" }));
// console.log(updatedEmployees);
