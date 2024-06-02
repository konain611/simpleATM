#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 50000;
let myPin = 1000;



let personName = await inquirer.prompt(
    [
        {
            name: "Name",
            message: "Please enter your name:",
        }
    ]
)
console.log(`\nWelcome ${personName.Name} to SKAN's ATM. //pin = 1000`);
console.log(`Your current balance is ${myBalance}\n`);

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "Pin",
            message: "Please enter your Pin:",
            type: "number"
        }
    ]
)



if (pinAnswer.Pin === myPin)
{   

    

    let operationAnswers = await inquirer.prompt([
        {
            name: "Operations",
            message: "What do you want to do?",
            type: "list",
            choices: ["Withdraw" , "Check Balance" , "Fast Cash" , "Funds Transfer"],
        }]);

    
         if (operationAnswers.Operations == "Withdraw")
            {
                let withdrawalAmount = await inquirer.prompt([
                {
                    name: "Amount",
                    message: "Enter amount you want to withdraw $",
                    type: "number",
                }]);
                
                if(withdrawalAmount.Amount > myBalance){
            console.log("INSUFFICIENT FUNDS");}

                else
                {
                    let newBalance = myBalance-withdrawalAmount.Amount;
                    console.log(`$${withdrawalAmount.Amount} withdrawed succesfully.\nYour new balance is $${newBalance}`);
                }
            }   

        else if(operationAnswers.Operations == "Check Balance")
            {
             console.log(`Your remaining balance is ${myBalance}`);
            }

        else if(operationAnswers.Operations == "Fast Cash")
            {
                let fastCashAmount = await inquirer.prompt([
                    {
                        name: "fastCash",
                        type: "list",
                        choices:["$1,000","$5,000","$10,000","$25,000","$50,000"],
                    }]);
                    switch(fastCashAmount.fastCash){
                        case "$1,000":{
                            let newBalance1 = myBalance-1000;
                            console.log(`$1,000 withdrawed succesfully.\nYour new balance is $${newBalance1}`);
                            break;
                        }
                        case "$5,000":{
                            let newBalance2 = myBalance-5000;
                            console.log(`$5,000 withdrawed succesfully.\nYour new balance is $${newBalance2}`);
                            break;
                        }
                        case "$10,000":{
                            let newBalance3 = myBalance-10000;
                            console.log(`$10,000 withdrawed succesfully.\nYour new balance is $${newBalance3}`);
                            break;
                        }
                        case "$25,000":{
                            let newBalance4 = myBalance-25000;
                            console.log(`$25,000 withdrawed succesfully.\nYour new balance is $${newBalance4}`);
                            break;
                        }
                        case "$50,000":{
                            let newBalance5 = myBalance-50000;
                            console.log(`$50,000 withdrawed succesfully.\nYour new balance is $${newBalance5}`);
                            break;
                        }
                        default:{
                            console.log("INVALID OPTION");
                            
                        }
                    }
            }
            else if(operationAnswers.Operations == "Funds Transfer")
                {
                    let fundsTransferDetails = await inquirer.prompt([
                        {
                            name: "recieverName",
                            message: "Enter the reciever's name:",
                        },
                        {
                            name: "transferAmount",
                            message: "Enter amount you want to transfer",
                            type: "number",
                        },
                        {
                            name: "recieverNum",
                            message: "Enter reciever's contact number:"
                        },
                        {
                            name: "confirmPin",
                            message: "Confirm your Pin to proceed",
                            type: "number"
                        }]);
                       if(fundsTransferDetails.transferAmount <= myBalance){
                            if(fundsTransferDetails.confirmPin == myPin){
                            console.log(`${fundsTransferDetails.transferAmount} has been succesfully transfered to ${fundsTransferDetails.recieverName} having contact number ${fundsTransferDetails.recieverNum}`);
                            let newBalance6 = myBalance - fundsTransferDetails.transferAmount;
                            console.log(`Your new balance is ${newBalance6}`);
                            
                        }
                            else{
                            console.log("INCORRECT PIN");
                            
                        }
                       }
                       else{
                        console.log("INSUFFICIENT FUNDS");
                        
                       }
                }
}

else
{
    console.log("INCORRECT PIN");

}
