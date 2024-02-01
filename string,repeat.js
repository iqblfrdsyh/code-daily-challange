// day: 9/366
// link : https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/javascript

// function repeatStr(n, s) {
//   let arr = [s];
//   for (let i = arr.length; i < n; i++) {
//      arr.push(s)
//   }
//   return arr.join('')
// }

// console.log(repeatStr(5, "*"));

const repeatStr = (n, w) => Array.from(Array(n), () => w).join("")

console.log(repeatStr(4, "*"));
