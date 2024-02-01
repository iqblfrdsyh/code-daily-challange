// day: 8/366
// link : https://www.codewars.com/kata/563e320cee5dddcf77000158/train

const getAverage = (marks) => {
  if (!Array.isArray(marks) || marks.length === 0) {
    throw new Error("Marks must be a non-empty array");
  }

  return Math.floor(
    marks.reduce((acc, mark) => acc + parseFloat(mark), 0) / marks.length
  );
};

console.log(getAverage([1, 1, 2, 1]));
