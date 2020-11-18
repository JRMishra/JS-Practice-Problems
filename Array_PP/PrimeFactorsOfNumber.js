const readline = require("readline");

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read.question("Enter N : ", function(numStr) {
    let num = parseInt(numStr);
    console.log("Prime factors of "+num+" are : ");
    let primeFactors = [];
    primeFactors = Prime_factors(num);
    for(let n of primeFactors)
      console.log(n);
    read.close();
});

read.on("close", function() {
    console.log("\nExiting...");
    process.exit(0);
});

function Prime_factors(num) 
{    
    if(isPrime(num))
      console.log(i);
    const result = [];
    for (let i = 2; i*i <= num; i++)
    {
      while (num % i === 0) 
      {
        if(isPrime(i) && !result.includes(i))
        {
          result.push(i);
        }
        if(isPrime(num/i) && !result.includes(num/i))
        {
          result.push(num/i);
        }
        num /= i;
      }
    }
  return result;
}

function isPrime(num) 
{
  if(num<=1)
    return false;
  for (let i = 2; i <= Math.sqrt(num); i++)
  {
    if (num % i === 0) return false;
  }
  return true;
}