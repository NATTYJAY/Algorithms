

function test_maax(A){

   let max = Math.max(...A);
    
   if(max < 0){
       return 1;
   }
   for(let i = 1; i <= max; i++){
       if(i > 0 && !A.includes(i)){
           return i;
       }
   }
   return max+1

}
console.log("result... ", test_maax([1,3,2,4,6,5,7]));

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */
function sockMerchant(n, ar) {
    // Write your code here
    let result = 0
    let sucks_obj = {}
    ar.forEach((each) => {
        if (sucks_obj[each]){
            sucks_obj[each] += 1
        }else{
            sucks_obj[each] = 1
        }
    })
    
    for (let key in sucks_obj){
        if (sucks_obj[key] < 2){
            continue; // contiue looping
        }else{
            let value = Math.floor(sucks_obj[key]/2)
            result += value
        }
    }
    
    return result
}