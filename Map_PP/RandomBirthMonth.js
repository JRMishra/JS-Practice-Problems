let birthMonthCount = new Map();
for(let i=1; i<13 ; i++)
    birthMonthCount.set(i,0);

let month=0;

for(let i=1; i<=50; i++)
{
    month = birthMonth();
    count = birthMonthCount.get(month)+1;
    birthMonthCount.set(month,count);
}

let min = 1, max = 1;

console.log("Birth Month Count");
for(let [key,value] of birthMonthCount)
{
    console.log(key+" "+value);
    if(value < birthMonthCount.get(min))
        min = key;
    if(value > birthMonthCount.get(max))
        max = key;
}

console.log("Highest Count : "+max);

console.log("Lowest Count : "+ min);

function birthMonth()
{
    return Math.round(Math.random()*100)%12+1;
}