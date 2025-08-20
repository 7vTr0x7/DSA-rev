// for (let i = 5; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += j;
//   }
//   console.log(row);
// }

const n = 5;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    row += j + 1;
  }
  console.log(row);
}
