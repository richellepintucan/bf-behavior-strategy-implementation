/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/57f94b0a2faf02e74c000557 */

/* this exercise has 3 distractions */

/**
 * Removes exclamation marks from a given string.
 *
 * @param {string} s - The input string from which exclamation marks will be removed.
 * @returns {string} The input string without exclamation marks.
 */

export function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
}

/*
var function removeExclamationMarks(s) { // distraction
s.replace(/!/gi, ''); // distraction
function removeExclamationMarks(s) => { // distraction

*/
