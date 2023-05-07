# challenge

A company that manufactures Christmas lights has asked us for help.
They have some LED strips that are like an array. Each position is an LED and can be on (1) or off (0).

_Every 7 seconds_, the LEDs change their state in this way:

- If the LED is off, it turns on if the LED to its left (index - 1) was on before.
- If the LED is on, it remains on.

They have asked us for a program that tells us how many seconds must pass until all the LEDs are on. _The seconds are expressed as an integer._ For example:

```javascript
const leds = [0, 1, 1, 0, 1];
countTime(leds); // 7
// 7 seconds since in the first change
// all the lights came on
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

countTime([0, 0, 0, 1]); // 21
// 21 seconds since it needs three changes:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

countTime([0, 0, 1, 0, 0]); // 28
// 28 seconds since it needs four changes:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]
```

## Considerations

- The array will always have at least one LED on.
- The array can have any length.
- If all LEDs are on, the time is 0.

### credits

Challenge taken from [AdventJS](https://adventjs.dev/es/challenges/2022/9) challenge n° 9.
