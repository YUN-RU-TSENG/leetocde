/**
 * Returns longest palindrome in a string
 * @param {string} string
 * @returns {string} longest palindrome
 */
function longestPalindrome(string) {
    if (typeof string !== 'string') throw new Error('string is not correct type')
    if (string.length < 2) return string

    let result = ''
    // dynamic programming
    const table = string.split('').map(() => new Array(string.length))

    for (let i = 0; i < table.length; i++) {
        table[i][i] = true
        if (result.length < string.slice(i, i + 1).length) result = string.slice(i, i + 1)
    }

    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < i; j++) {
            if (i - j <= 1) table[i][j] = string[i] === string[j]
            else table[i][j] = string[i] === string[j] && table[i - 1][j + 1]

            if (table[i][j] && result.length < string.slice(j, i + 1).length)
                result = string.slice(j, i + 1)
        }
    }

    return result
}

export default longestPalindrome
