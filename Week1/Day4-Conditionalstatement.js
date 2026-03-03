

function launchBrowser(browserName)
{
    if(browserName="Chrome")
    {
        console.log("Its a Chrome Browser")
    }
    else
    {
        console.log("Its not a Chrome Browser")
    }
}
function runTests()
{
    switch(input)
    {
        case input===Sanity:
            {
            console.log("It's Sanity testing")  
            break
            }
        case input===Regression:
            {
            console.log("It's Regression testing")  
            break
            }
        default:
            {
            console.log("It's Smoke testing")  
            }


    }
}
launchBrowser(Chrome)
runTests(Smoke)