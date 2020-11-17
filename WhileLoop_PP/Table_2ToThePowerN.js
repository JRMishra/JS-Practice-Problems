const readline = require("readline");

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read.question("Enter N : ", function(numStr) {
    let num = parseInt(numStr);
    let i=0;
    console.log("n","\t"+"2^n");
    console.log("------------");
    while(i<=num)
    {
        console.log(i+"\t"+Math.pow(2,i));
        i++;
    }
    read.close();
});

read.on("close", function() {
    console.log("\nExiting...");
    process.exit(0);
});

