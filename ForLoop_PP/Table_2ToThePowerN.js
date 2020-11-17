const readline = require("readline");

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read.question("Enter N : ", function(num) {
    let year = parseInt(num);
    let i;
    console.log("n","\t"+"2^n");
    console.log("------------");
    for(i=0; i<=num; i++)
    {
        console.log(i+"\t"+Math.pow(2,i));
    }
    read.close();
});

read.on("close", function() {
    console.log("\nExiting...");
    process.exit(0);
});

