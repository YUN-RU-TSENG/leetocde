function minPathSum(grid) {
    // 創建一個答案二維陣列
    const dp = new Array(grid.length + 1).fill(0).map(() => {
        return new Array(grid[0].length + 1).fill(Number.MAX_SAFE_INTEGER)
    })
    // 回圈自最後一層列開始
    for (let i = 0; i < grid.length; i++) {
        // 回圈自最後一個元素開始
        for (let j = 0; j < grid[0].length; j++) {
            // 例外是最後一個列的最後一個元素，答案等於自己
            const row = grid.length - 1 - i
            const col = grid[0].length - 1 - j
            if (j === 0 && i === 0) {
                dp[row][col] = grid[row][col]
                continue
            }
            // 每個元素的加總答案等於自己加上左邊或是右邊的最小
            dp[row][col] = grid[row][col] + Math.min(dp[row + 1][col], dp[row][col + 1])
        }
    }

    return dp[0][0]
}

minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
])
