import { removeExclamationMarks } from './split-filter-join-2';

describe('removeExclamationMarks function', () => {
    it('removes exclamation marks from a string', () => {
        const input = 'Hello!!! This is a test!';
        const expectedOutput = 'Hello This is a test';
        const result = removeExclamationMarks(input);
        expect(result).toEqual(expectedOutput);
    });

    it('returns an empty string if the input contains only exclamation marks', () => {
        const input = '!!!!!';
        const expectedOutput = '';
        const result = removeExclamationMarks(input);
        expect(result).toEqual(expectedOutput);
    });

    it('returns the same string if there are no exclamation marks', () => {
        const input = 'This string has no exclamation marks';
        const expectedOutput = input;
        const result = removeExclamationMarks(input);
        expect(result).toEqual(expectedOutput);
    });
});
