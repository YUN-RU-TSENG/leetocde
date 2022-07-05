/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert(intervals, newInterval) {
    // 新淺拷貝 newInterval
    let shallowCopyNewInterval = newInterval.slice()
    // 新答案
    const result = []
    // 迴圈整個 intervals
    for (let i = 0; i < intervals.length; i++) {
        const currentInterval = intervals[i]
        const min = Math.min(shallowCopyNewInterval[0], currentInterval[0])
        const max = Math.max(shallowCopyNewInterval[1], currentInterval[1])
        
        // 判斷當當前 intervals 和 newInterval 互相包含（range）則合併兩者
        if (
            currentInterval[0] <= shallowCopyNewInterval[0] &&
            currentInterval[1] >= shallowCopyNewInterval[0]
        ) {
            shallowCopyNewInterval = [min, max]
            continue
        }
        else if (
            currentInterval[0] > shallowCopyNewInterval[0] &&
            currentInterval[0] <= shallowCopyNewInterval[1]
        ) {
            shallowCopyNewInterval = [min, max]
            continue
        }
        // 不互相包含則將當前 intervals 推入答案中
        result.push(currentInterval)
    }

    // 將 newInterval 推入陣列中，然後合併，返回排序過的陣列
    result.push(shallowCopyNewInterval)

    return result.sort((pre, cur) => pre[0] - cur[0])
}

export default insert
