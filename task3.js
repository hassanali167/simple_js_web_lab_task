const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calculateDiscountedPrice = (amount) => {
    let discount = 0;

    if (amount >= 100 && amount <= 500) {
        discount = 0.10;
    } else if (amount > 500) {
        discount = 0.15;
    }

    return amount - (amount * discount);
};

rl.question("Enter your shopping amount: ", (amount) => {
    amount = parseFloat(amount);
    let finalPrice = calculateDiscountedPrice(amount);
    console.log(`Total amount after discount: $${finalPrice.toFixed(2)}`);
    rl.close();
});
