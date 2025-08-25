const array = ["h", "e", "l", "l", "o"];

const reverseString = (array) => {
  let len = array.length;
  let halfLen = Math.floor(len / 2);
  for (let i = 0; i < halfLen; i++) {
    let t = array[i];
    array[i] = array[len - 1 - i];
    array[len - 1 - i] = t;
  }

  return array;
};

console.log(reverseString(array));
