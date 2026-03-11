function factorial(n) {
    if (n > 0) {
        var result = 1;
        for (var i = 2; i <= n; i++)
            result = result * i;
        console.log("Factorial of", n, "is", result);
    }
    else {
        console.log("Entered value is negative number:", n);
    }
}
factorial(6);
