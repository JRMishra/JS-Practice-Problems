let headCount=0, tailCount=0, num;
while(headCount <11 && tailCount<11)
{
    num = Math.floor(Math.random() * 10)%2;  
    if(num==1)
        headCount++;
    else
        tailCount++;
}
if(headCount==11)
    console.log("Winner is Head");
else
    console.log("Winner is Tail");


