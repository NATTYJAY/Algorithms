// There is a large pile of socks that must be paired by color.
//  Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
// Example
// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .
// Function Description
// Complete the sockMerchant function in the editor below.
// sockMerchant has the following parameter(s):
// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns
// int: the number of pairs

// ar = [1,2,1,2,1,3,2], n = 7
// Solution 1
// function sockMerchant(n, ar) {
//     let counter = 0;
//     let obj = {};
//    ar.forEach((el) =>{ 

//         if (obj[el]){
//             obj[el]++;
//         } else {
//             obj[el] = 1;
//         }
//    })
//    for ( let sock in obj ){
//     // console.log(sock)
//     if (obj[sock] < 2){

//      continue;  

//     } else {
//         counter += Math.floor(obj[sock]/2)
//     }
     
//    }
// console.log(counter)
// return counter
// }

// Solution 2

// function sockMerchant(n, ar) {
//     let counter = 0;
//     let setA  = new Set();
//     console.log(setA)
    
//     ar.forEach((ele)=>{
//         if(setA.has(ele)){
//             setA.delete(ele);
//             counter++;
//         }else{
//             setA.add(ele);
//         }
//     });
//     setA.clear();
//     return counter;
// }

ar = [1,2,1,2,1,3,2];
n = 7;

// sockMerchant(n,ar)

const getNumbersAndStrings = (array) => {
    /*
  return an object with two keys 
  - strings: the value should be list containing all the strings in the array
  - numbers: the value should be the sum of all the numbers in the array
  
  Ex:
    getNumbersAndStrings([1, 2, "f", "M", "p"]) => {"numbers": 3, "strings": ["f"]}
    getNumbersAndStrings([5, "4"]) => {"numbers": 5, "strings": ["4"]}
    getNumbersAndStrings([]) => {"numbers": 0, "strings": []},
    getNumbersAndStrings(["5"]) => {"numbers": 0, "strings": ["5"]}
    getNumbersAndStrings([-5]) => {"numbers": -5, "strings": []}
    getNumbersAndStrings([{}, [], -5]) => {"numbers": -5, "strings": []}
  */
    const obj = {
                    "number":0,
                    "strings":[]
                };
    array.forEach((ele)=>{
       if(typeof(ele) === "number"){
           obj.number += ele;

       }else if(typeof(ele) === "string"){
            obj.strings.push(ele);
       }
    });
    
    console.log(obj);

}
// getNumbersAndStrings([1, 2, "f", "M", "p"]);





