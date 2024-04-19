/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/60c3b87b60eaa400010537e8 

this exercise has 2 distractions */

/**
 * Removes exclamation marks from a given string.
 *
 * @param {string} s - The input string from which exclamation marks will be removed.
 * @returns {string} The input string without exclamation marks.
 */

export function removeExclamationMarks(s) {
    while (s.includes('!')) {
        let index = s.indexOf('!');
        s = s.slice(0, index).concat(s.slice(index + 1, s.length));
    }

    return s;
}

/*
s.slice(0, index).concat(s.slice(index + 1, s.length)); // distraction
let s = s.slice(0, index).concat(s.slice(index + 1, s.length)); // distraction
*/
