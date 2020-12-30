// function repeatedString(s, n) {
//   let counter = 0;
//   let cursor = 0;
//   let strLength = 0;
//   while (strLength < n) {
//     if (s[cursor] === "a") {
//       counter++;
//     }
//     cursor++;
//     strLength++;
//     if (cursor >= s.length) {
//       cursor = 0;
//     }
//   }
//   return counter;
// }
function repeatedString(s, n) {
  let arr = s.split("");
  indecies = [];
  for (const [index, value] of arr.entries()) {
    value === "a" && indecies.push(index);
  }
  if (n === s.length) {
    return indecies.length;
  }
  if (n < s.length) {
    return indecies.filter((e) => e < n).length;
  } else {
    return (
      Math.floor(n / s.length) * indecies.length +
      indecies.filter((e) => e < n % s.length).length
    );
  }
}
