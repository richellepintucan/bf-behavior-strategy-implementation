/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/57f9488b2faf02e74c000536 */

/* this exercise has 3 distractions */

/**
 * Removes exclamation marks from a given string.
 *
 * @param {string} s - The input string from which exclamation marks will be removed.
 * @returns {string} The input string without exclamation marks.
 */

export let removeExclamationMarks = (s) => s.replace(/!/g, '');

/*
let removeExclamationMarks = function(s) { s.replace(/!/g, ''); } // distraction
let removeExclamationMarks = (s) => { s.replace(/!/g, ''); } // distraction
let removeExclamationMarks => (s) = s.replace(/!/g, ''); // distraction
*/
