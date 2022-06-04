import lengthOfLongestSubstring from './q3.js';

describe('function lengthOfLongestSubstring(s)', () => {
    test('should throw Error, when s is not correct type', () => {
        expect(() => lengthOfLongestSubstring(1)).toThrow('s must be a string')
        expect(() => lengthOfLongestSubstring(null)).toThrow('s must be a string')
    })

    test('should return 0, when s is empty', () => {
        expect(lengthOfLongestSubstring('')).toBe(0)
    })

    test('should return length of longest substring without repeating characters', () => {
        expect(lengthOfLongestSubstring('aa')).toBe(1)
        expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
        expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
    })
})
