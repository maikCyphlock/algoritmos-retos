const { separateLiquids } = require("./index");

// Tests that the function separates liquids correctly when all elements in the glass have different densities.
test("separate_liquids_with_different_densities", () => {
  const glass = [
    ["O", "H", "A"],
    ["W", "O", "W"],
    ["H", "A", "H"],
  ];
  const expected = [
    ["O", "O", "O"],
    ["W", "W", "H"],
    ["A", "H", "A"],
  ];
  expect(separateLiquids(glass)).toEqual(expected);
});

// Tests that the function orders the elements in a row according to their density when the input array has only one row.
test("test_separate_liquids_with_one_row", () => {
  const glass = [["H", "O", "A", "W"]];
  const expected = [["O", "W", "A", "H"]];
  expect(separateLiquids(glass)).toEqual(expected);
});

// Tests that the function returns an empty array when the input array is empty.
test("test_separate_liquids_with_empty_input", () => {
  const glass = [];
  const expected = [];
  expect(separateLiquids(glass)).toEqual(expected);
});

// Tests that the function returns the same array when the input array has only one element.
test("test_separate_liquids_with_one_element", () => {
  const glass = [["H"]];
  const expected = [["H"]];
  expect(separateLiquids(glass)).toEqual(expected);
});

// Tests that the function throws an error when the input array contains elements not present in the TABLE_ELEMENT object.
test("test_separate_liquids_with_unknown_elements", () => {
  const glass = [
    ["H", "O", "A", "W"],
    ["X", "Y", "Z", "W"],
  ];
  expect(() => separateLiquids(glass)).toThrow();
});

// Tests that the function orders the elements in a column according to their density when the input array has only one column.
test("test_separate_liquids_with_one_column", () => {
  const glass = [["H"], ["O"], ["A"], ["W"]];
  const expected = [["O"], ["W"], ["A"], ["H"]];
  expect(separateLiquids(glass)).toEqual(expected);
});
