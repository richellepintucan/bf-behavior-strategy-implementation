import { addArrays } from './map-method-1';

describe('addArrays', () => {
    test('should add two arrays of the same length correctly', () => {
        const result = addArrays([1, 2, 3], [4, 5, 6]);
        expect(result).toEqual([5, 7, 9]);
    });

    test('should handle arrays with negative numbers correctly', () => {
        const result = addArrays([-1, -2, -3], [-4, -5, -6]);
        expect(result).toEqual([-5, -7, -9]);
    });

    test('should handle arrays with decimal numbers correctly', () => {
        const result = addArrays([1.5, 2.5, 3.5], [0.5, 1.5, 2.5]);
        expect(result).toEqual([2, 4, 6]);
    });

    test('should throw an error with a meaningful message if arrays have different lengths', () => {
        expect(() => {
            addArrays([1, 2, 3], [4, 5]);
        }).toThrowError('Arrays must have the same length');
    });

    test('should return an empty array if both input arrays are empty', () => {
        const result = addArrays([], []);
        expect(result).toEqual([]);
    });
});
