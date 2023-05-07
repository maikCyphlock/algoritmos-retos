/**
 * @typedef {Object} TableElement - Objeto que contiene la tabla de elementos y su densidad correspondiente.
 * @property {number} H - Densidad del elemento hidrógeno.
 * @property {number} W - Densidad del elemento wolframio.
 * @property {number} A - Densidad del elemento aluminio.
 * @property {number} O - Densidad del elemento oxígeno.
 */

/**
 * @function separateLiquids - Función que ordena los elementos del vidrio según su densidad.
 * @param {Array<Array<string>>} glass - Matriz que representa el vidrio.
 * @returns {Array<Array<string>>} - Matriz que representa el vidrio ordenado según la densidad de sus elementos.
 */
function separateLiquids(glass) {
  /**
   * @const {TableElement} TABLE_ELEMENT - Tabla de elementos y sus densidades correspondientes.
   */
  const TABLE_ELEMENT = {
    H: 1,
    W: 2,
    A: 3,
    O: 4,
  };

  let columna = glass.length;
  let row = glass[0].length;
  let result = [];

  for (let i = 0; i < glass.length; i++) {
    for (let k = 0; k < glass[i].length; k++) {
      result.push(glass[i][k]);
    }
  }

  return quicksort(result, columna, row);

  /**
   * @function quicksort - Función que ordena una matriz de elementos según su densidad usando el algoritmo de quicksort.
   * @param {Array<string>} arr - Matriz de elementos a ordenar.
   * @param {number} columna - Número de columnas de la matriz original.
   * @param {number} row - Número de filas de la matriz original.
   * @returns {Array<Array<string>>} - Matriz de elementos ordenada según su densidad.
   */
  function quicksort(arr, columna, row) {
    if (arr.length <= 1) {
      return arr;
    }
    const ar = arr.sort((a, b) => {
      return TABLE_ELEMENT[b] - TABLE_ELEMENT[a];
    });

    const subArrays = [];
    if (columna === 1 && row > 1) {
      ar.forEach((Element) => {
        const subArray = new Array(Element);
        subArrays.push(subArray);
      });
    } else {
      for (let i = 0; i < ar.length; i += 4) {
        const subArray = ar.slice(i, i + 4);
        subArrays.push(subArray);
      }
    }
    return subArrays;
  }
}

// Ejemplo de uso
const unorderedElements = [["H", "H", "W", "O"]];
console.log(separateLiquids(unorderedElements));

module.exports = {
  separateLiquids,
};
