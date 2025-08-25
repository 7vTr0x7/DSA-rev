const array = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 4];
const value = 3;

const removeElement = (array) => {
  let x = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== value) {
      array[x] = array[i];
      x = x + 1;
    }
  }

  return array;
};
console.log(removeElement(array));
