const readline = require("readline");

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read.question("Enter N : ", function(numStr) {
    let num = parseInt(numStr);
    if(num<0)
    {
        console.log("Negative numbers not allowed");
        read.close();
    }
    let i;
    let ans=1;
    for(i=1; i<=num; i++)
    {
        ans*=i;
    }
    console.log("Factorial : "+ans);
    read.close();
});

read.on("close", function() {
    console.log("\nExiting...");
    process.exit(0);
});
