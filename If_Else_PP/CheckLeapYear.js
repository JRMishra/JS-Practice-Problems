const readline = require("readline");

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read.question("Enter year : ", function(yearInput) {
    let year = parseInt(yearInput);

    if(year==NaN)
        read.close();

    if(year%4==0)
    {
        if(year%100==0)
        {
            if(year%400==0)
                console.log("Leap year");
            else
                console.log("Non-Leap year");
        }
        else
            console.log("Leap year");
    }
    else
        console.log("Non-Leap year");

    read.close();
});

read.on("close", function() {
    console.log("\nExiting...");
    process.exit(0);
});



