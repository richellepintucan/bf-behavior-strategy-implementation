import { removeExclamationMarks } from './split-filter-join-1';

describe('removeExclamationMarks', () => {
    it('should remove exclamation marks from a string', () => {
        const input = 'Hello!!!';
        const expected = 'Hello';
        const actual = removeExclamationMarks(input);
        expect(actual).toEqual(expected);
    });

    it('should not modify a string without exclamation marks', () => {
        const input = 'No exclamation marks here';
        const expected = 'No exclamation marks here';
        const actual = removeExclamationMarks(input);
        expect(actual).toEqual(expected);
    });

    it('should return an empty string when given only exclamation marks', () => {
        const input = '!!!!!!';
        const expected = '';
        const actual = removeExclamationMarks(input);
        expect(actual).toEqual(expected);
    });

    it('should handle an empty string input', () => {
        const input = '';
        const expected = '';
        const actual = removeExclamationMarks(input);
        expect(actual).toEqual(expected);
    });

    it('should throw TypeError if input is not a string', () => {
        expect(() => {
            removeExclamationMarks(123);
        }).toThrow(TypeError);
    });
});
