import { removeExclamationMarks } from './for-loop.js';

describe('removeExclamationMarks', () => {
    test('removes exclamation marks from a string', () => {
        expect(removeExclamationMarks('Hello! World!')).toEqual('Hello World');
    });

    test('does not change the string if there are no exclamation marks', () => {
        expect(removeExclamationMarks('Hello World')).toEqual('Hello World');
    });

    test('returns an empty string if the input is empty', () => {
        expect(removeExclamationMarks('')).toEqual('');
    });

    test('returns an empty string if the input consists only of exclamation marks', () => {
        expect(removeExclamationMarks('!!!')).toEqual('');
    });

    test('removes exclamation marks from a string with mixed characters', () => {
        expect(removeExclamationMarks('He!ll!o! W!orl!d!')).toEqual(
            'Hello World',
        );
    });
});
