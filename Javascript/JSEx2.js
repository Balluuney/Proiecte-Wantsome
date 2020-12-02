// Ex1
// Creati un obiect "car"
// Adaugati proprietatea name si valoarea Tesla
// Adaugat proprietatea wheels si valoarea 4
// Schimbati valoarea name sa fie Mercedes
// Stergeti proprietatea name
var car = {
  name: "Tesla",
  wheels: 4,
};
car.name = "Mercedes";
delete car.wheels;
// console.log(car)

//Ex2
// Creati un obiect cu 4 proprietati
// Stocati "key"-urile intr-o variabila noua
// intr-o alta variabila vreau sa am toate key-urile cu litere mari
// Stocati valorile intr-o variabila noua
// intr-o alta variabila vreau sa am toate valorile cu litere mici
// vreau la final sa ma rezultatul un singur string care sa contina o fraza de genul "proprietatea1 proprietatea2 proprietatea3 proprietatea4 reprezinta ceva"
var man = {
  name: "Vasile",
  age: 44 + " " + "years",
  color: "Caucazian",
  body: "Well built",
};

var second = Object.keys(man);
var third = Object.values(man);
var string = third.join();
var lower = string.toLowerCase();
var final = lower.concat(" ", "reprezinta un om");
// console.log(final)

//Ex3
// Creati un obiect  cu 3 proprietati si una dintre ele sa reprezinte o  metoda
// Metoda din obiect vreau sa returneze sau sa printeze (console.log()) prima valoare impreuna cu a doua valoare.

var object = {
  size: "Big",
  material: "Iron",
  method: function () {
    console.log(object.size.concat(" ", object.material));
  },
};
// object.method();

//Ex4
// Creati un obiect cu cateva proprietati
// "Copiati" obiectul printr-o metoda specifica obiectelor(vedeti pe google) si stocatil intr-o alta variabila
// Pe obiectul nou adaugam 2 noi proprietati
// Avem obiectul de mai jos, folosind o metoda pe obiecte faceti "merge" intre cele 2 obiecte si salvati-l sub un nume nou.

var forth = {
  name: "Gigel",
  surname: "Ciocardel",
  age: 34 + " " + "years",
  job: "lautar",
};
var more = Object.assign(forth);
more.hobby = "Swimming";
more.food = "Lasagna";

myHouse = {
  rooms: 3,
  zone: "Bucium",
  animals: 1,
};

var finalCountdown = Object.assign(more, myHouse);
// console.log(finalCountdown)

// Ex5
// Creati un obiect care sa contina un alt obiect in interorul lui cu 2 proprietati
// Accesati proprietatile acelui obiect si stocati key-le intr-o variabila separata.
// transformati arrayul intr-un singur string care sa rezulte "proprietatea1 si proprietatea2 apartin obiectului x"
var cinci = {
  another: {
    name: "Jon",
    surname: "Snow",
  },
};
var lala = Object.values(cinci.another);
var result = lala.join(" si ");
// console.log(result.concat(" ","apartin obiectului x"))

//Ex6
// Avem obiectul :
myObject = {
  name: "John",
  surname: "Applegate",
};
var ding = Object.values(myObject);
function myFunction(argument) {
  return ding.sort();
}
// console.log(myFunction(ding))
//Adaugati o metoda care sa sorteze cele 2 valori ale numelui.

//Ex7
//Faceti o functie constructor
// Cu functia constructor creati 3 obiecte cu valori diferite
// Pentru toate valorile din acele obiecte transformatile in litere mari.
function dilema(when, where, why) {
  this.when = when;
  this.where = where;
  this.why = why;
}

var myDilema = new dilema("Past", "There", "Because");
var yourDilema = new dilema("Years Ago", "1990", "Fate");
var theirDilema = new dilema("Future", "Outside", "Destiny");
function myFunctions(a) {
  var first = Object.values(myDilema).join().toUpperCase();
  var second = Object.values(yourDilema).join().toUpperCase();
  var third = Object.values(theirDilema).join().toUpperCase();
  return first;
}
console.log(myFunctions());
