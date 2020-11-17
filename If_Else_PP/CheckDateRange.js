const { RSA_X931_PADDING } = require("constants");
const readline = require("readline");

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let dateArr;
read.question("Enter full date to check ? ", function(fullDate) {
    if(fullDate.includes("/"))
        dateArr = fullDate.split("/");
    else if(fullDate.includes("-"))
        dateArr = fullDate.split("-");
    else if(fullDate.includes("."))
        dateArr = fullDate.split(".");
    else
        read.close();

    let date = parseInt(dateArr[0]);
    let month = parseInt(dateArr[1]);

    if((month==3 && date>=20) || (month==6 && date<=20) || month==4 || month==5)
        console.log("True");
    else
        console.log("False");

    read.close();
});

read.on("close", function() {
    console.log("\nBYE BYE....");
    process.exit(0);
});

