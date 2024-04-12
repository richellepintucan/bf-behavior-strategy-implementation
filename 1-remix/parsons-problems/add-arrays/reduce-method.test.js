import { addArrays } from './reduce-method';

describe('addArrays', () => {
    test('adds corresponding elements of two arrays', () => {
        expect(addArrays([1, 2, 3], [4, 5, 6])).toEqual([5, 7, 9]);
    });

    test('throws error if arrays have different lengths', () => {
        expect(() => addArrays([1, 2, 3], [4, 5])).toThrowError(
            'Array lengths not same size',
        );
    });
});
