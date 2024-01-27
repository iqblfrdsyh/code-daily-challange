// day: 3/366
// link: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/javascript

function accum(s) {
  return s
    .split("")
    .map((char, index) => {
      const repeatedChar = char.toUpperCase().repeat(index + 1);
      return `${repeatedChar.charAt(0)}${repeatedChar.slice(1).toLowerCase()}`;
    })
    .join("-");
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
