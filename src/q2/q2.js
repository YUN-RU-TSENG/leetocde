/**
 * Return length of longest substring of s without repeating characters
 * @param {string} s
 * @return {number} length of longest substring without repeating characters
 */
function lengthOfLongestSubstring(s) {
    if (typeof s !== 'string') throw new Error('s must be a string')
    if (s.length === 0) return 0
    let left = 0
    let right = 0
    let result = ''
    let set = new Set()

    while (right < s.length) {
        const substring = s.substring(left, right + 1)
        const reStart = false
        if (set.has(s.substring(right, right + 1))) {
            left ++
        } else {
            right++
            result = result.length < substring.length ? substring : result
        }
        set.clear()
        set = new Set(s.substring(left, right).split(''))
    }

    return result.length
}
// lengthOfLongestSubstring('aa')
export default lengthOfLongestSubstring
