function CheckPalindrom(number)
{
    if(number<0)
        return false;
    let reverse =0, num = number ;
    while(num>0)
    {
        reverse = (reverse*10)+(num%10);
        num = parseInt(num/10);
    }
    return number == reverse;
}

console.log(CheckPalindrom(1001));
console.log(CheckPalindrom(12311));
console.log(CheckPalindrom(12321));