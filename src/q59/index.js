/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
    const sortIntervals = intervals.slice().sort((a, b) => a[0] - b[0])
    // 新陣列組
    const answer = []
    // 前一個陣列
    let preAry = null
    // 前一個陣列尾巴
    let preAryEnd = -1

    // 迴圈
    for (let i = 0; i < sortIntervals.length; i++) {
        if (preAryEnd >= sortIntervals[i][0]) {
            const cacheAry = [...preAry, ...sortIntervals[i]].sort((a, b) => a - b)
            preAry = [cacheAry[0], cacheAry[3]]
            preAryEnd = preAry[1]
        } else {
            if (preAry) answer.push(preAry)
            preAry = sortIntervals[i]
            preAryEnd = preAry[1]
        }
    }

    answer.push(preAry)

    return answer
}

merge([
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [1, 10],
])
