function CheckPrime(number)
{
    let num = parseInt(number);
    let isPrime = true;
    if (num === 1) 
        return false;
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
        return isPrime;
    }
    else 
        return false;
}

const readline = require("readline");

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read.question("Enter starting number : ", function(start) {
    let startNum = parseInt(start);
    read.question("Enter ending number : ", function(end) {
        let endNum = parseInt(end);
        console.log("Prime Numbers between "+start +" and "+end+" are :")
        let i;
        for(i=startNum; i<=endNum; i++)
        {
            if(CheckPrime(i))
                console.log(i);
        }
        read.close();
    });
    
});

read.on("close", function() {
    console.log("\nExiting...");
    process.exit(0);
});