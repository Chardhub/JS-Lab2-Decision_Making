const prompt = require("prompt-sync")();

const Name = prompt("Please enter your name: ");

const Age = parseFloat(prompt(`${Name} Please enteer your real age: `));

console.log("\n")

/*

if ( Age <=18 )

    {
        console.log (`Sorry ${Name} you're to young to go beyond this point.`)
    }

else

    {
        console.log (`${Name} you have been granted access.`)
    }

    */

   Age <=18 ? console.log (`Sorry ${Name} you're to young to go beyond this point.`) : console.log (`${Name} you have been granted access.`)


