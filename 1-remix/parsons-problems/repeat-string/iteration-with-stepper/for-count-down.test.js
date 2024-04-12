import { repeatString } from './for-count-down';

describe('repeatString function', () => {
    test('should repeat string once by default', () => {
        expect(repeatString('hello')).toEqual('hello');
    });

    test('should repeat string specified number of times', () => {
        expect(repeatString('hello', 3)).toBe('hellohellohello');
    });

    test('should handle empty string', () => {
        expect(repeatString('', 5)).toEqual('');
    });

    test('should handle zero repetitions', () => {
        expect(repeatString('hello', 0)).toEqual('');
    });

    test('should handle negative repetitions', () => {
        expect(repeatString('hello', -2)).toEqual('');
    });

    test('should handle non-string input', () => {
        expect(repeatString(123, 2)).toEqual('');
    });

    test('should handle non-integer repetitions', () => {
        expect(repeatString('hello', 2.5)).toEqual('');
    });

    test('should handle non-numeric repetitions', () => {
        expect(repeatString('hello', '2')).toEqual('hellohello');
    });
});
