export const bin2Dec = input => {
  let sum = 0;

  let reversed = [...input].reverse();

  for (let i = 0; i < input.length; i++) {
    sum += reversed[i] === "0" ? 0 : Math.pow(2, i);
  }

  return sum;
};
