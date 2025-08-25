const array = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 4];

const removeDuplicates = (array) => {
  let x = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[x]) {
      x = x + 1;
      array[x] = array[i];
    }
  }

  return array;
};

console.log(removeDuplicates(array));
