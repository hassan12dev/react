// // 1. Unique Words Counter
// const text = "JavaScript is great and JavaScript is powerful";

// function countUniqueWords(str) {
//   const words = str.toLowerCase().split(" ");
//   return words.reduce((acc, word) => {
//     acc[word] = (acc[word] || 0) + 1;
//     return acc;
//   }, {});
// }

// console.log(countUniqueWords(text));



// 2. Group Students by Class
// const students = [
//   { name: "Ali", class: "10th" },
//   { name: "Sara", class: "9th" },
//   { name: "Ahmed", class: "10th" },
//   { name: "Zara", class: "9th" }
// ];

// function groupByClass(arr) {
//   return arr.reduce((acc, student) => {
//     const className = student.class;
//     if (!acc[className]) acc[className] = [];
//     acc[className].push(student);
//     return acc;
//   }, {});
// }

// console.log(groupByClass(students));



// //3. Filter Products by Price Range
// const products = [
//   { name: "Laptop", price: 800 },
//   { name: "Mouse", price: 20 },
//   { name: "Phone", price: 500 },
// ];

// function filterByPrice(min, max) {
//   return products.filter(p => p.price >= min && p.price <= max);
// }

// console.log(filterByPrice(100, 600));



// 4. Check Palindrome Using Function
// function isPalindrome(str) {
//   const reversed = str.split('').reverse().join('');
//   return str === reversed;
// }

// console.log(isPalindrome("madam"));  // true



// 5. Flatten Array
// const nestedArray = [1, [2, [3, 4]], 5];

// function flattenArray(arr) {
//   return arr.flat(Infinity); // or use recursion
// }

// console.log(flattenArray(nestedArray));



//6. Total Salary Calculation (Using Reduce)
// const employees = [
//   { name: "Ali", salary: 1000 },
//   { name: "Zara", salary: 1500 },
//   { name: "Ahmed", salary: 1200 },
// ];

// const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
// console.log(totalSalary);



// 10. Sum of All Even Numbers in Nested Array
// const data = [1, 2, [4, 5, [6, 8]], 10];

// function sumEven(arr) {
//   return arr.flat(Infinity).reduce((sum, num) => {
//     if (num % 2 === 0) return sum + num;
//     return sum;
//   }, 0);
// }
// console.log(sumEven(data));  // Output: 30




// 11. Rest Operator in Function
// function average(...nums) {
//   const total = nums.reduce((sum, n) => sum + n, 0);
//   return nums.length ? total / nums.length : 0;
// }

// console.log(average(10, 20, 30));  // 20



// 12. Frequency Count with Spread
// const arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// const frequency = [...arr].reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// }, {});

// console.log(frequency);



// 13. Toggle Status
// const tasks = [
//   { id: 1, name: "Code", done: false },
//   { id: 2, name: "Eat", done: true },
// ];

// function toggleTaskStatus(id) {
//   return tasks.map(task => 
//     task.id === id ? { ...task, done: !task.done } : task
//   );
// }

// console.log(toggleTaskStatus(2));



// 14. Sort by Name Length
// const names = ["Ali", "Zara", "Ahmed", "Usman"];

// const sortedNames = [...names].sort((a, b) => a.length - b.length);
// console.log(sortedNames);