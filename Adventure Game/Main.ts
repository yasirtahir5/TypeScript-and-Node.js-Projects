/* This project is not GUI based. It is a console-based game. Develop the adventure game 
in TypeScript and Node.js */
//DD

import inquirer from "inquirer"
import chalk from "chalk"
import Choices from "inquirer/lib/objects/choices.js"
import Choice from "inquirer/lib/objects/choice.js"

class Player{
    name: string
    fuel: number =100
    constructor(name:string){
        this.name=name
    }
    fuelDec(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelInc(){
        this.fuel = 100
    }
}
class Oponent{
    name: string
    fuel: number =100
    constructor(name:string){
        this.name=name
    }
    fuelDec(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}
let player = await inquirer.prompt({
    type: "input",
    message: "Enter Your Name",
    name:"name"
})


let oponent = await inquirer.prompt({
    type: "list",
    name:"select",
    message: "Select Your Oponent",
    choices: ["Zombie", "Alien"]
})

console.log(chalk.bold.green(player.name),'Vs',chalk.bold.red(oponent.select))
let p1= new Player(player.name)
let o1= new Oponent(oponent.select)

do {
    if (oponent.select == "Zombie"){
        let ask= await inquirer.prompt({
            type: "list",
            name:"opt",
            message: "Select Your Option",
            choices: ["Attack", "Heal", "Run"]
        })
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random()*2)
            if(num>0){
                p1.fuelDec()
                console.log(chalk.bold.red(p1.name, "Health is", p1.fuel))
                console.log(chalk.bold.green(o1.name, "Health is", o1.fuel))
                if(p1.fuel<=0){
                    console.log(chalk.bold.red("Opppss..You Loose"))
                    process.exit()
                }
            }
            if(num<=0){
                o1.fuelDec()
                console.log(chalk.bold.green(p1.name, "fuel is", p1.fuel))
                console.log(chalk.bold.red(o1.name, "fuel is", o1.fuel))
                if(o1.fuel<=0){
                    console.log(chalk.bold.blueBright("Hurrrrraahh..You win"))
                    process.exit()
                }
            }
        }
        if(ask.opt == "Heal"){
            p1.fuelInc()
            console.log(chalk.bold.gray("Your Health is",p1.fuel))
        }
        if(ask.opt == "Run"){console.log(chalk.bold.red("You choose run..You Loose. Try Again"))
        process.exit()}
    }

    if (oponent.select == "Alien"){
        let ask= await inquirer.prompt({
            type: "list",
            name:"opt",
            message: "Select Your Option",
            choices: ["Attack", "Heal", "Run"]
        })
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random()*2)
            if(num>0){
                p1.fuelDec()
                console.log(chalk.bold.red(p1.name, "Health is", p1.fuel))
                console.log(chalk.bold.green(o1.name, "Health is", o1.fuel))
                if(p1.fuel<=0){
                    console.log(chalk.bold.red("Opppss..You Loose"))
                    process.exit()
                }
            }
            if(num<=0){
                o1.fuelDec()
                console.log(chalk.bold.green(p1.name, "fuel is", p1.fuel))
                console.log(chalk.bold.red(o1.name, "fuel is", o1.fuel))
                if(o1.fuel<=0){
                    console.log(chalk.bold.blueBright("Hurrrrraahh..You win"))
                    process.exit()
                }
            }
        }
        if(ask.opt == "Heal"){
            p1.fuelInc()
            console.log(chalk.bold.gray("Your Health is",p1.fuel))
        }
        if(ask.opt == "Run"){console.log(chalk.bold.red("You choose run..You Loose. Try Again"))
        process.exit()}
    }
} while (true);

// Program End