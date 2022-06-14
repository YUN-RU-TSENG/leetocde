function rotate(matrix) {
    // 總共要位移幾次由正方形長度決定
    const length = matrix.length
    const halfLength = Math.floor(length / 2)

    // 旋轉方形
    for (let i = 0; i < halfLength; i++) {
        // 要注意位移每一層的迴圈次數為當層減去一
        for (let j = 0; j < length - 1 - i * 2; j++) {
            const stay = matrix[i][j + i]
            matrix[i][j + i] = matrix[length - 1 - j - i][i]
            matrix[length - 1 - j - i][i] = matrix[length - 1 - i][length - 1 - j - i]
            matrix[length - 1 - i][length - 1 - j - i] = matrix[j + i][length - 1 - i]
            matrix[j + i][length - 1 - i] = stay
        }
    }

    return matrix
}
