import { bin2Dec } from "../src/conversions";

test("convert 1 to 1", () => {
  expect(bin2Dec("1")).toBe(1);
});

test("convert 0 to 0", () => {
  expect(bin2Dec("0")).toBe(0);
});

test("convert 10 to 2", () => {
  expect(bin2Dec("10")).toBe(2);
});

test("convert 11 to 3", () => {
  expect(bin2Dec("11")).toBe(3);
});

test("convert 10001 to be 17", () => {
  expect(bin2Dec("10001")).toBe(17);
});
