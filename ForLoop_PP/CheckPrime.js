const readline = require("readline");

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read.question("Enter num to check prime or not : ", function(number) {
    num = parseInt(number);
    let isPrime = true;
    if (num === 1) 
        console.log("1 is neither prime nor composite num.");
    else if (num > 1) 
    {
        for (let i = 2; i < num; i++) 
        {
            if (num % i == 0) 
            {
                isPrime = false;
                break;
            }
        }
        if (isPrime) 
            console.log(num+" is a prime num");
        else 
            console.log(num+" is not a prime num");
    }
    else 
        console.log("The num is not a prime num.");
    read.close();
});

read.on("close", function() {
    console.log("\nExiting...");
    process.exit(0);
});