function myFunction1 (input){
    return typeof(input)
}

// console.log(myFunction1("Mama are mere"))

function myFunction2 (input2){
    if (input2.lenght === 0) 
      return true
    else
      return false
  }
//   console.log(myFunction2("lala"))

function myFunction3 (input3) {
    return input3.split(" ")
  }
  
//   console.log(myFunction3("Aloha Lala")) 

function myFunction4 (input4) {
    return input4.slice(0,8)
  }
//   console.log(myFunction4("Serios Sam"))

function myFunction5 (input5){
    return input5.charAt(0).toUpperCase()+ input5.slice(1)
  }
  
//   console.log(myFunction5("gica"))

function myFunction6 (input6){
    return input6.slice(0, 6)}
  
//   console.log(myFunction6("Havana u nana"))

function myFunction7(first, second) {
    return first.charAt(second).toUpperCase() === first.charAt(second);
       }
//    console.log(myFunction7("Half of MY HEART is IN HAVANA U na na", 9));

function myFunction8 (input8, str2) {
    return input8.slice(0,6)+ " " + str2 + " " + input8.slice(7)
  }
  
//   console.log(myFunction8("Havana na na", "do minor"))

function myFunction5 (input5){
    return input5.charAt(0).toLowerCase()+ input5.slice(1)
  }
  
//   console.log(myFunction5("Motanul incaltat"))

function myFunction9 (input9) {
    return input9.replace("the","")
  }
  
//   console.log(myFunction9("The big brown bear beat the big brown bug"))

function myFunction10 (input10, input10b) {
    return input10 === input10b
  }
  
//   console.log(myFunction10("adorm", "ADORM"))