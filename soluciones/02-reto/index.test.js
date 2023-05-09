const { countTime } = require("./index");

// Tests that the function returns the correct number of seconds required to turn on all leds for a valid input array with at least one led turned on.
test("test_valid_input_with_at_least_one_led_turned_on", () => {
  const leds = [0, 1, 1, 0, 1];
  const time = countTime(leds);
  expect(time).toEqual(7);
});

// Tests that the function returns the correct number of seconds required to turn on all leds for a valid input array with all leds turned on.
test("test_valid_input_with_all_leds_turned_on", () => {
  const leds = [1, 1, 1, 1];
  const time = countTime(leds);
  expect(time).toEqual(0);
});

// Tests that the function throws an error if the input array is empty.
test("test_empty_input_array", () => {
  expect(() => countTime([])).toThrow(Error);
});

// Tests that the function throws an error if the input is not an array.
test("test_invalid_input", () => {
  expect(() => countTime("not an array")).toThrow(Error);
});

// Tests that the function returns the correct number of seconds required to turn on all leds for an input array with only one led turned on.
test("test_input_array_with_only_one_led_turned_on", () => {
  const leds = [0, 0, 0, 1];
  const time = countTime(leds);
  expect(time).toEqual(21);
});

// Tests that the function throws an error if the input array does not contain at least one led turned on.
test("test_input_array_with_all_leds_turned_off", () => {
  const leds = [0, 0, 0, 0];
  expect(() => countTime(leds)).toThrow(Error);
});
