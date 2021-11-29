
// Write a function called sameFrequency, given two positive integers, find out if the two numbers have the same frequency of digits.

// Examples:

// sameFrequency(182, 128); // true;

// sameFrequency(162, 128); // false;

// sameFrequency(13, 128); // false;

// sameFrequency(22, 222); // false

//Problem: sameFrequency
/*
Write a function called sameFrequency.
Given TWO POSITIVE INTEGERS, find out if the two numbers have the same frequency of digits.
Your Solution MUST have the following time complexity:
Time: O(n)
Sample Input:
sameFrequency(182, 281) //true
sameFrequency(34,14) //false
sameFrequency(3589578, 5879385) //true
sameFrequency(22, 222) //false
*/

function sameFrequency(integer1, integer2){
    // Time complexity will be O(n)
    // Convert the integer to string
    integerString1 = integer1.toString();
    integerString2 = integer2.toString();

    // we have to check if the length of the string are not the same, return false,
    if(integerString1.length !== integerString2.length){
        return false;
    }
    // To tackle the problem from here, we have to declare an object that will hold the number of occurences for each number
    // Our key object will be the value of each number, while the value of the object will be the number of occurrences for each number
    let integer1Frequency = {}

    let integer2Frequency = {}

    for(let k of integerString1){
        integer1Frequency[k] = (integer1Frequency[k]) ? ++integer1Frequency[k] : 1
    }

    for(let i of integerString2){
        integer2Frequency[i] = (integer2Frequency[i]) ? ++integer2Frequency[i]: 1
    }
    //Iterate through frequency 1

    for(let key in integer1Frequency){

        if(integer2Frequency[key] != integer1Frequency[key]){
            return false;
        }
        // Firstly, we have to check if the key is not found in integerFrequency1, we return false
        if(!key in integer2Frequency){
            return false;
        }
    }
    return true;

}

// console.log(sameFrequency(182, 128));
console.log(sameFrequency(34,14));