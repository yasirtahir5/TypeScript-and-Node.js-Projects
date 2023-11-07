/* The user will enter a english paragraph and all that is needed is to just to implement 
counting characters and words without whitespaces. */
import chalk from "chalk";
import inquirer from "inquirer";
do {
    let counter: {paragraph:string} = await inquirer.prompt ([
        {
            message: "\n Please Analyze A English Paragraph To Count The Characters & Words..",
            type: "input",
            name: "paragraph"
        }
    ])
    
    let ans = counter.paragraph.trim().split(" ");
    console.log (chalk.bold.cyanBright("\n Your Paragraph Contains",ans.length,"words..\n"))
    
} while (true);


//Program End