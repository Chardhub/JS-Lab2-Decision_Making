const prompt = require("prompt-sync")();

const Name = prompt("Please enter your name: ");

const totalHours = parseFloat(prompt("please enter the number of hours "))

const costOfParts = parseFloat (prompt("please enter the cost of parts used. "))

const labourCost = 100

const totalCost  = costOfParts + labourCost

/*

if (totalCost < 150)

    {
        console.log(`Sorry ${Name} we dont do jobs less than $150`)
    }

else 

    {
        console.log (` 
        \n\n
                        
                        *******BILL******** \n
                        Customer Name: ${Name} \n
                        Total Hours: ${totalHours}\n 
                        Labour Cost ${labourCost} \n
                        Cost of parts ${costOfParts}\n
                        Total Cost ${totalCost}\n
                        Thank you and come again. `)
    }

    */

    /*
    if (totalCost >= 150)

    {
        console.log (` 
        \n\n
                        
                        *******BILL******** \n
                        Customer Name: ${Name} \n
                        Total Hours: ${totalHours}\n 
                        Labour Cost ${labourCost} \n
                        Cost of parts ${costOfParts}\n
                        Total Cost ${totalCost}\n
                        Thank you and come again. `)
    }
    */

    totalCost < 150 ? console.log (`Sorry ${Name} We dont do jobs less than $150.`) : console.log (` *******BILL******** \n
    Customer Name: ${Name} \n
    Total Hours: ${totalHours}\n 
    Labour Cost ${labourCost} \n
    Cost of parts ${costOfParts}\n
    Total Cost ${totalCost}\n
    Thank you and come again. `)

