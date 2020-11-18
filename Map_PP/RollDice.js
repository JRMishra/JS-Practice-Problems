let diceCount = new Map();
for(let i=1; i<7 ; i++)
    diceCount.set(i,0);
let cont = true, num=0;
while(cont)
{
    num = rollDice();
    count = diceCount.get(num)+1;
    diceCount.set(num,count);
    if(count == 10)
        cont = false;
}
console.log("Winner Digit : "+num);
let min = num;


console.log("Score Board");
for(let [key,value] of diceCount)
{
    console.log(key+" "+value);
    if(value< diceCount.get(min))
        min = key;
}

console.log("Loser Digit : "+ min);

function rollDice()
{
    return Math.round(Math.random()*10)%6+1;
}