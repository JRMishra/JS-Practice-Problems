const readline = require("readline");

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read.question("Enter N : ", function(num) {
    let i,ans=0.0;
    console.log("Nth Harmonic Number");
    for(i=1; i<=num; i++)
    {
        ans+=(1/i);
    }
    console.log(ans);
    read.close();
});

read.on("close", function() {
    console.log("\nExiting...");
    process.exit(0);
});

