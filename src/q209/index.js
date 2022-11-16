var minSubArrayLen = function (target, nums) {
    // 左方指針 L index
    let L = 0
    // 右方指針 R index
    let R = 0
    // 最小長度
    let minLength = nums.length + 1

    // 迴圈到 R <= nums 長度
    while (R < nums.length) {
        const sum = nums.slice(L, R + 1).reduce((acc, cur) => acc + cur, 0)
        // 當 左右之間 相加大於 target, L ++
        if (sum > target) {
            L++
            continue
        }
        // 當 左右之間 相加小於 target, R ++
        if (sum < target) {
            R++
            continue
        }
        // 當 左右之間 相加等於 target, 存最小長度, R ++
        if (sum === target) {
            minLength = Math.min(minLength, R + 1 - L)
            R++
            continue
        }
    }

    return minLength === nums.length + 1 ? 0 : minLength
}

minSubArrayLen(11, [1, 2, 3, 4, 5])
