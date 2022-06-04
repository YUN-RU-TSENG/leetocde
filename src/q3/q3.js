/**
 * Return length of longest substring of s without repeating characters
 * @param {string} string
 * @return {number} length of longest substring without repeating characters
 */
function lengthOfLongestSubstring(string) {
    if (typeof string !== 'string') throw new Error('s must be a string')
    if (string.length === 0) return 0

    // use two pointers
    let left = 0
    let right = 0
    let result = ''
    let substringSet = new Set()

    while (right < string.length) {
        const substring = string.substring(left, right + 1)
        const currentChar = string.substring(right, right + 1)

        if (substringSet.has(currentChar)) left++
        else right++

        substringSet = new Set(string.substring(left, right).split(''))
        result = result.length < substring.length ? substring : result
    }

    return result.length
}

export default lengthOfLongestSubstring
