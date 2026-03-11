

enum Environment {
    LOCAL="1.0.3",
    DEVELOPMENT="Asys",
    STAGING =2,
    PRODUCTION
}
function runTests(env:Environment):void
{
    console.log(`Environment is: ${env}`);
}
runTests(Environment.LOCAL)
runTests(Environment.DEVELOPMENT)
runTests(Environment.STAGING)
runTests(Environment.PRODUCTION)