 
    function factorial(n:number)
    {
        if(n>0)
        {
            let result=1;
            for(let i=2; i<=n; i++)
            result = result*i
            console.log("Factorial of",n,"is",result) 
        }
        else
        {
            console.log("Entered value is negative number:",n) 
        }
    }
    factorial(6)
