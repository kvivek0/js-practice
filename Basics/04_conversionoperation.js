      // TYPE CONVERSION 

let score = "35b";
 console.log(typeof score); 

let numberInScore = Number(score);
//console.log(typeof numberInScore);
//console.log(numberInScore); // type conversion ,but exception are here like there is value 35 is string 
                            //but after typecasting it also show type of number but it is not

 // " type conversion " 
    /*
       33 => 33
       33bc => NaN "not a number"
       true => 1 ,false => 0;
    */                        
   let isloggedin = 1;
     let valueinboolean = Boolean(isloggedin);
     //console.log(valueinboolean);

     // 1  => "true" , 0 => "false"
     // "" => "false" , 
     // "name" => "true"

     let datanumber = 456
        let changesintostring = String(datanumber)
        //console.log(changesintostring);
        //console.log(typeof changesintostring);



//****************** OPERATION  *******************
let value = 34
let negValue = -value
// console.log(negValue);
/*
console.log(2+2)
console.log(2*2)
console.log(2-2)
console.log(2/2)
console.log(2%2)
 */

// if we take two string and add using like this it simply added like this 
let str1 = "heloo "
let str2 = "vivek"
let str3 = str1 + str2 
// console.log(str3)
// console.log(1+"2");
// console.log("2"+1+3); // if string first then all treated as string 
// console.log(2+3+"5"); // if addition comes first then string the string part part would be print and addition take place ;
  
//operator precedence

let number = 35
    ++number
 //   console.log(number);