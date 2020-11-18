function CelsiusToFarenhite(tempInCelsius)
{
    return (tempInCelsius*(9/5))+32;
}

function FarenhiteToCelsius(tempInFarhenite)
{
    return (tempInFarhenite-32)*(5/9);
}

const readline = require("readline");

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read.question("1. C to F\n2. F to C\nEnter : ", function(option) {
    read.question("Enter Temperature : ", function(temp){
        let convertedTemp;
        switch(option)
        {
            case "1":
                if(temp >= 0 && temp <= 100)
                {
                    convertedTemp = CelsiusToFarenhite(temp);
                    console.log("Temp in farenhite is :"+ Math.round(convertedTemp,2));
                }
                else
                {
                    console.log("Input temperature should be between 0 & 100");
                }
                break;
            case "2":
                if(temp >= 32 && temp <= 212)
                {
                    convertedTemp = FarenhiteToCelsius(temp);
                    console.log("Temp in celcius is :"+Math.round(convertedTemp,2));
                }
                else
                {
                    console.log("Input temperature should be between 32 & 212");
                }
                break;
            default:
                console.log("Wrong option");
                break;
        }
        read.close();
    });
});

read.on("close", function() {
    console.log("\nExiting...");
    process.exit(0);
});