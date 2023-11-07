/* The app will show the students multiple choice questions and promt the user to reply. In the 
end it will show the students the result of the quiz. */

import inquirer from "inquirer";
import chalk from "chalk";

let apiLink:string = "https://opentdb.com/api.php?amount=6&category=18&difficulty=easy&type=multiple"

let fetchData =async (data:string) => {
    let fetchQuiz:any = await fetch(data)
    let res = await fetchQuiz.json()
    return res.results  
}

let data =await fetchData(apiLink)
let startQuiz=async () => {
    let score:number=0
    let name = await inquirer.prompt({
        type: "input",
        message: "Enter Your Name",
        name: "info"
    })

for (let i=1; i<=5; i++){
    let answers = [...data[i].incorrect_answers, data[i].correct_answer]

    let ans = await inquirer.prompt({
        type:"list",
        name: "quiz",
        message: data[i].question,
        choices:answers.map((val:any) => val)
    })

    if (ans.quiz == data[i].correct_answer) {
        ++score
        console.log(chalk.bold.blueBright("Correct"))
    }
    else{console.log("Wrong answer. Correct answer is",chalk.bold.redBright(data[i].correct_answer))}
}
console.log(chalk.bold.greenBright("Mr",name.info), "your score is", chalk.bold.yellowBright(score),
"out of",chalk.bold.yellowBright("5"))
}
startQuiz()

// Program End