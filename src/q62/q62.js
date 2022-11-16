var uniquePaths = function (m, n) {
    const totalPath = new Array(m + 1).fill(undefined).map(() => {
        return new Array(n + 1).fill(0)
    })

    totalPath[m - 1][n - 1] = 1

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (i == m - 1 && j == n - 1) continue
            else {
                totalPath[i][j] = totalPath[i + 1][j] + totalPath[i][j + 1]
            }
        }
    }

    return totalPath[0][0]
}

uniquePaths(3, 7)
