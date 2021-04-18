const operations = require("./operations")
// interface itself will use the Readline module, a built-in Node.js CLI
const readline = require("readline")

// Use readline to create command line interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

console.log(`
Calc.js

Welcome to the Node.js Calculator app!
Version: 1.0.0.

Usage: The user will be prompted to chose an operation,
then asked to select a number(s).
`)
rl.question(`
    Please select from the following options:
    
    [1] Addition (+)
    [2] Subtraction (-)
    [3] Multiplication (*)
    [4] Division (/)
    [5] Square Root(sqrt)

    
    Enter your choice: `,
    choice => {
        const getAmount = choice => {
            if (choice == 5) {
                return 1;
            }
            else {
                return 2;
            }
        }
        if (getAmount(choice) == 1) {
            rl.question("Enter your number: ", x => {
                if (!operations.validateNumbers(x, x)) {
                    console.log("Only numbers allowed. Please restart the program.")
                } else {
                    switch (choice) {
                        case "5": console.log(`The square root of ${x} is ${operations.sqrt(x)}`)
                            break
                        default: console.log("Invalid input options, Please restart the program")
                    }
                }
                rl.close()
            })
        } else {


            rl.question("Enter the first number: ", x => {
                rl.question("Enter the second number: ", y => {

                    if (!operations.validateNumbers(x, y)) {
                        console.log("Only numbers allowed. Please restart the program.")
                    } else {
                        switch (choice) {
                            case "1": console.log(`The sum of ${x} and ${y} is ${operations.add(x, y)}.`)
                                break
                            case "2": console.log(`The difference of ${x} and ${y} is ${operations.subtract(x, y)}.`)
                                break
                            case "3": console.log(`The product of ${x} and ${y} is ${operations.multiply(x, y)}.`)
                                break
                            case "4": console.log(`The quotient of ${x} and ${y} is ${operations.divide(x, y)}.`)
                                break
                            default: console.log("Please restart the program and select a number between 1 and 4")
                                break
                        }
                    }
                    rl.close()
                })
            })
        }
    });
