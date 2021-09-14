const sum = (a, b) => {
  let sum = 0;
  let min, max;
  if (a < b) {
    min = a;
    max = b;
  } else {
    min = b;
    max = a;
  }

  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

module.exports = { sum };
