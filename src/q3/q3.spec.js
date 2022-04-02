import fn from './q3.js'

describe('function longestPalindrome(string)', () => {
    it('should throw Error, when string is not correct type', () => {
        expect(() => fn(1)).toThrow('string is not correct type')
        expect(() => fn(true)).toThrow('string is not correct type')
    })

    it('should return "", when string is ""', () => {
        expect(fn('')).toBe('')
    })

    it("should return palindrome, when string 's length is more than 1", () => {
        expect(fn('babad')).toBe('bab')
        expect(fn('cbbd')).toBe('bb')
        expect(fn('a')).toBe('a')
        expect(fn('aa')).toBe('aa')
        expect(fn('aaaaabbaa')).toBe('aabbaa')
    })
})
