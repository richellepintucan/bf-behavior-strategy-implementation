/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/58c58b7262f372bb330003a1 */

/* this exercise has 3 distractions */

/**
 * Removes exclamation marks from a given string.
 *
 * @param {string} s - The input string from which exclamation marks will be removed.
 * @returns {string} The input string without exclamation marks.
 */

export function removeExclamationMarks(s) {
    var arr = s.split('');
    arr = arr.filter(function (e) {
        return e !== '!';
    });
    return arr.join('');
}

/*
arr.filter(function (e) { // distraction
var arr = s.join(''); // distraction
return arr.split(''); // distraction
*/
