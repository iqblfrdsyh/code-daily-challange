// day: 4/366
// link : https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/javascript

const splitIntoPairs = inputString => Array.from({ length: Math.ceil(inputString.length / 2) }, (_, i) => (inputString.slice(i * 2, i * 2 + 2).padEnd(2, '_'))).join(' ');
console.log(splitIntoPairs('abc'));