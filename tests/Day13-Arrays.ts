
function occurence(k:number)
{
let count=0
const nums = [2,4,5,2,1,2];
console.log("The Value of k is:",k)
for (let i=0; i<nums.length; i++)
{
    if(nums[i]===k)
    {
        console.log(k ,"matches with value", nums[i] ) 
        console.log("Occurence is:", ++count )
    }
    else
    {
        console.log(k ,"does not matches with value", nums[i] )   
    }
}
}
occurence(2)
