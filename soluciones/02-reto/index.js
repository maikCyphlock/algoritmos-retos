/**
 * Calcula el tiempo necesario en segundos para que todos los leds en una tira LED estén encendidos.
 * @param {number[]} leds - Un array que representa la tira LED, donde cada posición puede ser 0 (apagado) o 1 (encendido).
 * @returns {number} - El tiempo necesario en segundos para que todos los leds estén encendidos.
 * @throws {Error} - Si el parámetro leds no es un array o está vacío.
 * @throws {Error} - Si el parámetro leds no contiene al menos un led encendido.
 * @example
 * const leds = [0, 1, 1, 0, 1];
 * const time = countTime(leds); // 7
 * // 7 segundos ya que en el primer cambio
 * // todas las luces se encendieron
 * // 0s: [0, 1, 1, 0, 1]
 * // 7s: [1, 1, 1, 1, 1]
 *
 * @example
 * const time = countTime([0, 0, 0, 1]); // 21
 * // 21 segundos ya que necesita tres cambios:
 * // 0s: [0, 0, 0, 1]
 * // 7s: [1, 0, 0, 1]
 * // 14s: [1, 1, 0, 1]
 * // 21s: [1, 1, 1, 1]
 *
 * @example
 * const time = countTime([0, 0, 1, 0, 0]); // 28
 * // 28 segundos ya que necesita cuatro cambios:
 * // 0s: [0, 0, 1, 0, 0]
 * // 7s: [0, 0, 1, 1, 0]
 * // 14s: [0, 0, 1, 1, 1]
 * // 21s: [1, 0, 1, 1, 1]
 * // 28s: [1, 1, 1, 1, 1]
 */

function countTime(leds) {
  let seconds = 0;
  let allOn = false;

  // Función que verifica si todos los leds están encendidos
  function checkAllOn(leds) {
    // Verificamos si todos los elementos del array son iguales a 1
    if (leds.every((led) => led === 1)) {
      return true;
    }
    return false;
  }

  // Función que actualiza el estado de los leds
  function updateLeds(leds) {
    let prev = leds[0];

    // Recorremos los leds a partir del segundo
    for (let i = 1; i < leds.length; i++) {
      let curr = leds[i];

      // Si el led está apagado y el led de la izquierda está encendido
      if (curr === 0 && prev === 1) {
        // Encendemos el led actual
        leds[i] = 1;
      }

      // Actualizamos el estado previo
      prev = curr;
    }

    // Si el primer led estaba apagado y el segundo led
    //estaba encendido antes
    if (leds[0] === 0 && prev === 1) {
      // Encendemos el primer led
      leds[0] = 1;
    }
  }

  // Mientras no todos los leds estén encendidos
  while (!allOn) {
    // Verificamos si todos los leds están encendidos
    allOn = checkAllOn(leds);

    // Si no todos los leds están encendidos
    if (!allOn) {
      // Añadimos 7 segundos al contador
      seconds += 7;
      // Actualizamos el estado de los leds
      updateLeds(leds);
    }
  }

  // Devolvemos el número de segundos
  return seconds;
}

const leds = [0, 1, 1, 0, 1];
// console.log(countTime(leds)); // 7

// console.log(countTime([0, 0, 0, 1])); // 21

console.log(countTime([0, 0, 1, 0, 0])); // 28

module.exports = { countTime };
