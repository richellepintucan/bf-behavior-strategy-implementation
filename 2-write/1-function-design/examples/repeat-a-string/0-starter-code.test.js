// #todo

'use strict';

/* 0. Starter Code

  Each exercises will have this format:
  - a JSDoc describing the behavior
  - an empty space where you'll write your solutions
  - a for-of loop with test cases inside
  - a secret solution you can use to write tests

*/

// =============== JSDoc description of the challenge ===============

/**
 * Repeats a string a specific number of times.
 *
 * @param {string} [text=''] - The string to repeat. defaults to empty string.
 * @param {number} [repetitions=1] - How many times to repeat. defaults to 1.
 *  Repetitions must be greater than zero, and must be an integer.
 * @return {string} The text repeated as many times as repetitions.
 */

// =============== your solutions will go here ===============

// =============== a for-of loop to control which solution(s) are tested ===============

for (const solution of [secretSolution]) {
    // =============== test cases for this challenge ===============
/*
    describe(solution.name + ': _', () => {
        describe('_', () => {
            it('_', () => {});
        });
    });
}
*/

    function repeatString(text = '', repetitions = 1) {
        if (typeof text !== 'string' || typeof repetitions !== 'number' || repetitions <= 0 || !Number.isInteger(repetitions)) {
            throw new Error('Invalid input');
        }
        
        return text.repeat(repetitions);
    }
    
    describe('repeatString', () => {
        it('should repeat a string once by default', () => {
            expect(repeatString('hello')).toEqual('hello');
        });
    
        it('should repeat a string a specific number of times', () => {
            expect(repeatString('hello', 3)).toEqual('hellohellohello');
        });
    
        it('should handle empty string', () => {
            expect(repeatString('')).toEqual('');
        });
    
        it('should handle zero repetitions', () => {
            expect(repeatString('hello', 0)).toEqual('');
        });
    
        it('should throw an error for non-integer repetitions', () => {
            expect(() => {
                repeatString('hello', 1.5);
            }).toThrowError('Invalid input');
        });
    
        it('should throw an error for negative repetitions', () => {
            expect(() => {
                repeatString('hello', -2);
            }).toThrowError('Invalid input');
        });
    
        it('should throw an error for non-string text input', () => {
            expect(() => {
                repeatString(123, 2);
            }).toThrowError('Invalid input');
        });
    
        it('should throw an error for non-numeric repetitions input', () => {
            expect(() => {
                repeatString('hello', '2');
            }).toThrowError('Invalid input');
        });
    });
    

// =============== a minified solution you can use to test your test cases ===============

// prettier-ignore
function secretSolution(a = "", b = 1) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("number" != typeof b) { throw new TypeError("repetitions is not a number"); } if (0 > b) { throw new RangeError("repetitions is less than zero"); } if (!Number.isInteger(b)) { throw new RangeError("repetitions is not an integer"); } return Array(b).fill(a).join(""); }
