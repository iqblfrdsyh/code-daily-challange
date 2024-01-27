// day: 1/366
// link : https://www.codewars.com/kata/57f780909f7e8e3183000078/javascript

function grow(x) {
  return x.reduce((a,b) => a * b);
}

console.log(grow([1, 2, 3, 4]));
