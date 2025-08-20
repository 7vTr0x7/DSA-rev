for (let i = 0; i < 5; i++) {
  let row = "";
  let swit = 1;
  for (let j = 0; j < i + 1; j++) {
    row += swit;

    if (swit === 1) {
      swit = 0;
    } else {
      swit = 1;
    }
  }

  console.log(row);
}
