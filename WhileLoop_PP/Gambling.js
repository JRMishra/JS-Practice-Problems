function Gamble()
{
    let toss = Math.round((Math.random()*10))%2;
    return toss==1;
}

let bets=0,won=0,money=100;

while(money>0 && money<200)
{
    bets++;
    if(Gamble())
    {
        won++;
        money++;
    }
    else
    {
        money--;
    }
    console.log("Total Bets : "+bets+"\tTotal won : "+won+"\tTotal money : "+money);
    
}

if(money==0)
    console.log("\nPerson went broke");
else
    console.log("\nPerson won");

console.log("Total Bets : "+bets);
console.log("Total won : "+won);