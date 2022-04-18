/**
 * 得出 numbers 陣列中所有 3 個一組總和為 0 的數字組合
 * @param {*} numbers
 * @returns {number[][]}
 */
function threeSum(numbers) {
    if (!Array.isArray(numbers)) throw Error('numbers is not correct type')

    const sortNumbers = numbers.slice().sort((a, b) => a - b)
    const result = []

    for (let i = 0; i < sortNumbers.length; i++) {
        let left = i + 1,
            right = sortNumbers.length - 1

        if (i > 0 && sortNumbers[i] === sortNumbers[i - 1]) continue

        while (left < right) {
            const answer = sortNumbers[i] + sortNumbers[left] + sortNumbers[right]

            if (answer === 0) {
                result.push([sortNumbers[i], sortNumbers[left], sortNumbers[right]])

                while (sortNumbers[left] === sortNumbers[left + 1]) left++
                while (sortNumbers[left] === sortNumbers[left + 1]) right--

                left++
                right--
            } else if (answer < 0) left++
            else if (answer > 0) right--
        }
    }
    return result
}

// threeSum([0, 0, 0, 0])
export default threeSum
