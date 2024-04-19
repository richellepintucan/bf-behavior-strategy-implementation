/* 3 extra lines */

/* parsons-collapse: iterating until the new string's length is correct

  repeatString(text, repetitions) =>
    1. calculate the final length for the new string
    2. create a new string to fill with many text's
    3. iterate as long as the new string is too short
      a. check if the new string is long enough
        stop if it is, keep going if it is not
      b. append text to the new
      c. repeat
    return: the new repeated string

*/

/**
 * Repeats a given string a specified number of times.
 *
 * @param {string} [text=''] - The string to repeat. Default is an empty string.
 * @param {number} [repetitions=1] - The number of times to repeat the string. Default is 1.
 * @returns {string} The repeated string.
 */

export const repeatString = (text = '', repetitions = 1) => {
    const finalLength = text.length * repetitions;
    let repeatedText = '';
    while (repeatedText.length < finalLength) {
        repeatedText += text;
    }
    return repeatedText;
};

/*

while (repeatedText.length <= finalLength) { // distraction
repeatedText + text; // distraction
const repeatedText = ''; // distraction

*/
