function longestPalindrome(string) {
    if (typeof string !== 'string') throw new Error('string is not correct type')
    if (string.length < 2) return string

    let result = ''
    const array2D = string.split('').map((index) => new Array(index).fill(null))

    for (let i = 0; i < array2D.length; i++) {
        array2D[i][i] = true
        if (result.length < string.slice(i, i + 1).length) result = string.slice(i, i + 1)
    }

    for (let i = 0; i < array2D.length; i++) {
        for (let j = 0; j < i; j++) {
            if (Math.abs(i - j) <= 1) {
                array2D[i][j] = string[i] === string[j]
                if (array2D[i][j] && result.length < string.slice(j, i + 1).length)
                    result = string.slice(j, i + 1)
            } else {
                array2D[i][j] = !!(string[i] === string[j] && array2D[i - 1][j + 1])
                if (array2D[i][j] && result.length < string.slice(j, i  + 1).length)
                    result = string.slice(j, i + 1)
            }
        }
    }

    return result
}

export default longestPalindrome
