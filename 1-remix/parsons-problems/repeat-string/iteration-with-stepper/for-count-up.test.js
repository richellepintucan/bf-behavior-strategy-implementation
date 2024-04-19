import { repeatString } from './for-count-up';

describe('repeatString function', () => {
    test('should return an empty string when text is empty', () => {
      expect(repeatString('', 5)).toEqual('');
    });
  
    test('should return an empty string when repetitions is 0', () => {
      expect(repeatString('hello', 0)).toEqual('');
    });
  
    test('should return the text repeated the specified number of times', () => {
      expect(repeatString('hello', 3)).toEqual('hellohellohello');
    });
  
    test('should return the text repeated once if repetitions is not provided', () => {
      expect(repeatString('hello')).toEqual('hello');
    });
  
    test('should return the text repeated once if repetitions is 1', () => {
      expect(repeatString('hello', 1)).toEqual('hello');
    });
  
    test('should return an empty string if text is not provided', () => {
      expect(repeatString()).toEqual('');
    });
  });