const n = 123;

const reverse = (n) => {
  let copy = n;
  n = Math.abs(n);
  return copy > 0
    ? n.toString().split("").reverse().join("")
    : -n.toString().split("").reverse().join("");
};

console.log(reverse(n));
