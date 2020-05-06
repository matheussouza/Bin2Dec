export const isBinary = input =>
  [...input].every(char => ["0", "1"].includes(char));
