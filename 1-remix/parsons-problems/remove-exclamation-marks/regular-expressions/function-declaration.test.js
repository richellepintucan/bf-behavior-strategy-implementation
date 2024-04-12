import { removeExclamationMarks } from './function-declaration';

// Describe block for the function
describe('removeExclamationMarks function', () => {
    // Test case 1: Removing exclamation marks from a string
    test('Removes exclamation marks from a string', () => {
        const input = 'Hello!!! This is a test!';
        const expectedOutput = 'Hello This is a test';
        const result = removeExclamationMarks(input);
        expect(result).toEqual(expectedOutput);
    });

    // Test case 2: Input with only exclamation marks
    test('Returns an empty string if the input contains only exclamation marks', () => {
        const input = '!!!!!';
        const expectedOutput = '';
        const result = removeExclamationMarks(input);
        expect(result).toEqual(expectedOutput);
    });

    // Test case 3: Input with no exclamation marks
    test('Returns the same string if there are no exclamation marks', () => {
        const input = 'This string has no exclamation marks';
        const expectedOutput = input;
        const result = removeExclamationMarks(input);
        expect(result).toEqual(expectedOutput);
    });
});
