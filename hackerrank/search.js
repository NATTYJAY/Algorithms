
// Binary Search, Merge Sort, Quick Sort and Quick Select, Linear Search

/** This is a linear search */
var search = function(nums, target) {
    for(let i = 1; i<nums.length; i++){
        if(nums[i] === target){
            return i;
        }
    }
    return -1
};

// console.log(search([-1,0,3,5,9,12],9));

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  function topSalary(salaries) {

    let maxSalary = 0;
    let maxName = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (maxSalary < salary) {
        maxSalary = salary;
        maxName = name;
      }
    }
  
    return maxName;
  }

  console.log(topSalary({
    "John": 100,
    "Pete": 300,
    "Mary": 250
  }));
