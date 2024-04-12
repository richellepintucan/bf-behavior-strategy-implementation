import { addArrays } from './update-first-array';

describe('addArrays', () => {
    test('adds corresponding elements of two arrays', () => {
        expect(addArrays([1, 2, 3], [4, 5, 6])).toEqual([5, 7, 9]);
    });

    test('throws error if arrays have different lengths', () => {
        expect(() => addArrays([1, 2, 3], [4, 5])).toThrow(Error);
    });

    test('adds arrays of zeros', () => {
        expect(addArrays([0, 0, 0], [0, 0, 0])).toEqual([0, 0, 0]);
    });

    test('adds arrays with negative numbers', () => {
        expect(addArrays([-1, -2, -3], [-4, -5, -6])).toEqual([-5, -7, -9]);
    });

    test('adds arrays with decimal numbers', () => {
        expect(addArrays([1.5, 2.5, 3.5], [4.5, 5.5, 6.5])).toEqual([6, 8, 10]);
    });
});
