// day: 7/366
// link : https://www.codewars.com/kata/57f222ce69e09c3630000212/train

const well = (x) =>
  x.filter((i) => i === "good").length > 2
    ? "I smell a series!"
    : x.includes("good")
    ? "Publish!"
    : "Fail!";

console.log(well(["bad", "bad", "bad"]));

