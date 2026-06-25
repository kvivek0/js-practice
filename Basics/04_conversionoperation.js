      // TYPE CONVERSION 

let score = "35b";
 console.log(typeof score); 

let numberInScore = Number(score);
console.log(typeof numberInScore);
console.log(numberInScore); // type conversion ,but exception are here like there is value 35 is string 
                            //but after typecasting it also show type of number but it is not

 // " type conversion " 
    /*
       33 => 33
       33bc => NaN "not a number"
       true => 1 ,false => 0;
    */                          
   let isloggedin = 1;
     let valueinboolean = Boolean(isloggedin);
     console.log(valueinboolean);

     // 1  => "true" , 0 => "false"
     // "" => "false" , 
     // "name" => "true"

     let datanumber = 456
        let changesintostring = String(datanumber)
        console.log(changesintostring);
        console.log(typeof changesintostring);
