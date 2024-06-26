/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/5e5ed30f4013f00001a33813 

this exercise has 2 distractions */

/**
 * Removes exclamation marks from a given string.
 *
 * @param {string} s - The input string from which exclamation marks will be removed.
 * @returns {string} The input string without exclamation marks.
 */

export function removeExclamationMarks(s) {
    while (s.search('!') >= 0) {
        s = s.replace('!', '');
    }
    return s;
}

/*
s = s.replace('', '!'); // distraction
while (s.search('!') > 0) { // distraction
while (s.search('!') !== 0) { // distraction
*/
