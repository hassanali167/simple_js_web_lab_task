const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calculateSalary = (years) => {
    let baseSalary = years * 1000;
    if (years > 5) {
        baseSalary += 500; // Apply bonus
    }
    return baseSalary;
};

rl.question("Enter your years of experience: ", (years) => {
    years = parseInt(years);
    let totalSalary = calculateSalary(years);
    console.log(`Your total salary is: $${totalSalary}`);
    rl.close();
});
