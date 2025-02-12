let myArray = [1, 4, 2, 3, 5, 6];
let anotherArray = [];

function sumfac(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
    //  sum += numbers[i]
  }
  // 0
 //sum = 0 + 1; // 1
  // 1 + 4 ==> 5
  // 5 + 2 ==> 7
  // 7 + 3 ==> 10
  return sum;
}

let result = sumfac(myArray);
console.log(result);

let anotherResult = sumfac([3, 3, 2, 6, 4]);
console.log(`My result is ${anotherResult}`);

