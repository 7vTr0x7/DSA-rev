const arr = [6, 7, 8, 9, 87, 89, 89];

const sencondLargest = (arr) => {
  if (arr.length < 2) {
    return null;
  }

  let firstLargest = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      second = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > second && arr[i] !== firstLargest) {
      second = arr[i];
    }
  }

  return second;
};

console.log(sencondLargest(arr));
