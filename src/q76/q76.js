var minWindow = function (s, t) {
    // 判斷文字是否包含子字串
    // 滑動窗口移動
    let l = 0,
        r = -1
    const stringStable = {}
    let noReapetString = 0
    let result = ''

    for (let i = 0; i < t.length; i++) {
        const currentString = t[i]
        if (stringStable[currentString] == undefined) {
            stringStable[currentString] = 1
            noReapetString += 1
        } else {
            stringStable[currentString] += 1
        }
    }

    let currentSubCount = 0

    while (r < s.length) {
        r += 1

        if (s[r] in stringStable) {
            stringStable[s[r]] -= 1
            if (stringStable[s[r]] === 0) currentSubCount += 1
        }

        if (currentSubCount != noReapetString) continue

        while (currentSubCount === noReapetString) {
            if (s[l] in stringStable) {
                if (stringStable[s[l]] == 0) {
                    break
                } else {
                    l += 1
                    stringStable[s[l - 1]] += 1
                }
            } else {
                l += 1
            }
        }

        const currentResult = s.slice(l, r + 1)
        if (!result) {
            result = currentResult
        } else {
            result = result.length < currentResult.length ? result : currentResult
        }
    }

    return result
}

minWindow('ADOBECODEBANC', 'ABC')
