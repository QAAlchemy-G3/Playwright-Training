var Environment;
(function (Environment) {
    Environment["LOCAL"] = "1.0.3";
    Environment["DEVELOPMENT"] = "Asys";
    Environment[Environment["STAGING"] = 2] = "STAGING";
    Environment[Environment["PRODUCTION"] = 3] = "PRODUCTION";
})(Environment || (Environment = {}));
function runTests(env) {
    console.log("Environment is: ".concat(env));
}
runTests(Environment.LOCAL);
runTests(Environment.DEVELOPMENT);
runTests(Environment.STAGING);
runTests(Environment.PRODUCTION);
