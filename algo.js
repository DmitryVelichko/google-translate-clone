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
