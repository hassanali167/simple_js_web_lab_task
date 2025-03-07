const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calculateFinalAmount = (amount) => {
    let interestRate = 0;
    
    if (amount < 10000) {
        interestRate = 0.05;
    } else if (amount >= 10000 && amount <= 50000) {
        interestRate = 0.04;
    } else {
        interestRate = 0.035;
    }

    return amount + (amount * interestRate);
};

rl.question("Enter the loan amount: ", (amount) => {
    amount = parseFloat(amount);
    let finalAmount = calculateFinalAmount(amount);
    console.log(`Total amount after interest: $${finalAmount.toFixed(2)}`);
    rl.close();
});
