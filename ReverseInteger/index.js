// const n = 123;

// const reverse = (n) => {
//   let copy = n;
//   n = Math.abs(n);
//   return copy > 0
//     ? n.toString().split("").reverse().join("")
//     : -n.toString().split("").reverse().join("");
// };

// console.log(reverse(n));

const n = -123;

const reverse = (n) => {
  let copy = n;
  n = Math.abs(n);

  let rev = 0;

  while (n > 0) {
    let rem = n % 10;
    rev = 10 * rev + rem;
    n = Math.floor(n / 10);
  }

  const limit = 2 ** 31;
  if (rev < -limit || rev > limit - 1) return 0;

  return copy > 0 ? rev : -rev;
};

console.log(reverse(n));
