import { isBinary } from "../src/validations";

test("validate input with only zeros", () => {
  expect(isBinary("00000000")).toBe(true);
});

test("validate input with only ones", () => {
  expect(isBinary("11111111")).toBe(true);
});

test("validate input with not binary valid number", () => {
  expect(isBinary("22222222")).toBe(false);
});
