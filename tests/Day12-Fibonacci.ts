

function fibonacci(n:number)
{
    if(n>0)
    {
        let first=0, second=1, next
        for (let i = 2; i <= n; i++) {
        next = first + second
        first = second
        second = next
        }
        console.log("Fibonacci of",n,"is",next) 
    }
}
fibonacci(10)