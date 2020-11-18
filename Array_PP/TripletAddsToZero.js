function findTriplets(...arr) 
{ 
    let count = 0;
    let ansArr = [];
    let n = arr[0].length;
    for (let i = 0; i < n-2; i++) 
    { 
        for (let j = i+1; j < n-1; j++) 
        { 
            for (let k = j+1; k < n; k++) 
            { 
                if (arr[0][i] + arr[0][j] + arr[0][k] 
                                        == 0) 
                { 
                    let triplet = [arr[0][i],arr[0][j],arr[0][k]];
                    ansArr[count] = triplet;
                    count++;
                } 
            } 
        } 
    } 
    return ansArr; 
} 

let tripletArr = findTriplets([-2,1,0,1,4,-1,-2])
for(let triplet of tripletArr)
{
    console.log("Triplet");
    for(let n of triplet)
    {
        console.log(n+"\t");
    }
}