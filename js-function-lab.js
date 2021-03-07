// 2.
  let maxOfThree = function(x, y, z) {
    if (x >= y && x >= z) {
      return x;
    }
    else if(y >= x && y >= z) {
      return y;
    }
    else {
      return z;
    }
  }
  console.log(maxOfThree(1, 20, 10));
  
  //3.
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  function isCharAVowel(c){
    console.log(vowels.includes(c));
  }
  isCharAVowel('i');
  
  //4.
  let total = 0;
  
  // let sumArray = function(...nums){
  //   nums.forEach(function (num){
  //     total = total + num;
  //   });
  //   console.log(total);
  // }
  //sumArray(2,3,4,5);
  
  let sumArray = function(arr){
    arr.forEach(function (num){
      total = total + num;
    });
    console.log(total);
  }
  sumArray([2,3,4,5]);
  
  //5.
  let multiTotal = 1;
  function multiplyArray(arr){
    arr.forEach(function (num){
      multiTotal = multiTotal * num;
    });
    console.log(multiTotal);
  }
  multiplyArray([2, 4, 5]);
  
  //6.
  let numArgs = function(...numArgArr){
    console.log(numArgArr.length);
  }
  numArgs(2,5,6,7,8,52,'a','b','e');
  
  //7.
  
  function reverseString(string){
    const stringArr = Array.from(string);
    const reverseStringArr = stringArr.reverse();
    const revString = reverseStringArr.join("");
    console.log(revString);
  }
  reverseString('rockstar');
  
  //8.
  
  // const ac = ["jakjrejkasdj", "jeoiashjeiuashjedeio"];
  // console.log(ac[0].length);
  
  let longestStringInArray = function(arr){
    let longestElement = 0;
    arr.forEach(function(e){
      if (e.length > longestElement){
        longestElement = e.length; 
      }
      else{
       return longestElement; 
      }
    });
    console.log(longestElement);
  }
  longestStringInArray(["jak", "jeoi","heiashjr", "ekiaseuiajksjka"]);
  
  //9
  
  function stringsLongerThan(arr, num){
    const result = arr.filter(word => word.length > num);
    console.log(result);
  }
  stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);
  