// Exercise 1

let numbers = [1, 5, 7, 3, 8, 4, 6, 8, 20, 9];

function calculateAverage() {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total / numbers.length;
}

// console.log(calculateAverage())

// Exercise 2

let variousElements = [2, 5, 7, "Lala", "Example", false, true, 25];
let numbers = variousElements.join().match(/\d+/g);
let final = numbers.map(function (val) {
  return parseFloat(val);
});

function getSumOfNumbers(array) {
  let total = 0;
  for (var i in array) {
    total += array[i];
  }
  return total;
}

// console.log(getSumOfNumbers(final))

// Exercise 3
function getFibonnacciNumbers(sequence) {
  let number1 = 0;
  let number2 = 1;
  let total;

  for (let i = 0; i <= sequence; i++) {
    console.log(number1);
    total = number1 + number2;
    number1 = number2;
    number2 = total;
  }
  return total;
}

// console.log(getFibonnacciNumbers(20))

// Exercise 4
let books = [
  { title: "How to train your dragon", author: "Pixar J White", read: "Read" },
  { title: "Chronicles of Narnia", author: "C.S Lewis", read: "Haven't Read" },
  { title: "I Robot", author: "Asimov", read: "Read" },
];

function search() {
  let enumeration = "";
  for (let i = 0; i < books.length; i++) {
    enumeration +=
      books[i].title +
      " " +
      "by" +
      " " +
      books[i].author +
      " " +
      "-" +
      " " +
      books[i].read +
      " ";
  }
  return enumeration;
}
// console.log(search());
