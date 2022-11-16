var reverseVowels = function (s) {
    const sa = s.split('')
    let left = 0
    let right = s.length - 1
    let leftS = null
    let rightS = null

    while (left < right) {
        if (/[aeiou]/.test(s[left])) {
            leftS = s[left]
        }
        if (/[aeiou]/.test(s[right])) {
            rightS = s[right]
        }

        if (leftS && rightS) {
            sa[left] = rightS
            sa[right] = leftS
            leftS = null
            rightS = null
            right--
            left++
            continue
        } else if (leftS && !rightS) {
            right--
            continue
        } else if (!leftS && rightS) {
            left++
            continue
        } else {
            right--
            left++
            continue
        }
    }

    return sa.join('')
}

reverseVowels('hello')
