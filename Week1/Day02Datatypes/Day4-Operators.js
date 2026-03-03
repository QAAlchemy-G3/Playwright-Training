
/* 
function Numbercheck(number)
{
    if (number >0)
    {
       console.log("Number is Positive "+number)  
    }
    else if (number <0)
    {
        console.log("Number is Negative "+number) 
    }
    else
    {
        console.log("Number is Neutral "+number)
    }
}
Numbercheck(0) */

let number=0
function Numbercheck()
{ 
    switch (true)
    {
    case number >0:
        {
        console.log("Number is Positive "+number)  
        break
        }
    case number <0:
        {
            console.log("Number is Negative "+number) 
            break
        }
    default:
        {
            console.log("Number is Neutral "+number)
        }
}
    }  
    Numbercheck()



