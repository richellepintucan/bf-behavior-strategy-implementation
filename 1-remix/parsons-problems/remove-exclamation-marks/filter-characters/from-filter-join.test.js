import { removeExclamationMarks } from './from-filter-join';

describe('removeExclamationMarks', () => {
    test('should remove all exclamation marks from a string', () => {
        expect(removeExclamationMarks('Hello!')).toEqual('Hello');
    });

    test('should handle empty string', () => {
        expect(removeExclamationMarks('')).toEqual('');
    });

    test('should handle string with no exclamation marks', () => {
        expect(removeExclamationMarks('No exclamation marks')).toEqual(
            'No exclamation marks',
        );
    });

    test('should remove multiple exclamation marks', () => {
        expect(removeExclamationMarks('Wow!!!')).toEqual('Wow');
    });

    test('should handle non-string input by converting it to a string', () => {
        expect(removeExclamationMarks(123)).toEqual('');
    });
});
