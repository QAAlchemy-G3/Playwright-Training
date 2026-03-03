

function palindrome(x)
{
    let value = `${x}`
    let reversename= result.split("").reverse().join("")
    if (result===reversename)
    {
        console.log("Entered string is a palindrome " +result)
    }
    else
    {
        console.log("Entered string is not a palindrome " +result)
    }
    } 
    let result = process.argv[2]
    palindrome(result)
