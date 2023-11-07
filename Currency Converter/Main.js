/* The TypeScript console app is used to convert currencies: the users enter a certain amount of money
in one currency and set the currency they want to check the monetary value of.
While developing the app, the beginners can master variables, algorithms, loops, if statements,
and other TypeScript concepts. */
import inquirer from "inquirer";
let currency = {
    "PKR": {
        "USD": 0.0035,
        "EURO": 0.0032,
        "AED": 0.013,
        "PKR": 1
    },
    "USD": {
        "PKR": 289.56,
        "EURO": 0.94,
        "AED": 3.67,
        "USD": 1
    },
    "EURO": {
        "PKR": 309.02,
        "USD": 1.07,
        "AED": 3.92,
        "EURO": 1
    },
    "AED": {
        "PKR": 78.84,
        "USD": 0.27,
        "EURO": 0.26,
        "AED": 1
    }
};
console.log("Welcome To Currency Converter Application \n");
let ans = await inquirer.prompt([
    {
        message: "Choose Your Preferred Currency",
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "EURO", "AED"]
    },
    {
        message: "Choose Your Desired Currency for Convertion",
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "EURO", "AED"]
    },
    {
        message: "Please Input Your Convertion Amount",
        type: "number",
        name: "data"
    }
]);
let { from, to, data } = ans;
if (from && to && data) {
    let converter = currency[from][to] * data;
    console.log("Your Convertion From", from, "to", to, "is", converter);
}
else {
    console.log("Error.. Invalid Input Try Again");
}
//Program End
