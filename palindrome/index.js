// let number = 144;

// const isPalindrome = (number) => {
//     return number == number.toString().split("").reverse().join("");
// };

// console.log(isPalindrome(number));
// console.log(isPalindrome(121));

const isPalindrome = (n) => {
  let copy = n;
  let rev = 0;

  while (n > 0) {
    let rem = n % 10;
    rev = 10 * rev + rem;
    n = Math.floor(n / 10);
  }

  return copy === rev ? true : false;
};
console.log(isPalindrome(1261));
