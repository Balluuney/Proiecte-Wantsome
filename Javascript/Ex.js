//Exercitiul1

//Scrieti o functie care sa protejeze emailul unui user
// de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"
function emailProtect(email) {
  let part = email.split("@");
  let partTwo = email.substring(0, part[0].length / 2);
  let result = partTwo + "*****@" + part[1];
  console.log(result);
}

// emailProtect("gigi.marocanu@test.com")

//Exercitiul2

//Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
// de ex: myFunction("i am superman") sa printeze "I Am Superman"
function upperCase(writeString) {
  let myArray = writeString.toLowerCase().split(" ");

  for (let i = 0; i < myArray.length; i++) {
    myArray[i] = myArray[i].charAt(0).toUpperCase() + myArray[i].substring(1);
  }
  console.log(myArray.join(" "));
}

// upperCase("i am legend");

//Exercitiul3

// Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers
// ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"

function reverseCharacters(word) {
  let wordOne = word.split("");

  for (let i = 0; i < wordOne.length; i++) {
    if (wordOne[i] === wordOne[i].toUpperCase()) {
      wordOne[i] = wordOne[i].toLowerCase();
    } else {
      wordOne[i] = wordOne[i].toUpperCase();
    }
  }
  let result = wordOne.join("");
  console.log(result);
}
// reverseCharacters("xxYYxxYY")

//Exercitiul4
// Scrieti o functie care sa concateneze un string de cate ori ii zicem
// de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"

function repeat(word, loop) {
  let result = "";
  for (let i = 0; i < loop; i++) {
    result = result + word;
  }
  console.log(result);
}

// repeat("Land",3)

//Exercitiul5
// A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word 'level'.
// Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante
function palindrome(word) {
  let myArray = word.split("");
  if (myArray.reverse().join("") === word) {
    console.log("This is a palindrom");
  } else {
    console.log("This is not a palindrom");
  }
}
// palindrome("level")

//Ex6
// Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si returneaza un array care
//contine ca si elemente cele mai mari numere din fiecare array
function bigNumbers(numbers) {
  let largestNumber = [0, 0, 0];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
      if (numbers[i][j] > largestNumber[i]) {
        largestNumber[i] = numbers[i][j];
      }
    }
  }
  return largestNumber;
}
// console.log(bigNumbers([[30, 3, 90, 3], [50, 78, 4, 2], [101, 8, 202, 4]]));

//Ex7
// Implementati o functie care face reverse la un string
function reverse(word) {
  let drow = word.split("");
  let result = drow.reverse().join("");
  console.log(result);
}

// reverse("Jedi I am your father")

//Ex8
// Implementati o functie care calculeaza factorialul unui numar
function factorial(number) {
  if (number < 0) {
    return -1;
  } else if (number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}
// console.log(factorial(8))

//Ex9
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma
function checkEnding(wordOne, wordTwo) {
  if (wordOne.endsWith(wordTwo)) {
    return wordOne + " " + "ends in" + " " + wordTwo;
  } else {
    return wordOne + " " + "doesn't end in" + " " + wordTwo;
  }
}

// console.log(checkEnding("Inourat", "nourat"))

//Ex10
// Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul element din array care
//trece testul specificat


//Ex11
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele celui de-al doilea
//string
function stringInString(myArray) {
  return myArray[1]
    .toLowerCase()
    .split("")
    .every(function (letter) {
      return myArray[0].toLowerCase().indexOf(letter) != -1;
    });
}
// console.log(stringInString(["Jedi", "edi"]))

// Ex 12
// Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare element al array-ului pana
//cand intalneste elementul cu valoarea specificata
function returnValue (array, value) {
  
  return array.filter(function (element) {
    return element > value;
  });
}

// console.log(returnValue([3,6,3,8],5))

// Ex 13
// Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN

function removeNull(array) {
  
  return array.filter(function (element) {
    return element != null && element != "" && element != undefined;
  });
}

// console.log(removeNull([0, 1, false, null, 2, 3, "", undefined, true, "example"]))

// Ex 14
// Scrieti o functie care repeta un string de n ori specificate
function repeat(word, repeat) {
  let result = "";
  for (let i = 0; i < repeat; i++) {
    result += " " + word;
  }
  console.log(result);
}

// repeat("awesome", 5)
