const prompt = require("prompt-sync")()

const Name = prompt ("HI, what's your name?")
console.log(`welcome to our show ${Name}`)
const Age = parseInt(prompt(`How old are you ${Name}`))

if (Age <= 22 )

    {
        console.log(`Sorry, ${Name} your too young for this game.`)
    }

else 

    {
        console.log (`you dont look a day over ${Age}`)
    }

if (Age >22)

    {
        const carsOwned = parseInt(prompt(`Tell me, ${Name}, how many cars do you own?`))

        if (carsOwned === 0 )

            {
                console.log(`Wow, come on now ${Name}, you are ${Age} and do not own a car!` ) 

            }
        else 

            {
                const carBrand = prompt(`${Name},what is the brand and model of your car`)

                console.log(`The${carBrand} is a great choice for a car`)

                console.log(`${Name}, have a great day. Good Bye`)
            }
    }        

