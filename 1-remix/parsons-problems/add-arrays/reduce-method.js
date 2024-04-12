/* https://www.codewars.com/kata/reviews/58677f75395d91ce1d000576/groups/60cab9c989d309000170ac65 */

/* this exercise has 0 destructors */

/**
 * Adds corresponding elements of two arrays together.
 *
 * @param {number[]} array1 - The first array.
 * @param {number[]} array2 - The second array.
 * @returns {number[]} The resulting array after adding corresponding elements.
 * @throws {Error} If the lengths of the input arrays are not equal.
 */

export function addArrays(array1, array2) {
    if (array1.length !== array2.length) {
        throw new Error('Array lengths not same size');
    }

    return array1.reduce((arr, num, i) => {
        arr.push(num + array2[i]);

        return arr;
    }, []);
}
