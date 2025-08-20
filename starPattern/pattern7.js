// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (j = 1; j <= 5 - i; j++) {
//     row += "-";
//   }

//   for (j = 1; j <= i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

for (let i = 0; i < 5; i++) {
  let row = "";
  for (j = 0; j < 5 - (i + 1); j++) {
    row += "-";
  }

  for (j = 0; j < i; j++) {
    row += "*";
  }
  console.log(row);
}
