// day: 10/366
// link :https://www.codewars.com/kata/5715eaedb436cf5606000381/train/


// function positiveSum(arr) {
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       result += arr[i];
//     }
//   }
//   return result;
// }

const positiveSum = (arr) =>
  arr.filter((v) => v > 0).reduce((a, x) => a + x, 0);

console.log(positiveSum([1, -2, 3, 4, 5]));
