//Step 1: Create a Global Variable
let company='abc industries';
console.log("Company Name is ", company)
//Step 2: Create a Function
    function showDetails()
    {
        var language='Javascript'
        let course ='Playwright'
        console.log ("Language is "+language)
        console.log ("Course is "+course)
        //Step 3: Create a Block Inside the Function
            if (true)
                {
                var language ='Phython'
                let course='Selenium'
                const location='India'
                console.log ("Language is "+language)
                console.log ("Course is "+course)
                console.log ("Location is "+location)
                }
        //Step 4: After the Block
            console.log ("Language is "+language)
            console.log ("Course is "+course)
            console.log ("Location is "+location)
            }
    //Step 5: Outside the Function
    showDetails()
    console.log ("Company is "+company)
    console.log ("Language is "+language)