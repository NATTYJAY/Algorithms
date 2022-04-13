//Problem: areThereDuplicates
/*
Implement a function called, areThereDuplicates, which accepts a variable number of arguments, 
and checks whether there are any duplicates among the arguments passed in. 
You can solve the problem using the frequency counter pattern OR the multiple pointer pattern
Time: O(n)
Space: O(n)
Bonus:
Time: O(n log n)
Space: O(1)
Sample Inputs:
areThereDuplicates([1,2,3]) //false
areThereDuplicates([1,2,2]) //true 
areThereDuplicates(["a", "b", "c", "a"]) //true
*/

function areThereDuplicates(array){
    let frequency = {};
    array.forEach((value,index,array) => {

       if(typeof(value) != String){
        value.toString();

       }

       frequency[value]  = frequency[value] ? frequency[value] + 1 : 1;

    });
    for(key in frequency){
        if(frequency[key] > 1){
            return false;
        }
    }

    return true;
}
