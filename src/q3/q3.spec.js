import longestPalindrome from './q3.js'

describe('function longestPalindrome(string)', () => {
    describe('should throw Error, when string is not correct type', () => {
        it('longestPalindrome(1) should throw error', () => {
            expect(() => longestPalindrome(1)).toThrow('string is not correct type')
        })
        it('longestPalindrome(true) should throw error', () => {
            expect(() => longestPalindrome(true)).toThrow('string is not correct type')
        })
    })

    describe('should return "", when string is ""', () => {
        it("longestPalindrome('') should return ''", () => {
            expect(longestPalindrome('')).toBe('')
        })
    })

    describe("should return palindrome, when string 's length is more than 1", () => {
        it("longestPalindrome('babad') should return 'bab'", () => {
            expect(longestPalindrome('babad')).toBe('bab')
        })
        it("longestPalindrome('cbbd') should return 'bb'", () => {
            expect(longestPalindrome('cbbd')).toBe('bb')
        })
        it("longestPalindrome('babad') should return 'bab'", () => {
            expect(longestPalindrome('babad')).toBe('bab')
        })
        it("longestPalindrome('aa') should return 'aa'", () => {
            expect(longestPalindrome('aa')).toBe('aa')
        })
        it("longestPalindrome('aaaaabbaa') should return 'aabbaa'", () => {
            expect(longestPalindrome('aaaaabbaa')).toBe('aabbaa')
        })
    })
})
