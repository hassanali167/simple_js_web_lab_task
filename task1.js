// //  Car Parking Toll System
// const carParkingToll = () => {
//     let moreCars = true;

//     while (moreCars) {
//         let hours = parseInt(prompt("Enter the number of hours parked:"));
//         if (isNaN(hours) || hours <= 0) {
//             console.log("Invalid input. Please enter a valid number of hours.");
//             continue;
//         }

//         let rate = hours <= 2 ? 5 : hours <= 5 ? 4 : 3;
//         let total = hours * rate;

//         let isVIP = confirm("Are you a VIP? Click OK for Yes, Cancel for No.");
//         if (isVIP) {
//             total *= 0.8; // 20% discount
//         }

//         console.log(`Total parking fee: $${total.toFixed(2)}`);
//         moreCars = confirm("Do you want to calculate another car?");
//     }
// };

// carParkingToll();






const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function carParkingToll() {
    rl.question("Enter the number of hours parked: ", (hours) => {
        hours = parseInt(hours);

        let rate = 0;
        if (hours >= 1 && hours <= 2) {
            rate = 5;
        } else if (hours >= 3 && hours <= 5) {
            rate = 4;
        } else {
            rate = 3;
        }

        let totalFee = rate * hours;

        rl.question("Are you a VIP? (yes/no): ", (vipResponse) => {
            if (vipResponse.toLowerCase() === "yes") {
                totalFee *= 0.8; // Apply 20% discount
            }

            console.log(`Total parking fee: $${totalFee.toFixed(2)}`);
            rl.close();
        });
    });
}

carParkingToll();
