/* https://www.codewars.com/kata/reviews/58677f75395d91ce1d000576/groups/60c649d3408198000190aec2 

export function addArrays(a1, a2) {
    if (a1.length !== a2.length) throw new Error();
    return a1.map((v, i) => v + a2[i]);
}                                                                                                                                                                                                                              
*/

/**
 * Adds corresponding elements of two arrays together.
 *
 * @param {number[]} a1 - The first array.
 * @param {number[]} a2 - The second array.
 * @returns {number[]} The resulting array after adding corresponding elements.
 * @throws {Error} If the lengths of the input arrays are not equal.
 */

export function addArrays(a1, a2) {
    if (a1.length !== a2.length) {
        throw new Error('Arrays must have the same length');
    }
    return a1.map((j, i) => j + a2[i]);
}
