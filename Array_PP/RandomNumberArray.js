let randNumArr = [];
for(let i=0; i<10; i++)
{
    randNumArr[i] = Math.floor(Math.random()*900) + 100;
}
let min = Math.min(...randNumArr);
let max = Math.max(...randNumArr);

let secondMin = 999, secondMax=100;
console.log("Random Numbers :");
for(let i=0; i<10; i++)
{
    console.log(randNumArr[i]);

    if(randNumArr[i]<secondMin && randNumArr[i]!=min)
        secondMin=randNumArr[i];
    if(randNumArr[i]>secondMax && randNumArr[i]!=max)
        secondMax=randNumArr[i];
}
console.log("Minimum : "+min);
console.log("2nd Minimum : "+secondMin);

console.log("Maximum : "+max);
console.log("2nd Maximum : "+secondMax);

console.log("After sorting");
console.log("-----------------");
randNumArr.sort();
console.log("Random Numbers :");
for(let i=0; i<10; i++)
{
    console.log(randNumArr[i]);
}

console.log("Minimum : "+randNumArr[0]);
console.log("2nd Minimum : "+randNumArr[1]);

console.log("Maximum : "+randNumArr[9]);
console.log("2nd Maximum : "+randNumArr[8]);