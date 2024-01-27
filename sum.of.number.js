// day: 2/366
// link : https://www.codewars.com/kata/55f2b110f61eb01779000053/javascript

function getSum(a, b) {
  return a === b ? a : a < b ? a + getSum(a + 1, b) : a + getSum(a - 1, b);
}

console.log(getSum(-1, 2));
