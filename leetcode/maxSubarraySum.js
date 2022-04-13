//Problem: maxSubarraySum
/*
Given an array of integers and a number, write a function called maxSubarraySum, 
which finds the maximum sum of a subarray with the length of the number passed to the function.
Note that a subarray must consist of consecutive elements from the original array. 
In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

Time: O(n)
Space: O(1)
Sample Input:
maxSubarraySum([100, 200, 300, 400], 2); //700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); //39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); //5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); //5
maxSubarraySum([2, 3], 3); //null
*/

const maxSubarraySum = (array, number) => {

    let maxSum = 0;
    let tempSum = 0;
  
    if (array.length < number) {
      return null;
    }
  
    for (let i = 0; i < number; i++) {
      maxSum += array[i];
    }
  
    tempSum = maxSum;
  
    for (let i = number; i < array.length; i++) {
      tempSum = tempSum - array[i - number] + array[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  };

//   console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));


  // Write a function called pivotIndex which accepts an array of integers, and returns the pivot index 
// where the sum of the items to the left equal to the sum of the items to the right. 
// If there are more than one valid pivot index, return the smallest value.

function pivotIndex(nums) {
    let rightSum = nums.reduce((a, b) => a + b, 0);
    let leftSum = 0;
    let pivotIdx = -1;
    for (let i = 0; i < nums.length; i++) {
      leftSum += nums[i];
      if (leftSum === rightSum) {
        pivotIdx = i;
        break;
      }
      rightSum -= nums[i];
    }
    return pivotIdx;
  }

  console.log(pivotIndex([1,2,1,6,3,1]));