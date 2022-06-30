import * as mtrx from '../../math/matrix/Matrix';

// The code of an 'A' character (equals to 65).
const alphabetCodeShift = 'A'.codePointAt(0);
const englishAlphabetSize = 26;

/**
 * Generates key matrix from given keyString.
 *
 * @param {string} keyString - a string to build a key matrix (must be of matrixSize^2 length).
 * @return {number[][]} keyMatrix
 */
const generateKeyMatrix = (keyString) => {
  const matrixSize = Math.sqrt(keyString.length);
  if (!Number.isInteger(matrixSize)) {
    throw new Error(
      'Invalid key string length. The square root of the key string must be an integer',
    );
  }
  let keyStringIndex = 0;
  return mtrx.generate(
    [matrixSize, matrixSize],
    // Callback to get a value of each matrix cell.
    // The order the matrix is being filled in is from left to right, from top to bottom.
    () => {
      // A → 0, B → 1, ..., a → 32, b → 33, ...
      const charCodeShifted = (keyString.codePointAt(keyStringIndex)) % alphabetCodeShift;
      keyStringIndex += 1;
      return charCodeShifted;
    },
  );
};

/**
 * Generates a message vector from a given message.
 *
 * @param {string} message - the message to encrypt.
 * @return {number[][]} messageVector
 */
