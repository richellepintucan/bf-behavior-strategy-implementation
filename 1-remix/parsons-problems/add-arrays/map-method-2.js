/* https://www.codewars.com/kata/reviews/58677f75395d91ce1d000576/groups/607972557b9a3d0001e17286 */

/**
 * Adds corresponding elements of two arrays together.
 *
 * @param {number[]} arr1 - The first array.
 * @param {number[]} arr2 - The second array.
 * @returns {number[]} The resulting array after adding corresponding elements.
 * @throws {Error} If the lengths of the input arrays are not equal.
 */

export const addArrays = (arr1, arr2) => {
    if (arr1.length !== arr2.length) throw 'Error';
    return arr1.map((j, i) => arr1[i] + arr2[i]);
};
