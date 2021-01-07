/*Ex1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata
 */
const sumOfNumbers = (number) => {
    let sum = 0;
  
    for (let i = 1; i < number; i++) {
      sum += i;
    }
  
    return sum;
  };
  
  //   console.log(sumOfNumbers(5))
  
  // Ex2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.
  // */
  
  const longestString = (statement) => {
    let word = statement.split(" ").sort(function (a, b) {
      return b.length - a.length;
    });
    return word[0];
  };
  
  console.log(longestString("Merry Christmas and a Happy New Year"));
  
  //Ex3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'
  
  const reverse = (wordToReverse) => {
    return wordToReverse.split("").reverse().join("");
  };
  
  //console.log(reverse("ursachi"))
  
  //Ex4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta cu urmatoarea litera din alfabet
  
  const incrementChars = (stringToConvert) => {
    let transformedString = "";
  
    for (i = 0; i < stringToConvert.length; i++) {
      if (stringToConvert[i] === "z") {
        transformedString += "a";
        continue;
      }
  
      if (stringToConvert[i] === "Z") {
        transformedString += "A";
        continue;
      }
  
      const currentCharCode = stringToConvert.charCodeAt(i);
      const newChar = String.fromCharCode(currentCharCode + 1);
  
      transformedString += newChar;
    }
  
    return transformedString;
  };
  
  const transformed = incrementChars("abcdzZ");
  
  // console.log(transformed);
  
  //EX5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste la numarul de ore si minute corespunzatoare.
  // Exemplu: input: 64  ->  output: 1:4
  // */
  
  const convertToTime = (numberToConvert) => {
    let hourSplit = numberToConvert / 60;
    hourSplit = ~~hourSplit;
    let minutesSplit = numberToConvert % 60;
    let result = hourSplit + ":" + minutesSplit;
    return result;
  };
  
  console.log(convertToTime(64));
  
  /*
  6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic
  */
  
  const sortLetters = (wordOrSentence) => {
    let splitLetters = wordOrSentence.split("").sort();
    return splitLetters.join("");
  };
  
  console.log(sortLetters("animal planet is our home"));
  