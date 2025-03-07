const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter an employee name: ", (name) => {
    console.log(`Uppercase: ${name.toUpperCase()}`);
    console.log(`Lowercase: ${name.toLowerCase()}`);
    console.log(`Hyphenated: ${name.replace(/\s+/g, "-")}`);
    console.log(`First three letters: ${name.slice(0, 3)}`);
    rl.close();
});
