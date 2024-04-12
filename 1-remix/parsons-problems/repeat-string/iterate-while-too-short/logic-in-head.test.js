import { repeatString } from './logic-in-head';

// Describe block for the function
describe('repeatString function', () => {
    // Test case 1: Repeat string once
    test('Repeats the string once', () => {
        const text = 'hello';
        const repetitions = 1;
        const expectedOutput = 'hello';
        const result = repeatString(text, repetitions);
        expect(result).toEqual(expectedOutput);
    });

    // Test case 2: Repeat string multiple times
    test('Repeats the string multiple times', () => {
        const text = 'hello';
        const repetitions = 3;
        const expectedOutput = 'hellohellohello';
        const result = repeatString(text, repetitions);
        expect(result).toEqual(expectedOutput);
    });

    // Test case 3: Repeat an empty string
    test('Repeats an empty string', () => {
        const text = '';
        const repetitions = 5;
        const expectedOutput = '';
        const result = repeatString(text, repetitions);
        expect(result).toEqual(expectedOutput);
    });

    // Test case 4: Repeat with default values
    test('Repeats with default values', () => {
        const expectedOutput = '';
        const result = repeatString();
        expect(result).toEqual(expectedOutput);
    });
});
