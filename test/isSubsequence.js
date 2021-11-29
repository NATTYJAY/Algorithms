//Problem: isSubsequence
/*
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the character in the second string.
In Other words, the function should check whether the character in the first string appear somwhere in the second string, without their order changing.
Time: O(N+M)
Space: O(1)
Sample Input:
isSubsequence("hello", "hello world"); //true
isSubsequence("sing", "sting") //true
isSubsequence("abc", "abracadabra") // true
isSubsequence("abc", "acb") //false (order matters)
*/

const isSubsequence = (str1, str2) => {
    //Create the first pointer
    let i = 0;
    //Create the second pointer
    let j = 0;
    //If the string is empty then return true
    if (!str1) return true;

    while (j < str2.length) {

      if (str2[j] === str1[i]) i++;

      if (i === str1.length) return true;

      j++;

    }
    
    return false;

  };

  console.log(isSubsequence("sing", "sting"));