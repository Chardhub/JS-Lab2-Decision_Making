const prompt = require("prompt-sync")();

const Name = prompt("Please enter your name: ");

const math = parseFloat(prompt(`${Name} Please enter your math score: `));

const science = parseFloat(prompt(`${Name} Please enter your science score: `));

const language = parseFloat(prompt(`${Name} Please enter your language score: `));

const Avg  = math + science + language /3



if (Avg >= 50)

    {
        console.log(`${Name} you have passed`)
    }

else 

    {
        console.log(`${Name} you have failed`)
    }

 



