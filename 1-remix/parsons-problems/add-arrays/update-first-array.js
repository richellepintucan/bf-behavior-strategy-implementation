/* https://www.codewars.com/kata/reviews/58677f75395d91ce1d000576/groups/5d6a8a05c968e80001066720 */

/* this exercise has 0 distractions */

/**
 * Adds corresponding elements of two arrays together.
 *
 * @param {number[]} array1 - The first array.
 * @param {number[]} array2 - The second array.
 * @returns {number[]} The resulting array after adding corresponding elements.
 * @throws {Error} If the lengths of the input arrays are not equal.
 */

export function addArrays(array1, array2) {
    var len = array1.length;

    if (len === array2.length) {
        for (var i = 0; i < len; i++) {
            array1[i] += array2[i];
        }

        return array1;
    }

    throw new Error();
}
