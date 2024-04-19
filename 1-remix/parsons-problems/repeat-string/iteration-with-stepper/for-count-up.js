/* 3 extra lines */

/* parsons-collapse: iterating over the number of repetitions

  repeatString(text, repetitions) =>
    1. create a new string to fill with many text's
    2. create and initialize a stepper variable
    3. iterate repetitions number of times
      a. check if stepper is still less than repetitions
        keep going if it is, otherwise stop iterating
      b. append text to the new string
      c. increment the stepper
      d. repeat
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
  let repeatedText = '';
  for (let count = 0; count < repetitions; count++) {
    repeatedText += text;
  }
  return repeatedText;
};


/*
for (let count = 0; count <= repetitions; count++) { // distraction
for (let count = 0; count !>= repetitions; count++) { // distraction
for (const count = 0; count < repetitions; count++) { // distraction
*/
