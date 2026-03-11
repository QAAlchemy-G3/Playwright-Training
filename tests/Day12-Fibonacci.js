function fibonacci(n) {
    if (n > 0) {
        var first = 0, second = 1, next = void 0;
        for (var i = 2; i <= n; i++) {
            next = first + second;
            first = second;
            second = next;
        }
        console.log("Fibonacci of", n, "is", next);
    }
}
fibonacci(10);
