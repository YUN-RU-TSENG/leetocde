var exist = function (board, word) {
    const currentCoors = []
    const wordCoorSet = new Set()

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0]) {
                currentCoors.push([i, j])
            }
        }
    }

    for (let k = 0; k < currentCoors.length; k++) {
        let currentCoor = currentCoors[k]
        wordCoorSet.clear()
        wordCoorSet.add(`x${currentCoor[0]}y${currentCoor[1]}`)

        for (let i = 1; i < word.length; i++) {
            const x = currentCoor[0]
            const y = currentCoor[1]
            let isFill = false

            if (board[x - 1]?.[y] === word[i]) {
                wordCoorSet.add(`x${x - 1}y${y}`)
                currentCoor = [x - 1, y]
                isFill = true
            } else if (board[x + 1]?.[y] === word[i]) {
                wordCoorSet.add(`x${x + 1}y${y}`)
                currentCoor = [x + 1, y]
                isFill = true
            } else if (board[x]?.[y - 1] === word[i]) {
                wordCoorSet.add(`x${x}y${y - 1}`)
                currentCoor = [x, y - 1]
                isFill = true
            } else if (board[x]?.[y + 1] === word[i]) {
                wordCoorSet.add(`x${x}y${y + 1}`)
                currentCoor = [x, y + 1]
                isFill = true
            }
            if (!isFill) break
        }

        if (wordCoorSet.size === word.length) return true
    }

    return false
}

exist(
    [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E'],
    ],
    'SEE'
)
