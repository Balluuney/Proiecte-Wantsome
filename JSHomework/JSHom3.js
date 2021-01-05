// Ex1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
//ex myFunction(10, 5) - output 15 // myFunction(10,10) - output 100
function calculateSum(number1, number2) {
  if (number1 === number2) {
    return (number1 + number2) * 5;
  }
  if (number1 != number2) {
    return number1 + number2;
  }
}

//   console.log(calculateSum(25, 90))

// Ex2
//Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
//ex testFunction(30, 30) - true
//testFunction(15,15) - true
//testFunction(10, 15) - false
function equalToThirty(number3, number4) {
  if (number3 === 30 && number4 === 30) {
    return "True";
  }
  if (number3 + number4 === 30) {
    return "True";
  }
  return false;
}

//   console.log(equalToThirty(3, 30))

// Ex3
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS
function checkString(word) {
  if (word.charAt(0) === "J" && word.charAt(1) === "S") {
    return word;
  }
  return "JS" + word;
}

//   console.log(checkString("true"))

// Ex4
//Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
//removeDuplicates('aabcdeef') - 'abcdef'
//removeDuplicates(122334) - 1234
function removeDuplicates(array) {
  let newValue = [...new Set(array)];
  return newValue.join("");
}

// console.log(removeDuplicates("aabbccdd"))

// Ex5
// Gasiti cel mai lung string intr-o fraza
//findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'

function longestString(sentence) {
  let longestWord = sentence.split(" ").sort(function (a, b) {
    return b.length - a.length;
  });
  return longestWord[0];
}

console.log(longestString("It is supercalifragilistic expialidocious"));

//Ex6
//Scrieti o functie care sa aiba output-ul asta
// *
// * *
// * * *
// * * * *
// * * * * *

function weirdFunction(statement, times) {
  let theWord = "";
  while (times > 0) {
    theWord += " " + statement;
    times = times - 1;
  }
  return theWord;
}

console.log(weirdFunction("*", 1));

//Ex7
function extractNegativeNumbers(numbers) {
  const negativeNumbers = numbers.filter(function (negative) {
    return negative < 0;
  });

  return negativeNumbers;
}

console.log(extractNegativeNumbers([1, 2, -5, 4, -6]));

//ex8
//Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
//ex calculate(2, 5, "add") => 7
//calculate(10, 8, "substract") => 2

function variousCalculations(number1, number2, operator) {
  if (operator === "add") {
    return number1 + number2;
  }
  if (operator === "substract") {
    return number1 - number2;
  }
  if (operator === "multiply") {
    return number1 * number2;
  }
  if (operator === "divide") {
    return number1 / number2;
  }
}

console.log(variousCalculations(10, 5, "divide"));

//Ex9
// Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze
// "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
// isDiv(15) => "BOTH"
// isDiv(9)=> "THREE"
// isDiv(7)=> 7

function divisibleNumber(number) {
  if (number % 3 === 0 && !(number % 5 === 0)) {
    return "THREE";
  }
  if (number % 5 === 0 && !(number % 3 === 0)) {
    return "FIVE";
  }
  if (number % 3 === 0 && number % 5 === 0) {
    return "BOTH";
  } else {
    return number;
  }
}
console.log(divisibleNumber(15));

//Master exercises
//Ex9
// Vreau sa pot afisa data si ziua sub urmatorul format:
// Azi este : Luni.
// Ora este : 20 PM : 30 : 38

function dateAndTime(day, hour, minutes, seconds) {
  return (
    "Azi este : " +
    day +
    "." +
    "\nOra este : " +
    hour +
    " :" +
    " " +
    minutes +
    " :" +
    " " +
    seconds
  );
}

console.log(dateAndTime("Marti", 14, 59, 1));

//ex10
// ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
// validPin("1234") => true
// validPin("12345") => false
// validPin("z23f") => false

function atmCodeCheck(atmCode) {
  let letters = /[a-zA-Z]/g;
  if (letters.test(atmCode)) {
    return false;
  }
  if (atmCode.length === 4 || atmCode.length === 6) {
    return true;
  } else {
    return false;
  }
}

console.log(atmCodeCheck("1234"));

//ex11
//Folosind regex vreau sa scot toate vocalele dintr-un string
// removeVowels("Hey I am developer") => "Hy m dvlpr"

function removeVowels(sentence) {
  return sentence.replace(/[aeiou]/gi, "");
}

console.log(removeVowels("We are the champions"));

//ex12
//Vreau sa am o functie care sa verifice daca un numar este patrat
// isSquareNumber(-1) => false
// isSquareNumber(25) => true
// isSquareNumber(3) => false

function checkSquareNumber(number) {
  return Math.sqrt(number) % 1 === 0;
}

console.log(checkSquareNumber(9));

//ex13
// Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele din primul string se regasesc in al doilea
// isAnagram("School master", "The class room") => true
// isAnagram("silent", "listen") => true

function checkAnagram(word1, word2) {
  let firstWord = word1.toLowerCase();
  let secondWord = word2.toLowerCase();

  for (var i = 0; i < secondWord.length; i++) {
    if (firstWord.indexOf(secondWord.charAt(i)) === -1) {
      return false;
    }
  }
  return true;
}

console.log(checkAnagram("hello", "Hello"));
