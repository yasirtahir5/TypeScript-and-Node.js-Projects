// Develop a simple command line calculator using TypeScipt, Node.js and Inquirer.

import { add } from "./Addition.js";
import { subt } from "./Subtraction.js";
import { multi } from "./Multiplication.js";
import { div } from "./Division.js";
import { mod } from "./Modulus.js";

import inquirer from "inquirer";

let answer = await inquirer.prompt
([

{
    message: "Enter Your First Number",
    type: "number",
    name:  "FirstNumber"
},
    
{   
    message: `Enter Second Number`,
    type: `number`,
    name:  `SecondNumber`
},

{
    message: `Choose Your Operator`,
    type:"list",
    choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus"],
    name:  `Operator`
}
]);

console.log("   ",answer.FirstNumber);
console.log("   ",answer.SecondNumber);
console.log(" ========");



if(answer.Operator==="Addition")
{
    let result1=add(answer.FirstNumber, answer.SecondNumber)
    console.log("   ", result1);
}

else if(answer.Operator==="Subtraction")
{
    let result2=subt(answer.FirstNumber, answer.SecondNumber)
    console.log("   ", result2);
}

else if(answer.Operator==="Multiplication")
{
    let result3=multi(answer.FirstNumber, answer.SecondNumber)
    console.log("   ", result3);
}

else if(answer.Operator==="Division")
{
    let result4=div(answer.FirstNumber, answer.SecondNumber)
    console.log("   ", result4);
}

else if(answer.Operator==="Modulus")
{
    let result5=mod(answer.FirstNumber, answer.SecondNumber)
    console.log("   ", result5);
}

else {console.log("Error.. ! Try Again") };

//Program End