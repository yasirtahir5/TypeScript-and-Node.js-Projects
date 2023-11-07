/* This somewhat complex TypeScript/Node.js project is a console-based application. When the system 
starts the user is prompted with a user id and user pin. After entering the details successfully, the 
ATM functionalities are unlocked. All the user data is generated randomly. */

import chalk from "chalk"
import inquirer from "inquirer";

interface ansType 
{
    id: string,
    pin: number,
    withdraw: number,
    transaction: string,
    transactionType: number,

}

console.log ("Welcome To My ATM");

let ans: ansType = await inquirer.prompt
([
    {
        message: "Please Enter Your I.D",
        type: "input",
        name: "id",
    },

    {
        message: "Please Enter Your Pin",
        type: "number",
        name: "pin",
    
    },

    {
        message: "Please Select Your Transaction",
        name:"transaction",
        type: "list",
        choices: ["Fast Cash", "Withdraw"],
        when(ans) {return ans.pin}
    },

    {
        message: "Please Select your amount",
        type: "list",
        name: "transactionType",
        choices: [1000, 2000 , 5000, 10000, 20000],
        when(ans) {return ans.transaction == "Fast Cash"}
    },

    {
        message: "Please Enter Amount In Mutiples Of Rs 500 or Rs 1000",
        type: "number",
        name: "transactionType",
        when(ans) {return ans.transaction == "Withdraw"}
    },

])
if (ans.id && ans.pin) 
{
    let balance = Math.floor(Math.random()*100000);
    console.log(chalk.bold.greenBright("Your previous balance is",balance))
    let EnteredAmount = ans.transactionType;
    if (balance >= EnteredAmount) {
        const remianing = balance - EnteredAmount;
        console.log(chalk.bold.blueBright( "Your remaining balance is", remianing))
    } else {
        console.log("Insuficient Balance")
    }
}

//Program End