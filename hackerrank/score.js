/**
* 
* @param {*} cars : [2, 10, 8, 17]
* @param {*} k : 3
* @returns 9
*/

function parkingSolutions(cars, k){
    /**
     * 1) Check the length of the roof that will cover three cars. 
     * 2) If there are any numbers of cars left, check the required length for the remaining cars
     * 3) Return the minimum number of the roof that has been covered by n cars.
     */
    const cars_len = cars.length;
    cars.sort(function(a, b) {
        return a - b;
    });

    let len_count = [];
    for (let i = 0; i<=cars_len; i++){
        if (cars[i+k-1]){
            sub_cars = cars.slice(i, i+k);
            len_count.push(Math.max(...sub_cars) - Math.min(...sub_cars) + 1)
        }else{
            break
        }
    }
    return Math.min(...len_count);
}
// console.log("Parking Slot",parkingSolutions([6,2,12,7], 3))
// console.log("Parking Slot",parkingSolutions([6, 8, 2, 4, 9], 3));

// console.log("Parking Slot",parkingSolutions([3,5, 7, 1, 9,4,10,15], 4));

function numPlayers(k, score){
  
    let result = []; // Create an empty array to hold resultant value
    let temp_score = []; // Create an temporal holder to holder the score
    let counter = 0; 

    /** Sort the array in reverse order */
    score.sort(function(a, b) {
        return a - b;
    }).reverse();

    /** Loop through the sorted array */
    score.forEach((value)=>{
        // check if the value is in the temporal result, if yes, push the counter to our result holder
        if(temp_score.includes(value)){
            temp_score.push(value); // Push the value to the temporal store;
            result.push(counter);
            // Increase the counter;
            counter++;
        }else{
            counter++;
            temp_score.push(value);
            result.push(counter);
        }
    });

    let resultant = result.filter(function (currentElement) {
        return currentElement <= k
    });

    const finalResult = resultant.length;
    return finalResult;

}

console.log(numPlayers(3, [100,50,50,25]));

// console.log(numPlayers(3, [100,50,50,25]));