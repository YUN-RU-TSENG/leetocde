// function longestPalindrome(string) {
//     if (typeof string !== 'string') throw new Error('string is not correct type')
//     if (!string.length) return string

//     let result = ''

//     for (let i = 0; i < string.length; i++) {
//         for (let j = i; j < string.length; j++) {
//             const currentSubstring = string.slice(i, j + 1)
//             const reverseCurrentSubstring = currentSubstring.split('').reverse().join('')
//             if (currentSubstring === reverseCurrentSubstring) {
//                 if (currentSubstring.length > result.length) {
//                     result = currentSubstring
//                 }
//             }
//             continue;
//         }
//     }
//     return result
// }

function longestPalindrome(string) {
    if (typeof string !== 'string') throw new Error('string is not correct type')
    if (string.length < 2) return string

    let result = ''
    let a = 0
    let b = 0

    a: for (let i = 0; i < string.length; i++) {
        for (let j = 0; j <= i; j++) {
            a++
            const currentSubstring = string.slice(i - j, i + j + 1)
            const reverseCurrentSubstring = currentSubstring.split('').reverse().join('')
            if (currentSubstring !== reverseCurrentSubstring) continue a
            if (currentSubstring.length > result.length) {
                result = currentSubstring
            }
        }
    }

    const secondString = string.split('').reverse().join('$')
    b: for (let i = 0; i < secondString.length; i++) {
        for (let j = 0; j <= i; j++) {
            b++
            const currentSubstring = secondString.slice(i - j, i + j + 1)
            const reverseCurrentSubstring = currentSubstring.split('').reverse().join('')
            if (currentSubstring !== reverseCurrentSubstring) continue b
            const currentSubstringCorrect = currentSubstring.split('$').reverse().join('')
            if (currentSubstringCorrect.length > result.length) {
                result = currentSubstringCorrect
            }
        }
    }

    console.log(a, b)
    return result
}

// longestPalindrome('abba')
export default longestPalindrome
