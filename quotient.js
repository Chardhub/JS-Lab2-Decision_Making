const prompt = require("prompt-sync")();

const num1 = parseFloat(prompt("Please enter a number"))
const num2 = parseFloat(prompt("Please enter a number"))

const quotient = num1 / num2 

if (num2==0)

    {
        console.log ("Your second number cant be zero")
    }


else 

    {
        console.log (quotient)
    }


