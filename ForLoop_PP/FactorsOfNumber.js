const readline = require("readline");

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read.question("Enter N : ", function(numStr) {
    let num = parseInt(numStr);
    console.log("Prime factors of "+num+" are : ");
    prime_factors(num);
    read.close();
});

read.on("close", function() {
    console.log("\nExiting...");
    process.exit(0);
});

function prime_factors(num) 
{    
    if(is_prime(num))
        console.log(i);
    const result = [];
    for (let i = 2; i*i <= num; i++)
    {
      while (num % i === 0) 
      {
        if(is_prime(i) && !result.includes(i))
        {
            result.push(i);
            console.log(i);
        }
        if(is_prime(num/i) && !result.includes(num/i))
        {
            result.push(num/i);
            console.log(num/i);
        }
        num /= i;
      }
    }
    
}

  function is_prime(num) 
  {
    if(num<=1)
        return false;
    for (let i = 2; i <= Math.sqrt(num); i++)
    {
      if (num % i === 0) return false;
    }
    return true;
  }