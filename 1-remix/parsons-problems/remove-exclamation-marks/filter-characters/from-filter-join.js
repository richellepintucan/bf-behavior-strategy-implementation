/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/60c5857682a32d000154e5ef */

/* this exercise has 2 distractions */

/**
 * Removes exclamation marks from a given string.
 *
 * @param {string} s - The input string from which exclamation marks will be removed.
 * @returns {string} The input string without exclamation marks.
 */

export function removeExclamationMarks(s) {
    const result = Array.from(s).filter((element) => {
        return element !== '!';
    });
    return result.join('');
}

/*
element !== '!'; // distractor
const result = s.filter((element) => { // distractor
*/
