/**
 * Q Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.
 */

/**
 * Constraints:
 * 2 <= nums.length <= 104
 * -109 <= nums[i] <= 109
 * -109 <= target <= 109
 * Only one valid answer exists.
 */

/**
 * Returns the index of element in array that equals target
 * @param {number []} numbers - A list of numbers
 * @param {number} target - Sum of two numbers
 * @returns {number []}  Index of two numbers that add up to target
 */
function twoSum(numbers, target) {
    if (!Array.isArray(numbers)) throw new Error()
    if (typeof target !== 'number') throw new Error()

    // 2.1 先按照大小排序
    const sortedNumbers = numbers.slice().sort((a, b) => a - b)
    let minIndex = 0
    let maxIndex = numbers.length - 1

    while (minIndex < maxIndex) {
        // 2.3 如果相加不等於target，若是大於 target 則最大值向左一格；反之則小於 target 則最小值向右一格
        if (sortedNumbers[minIndex] + sortedNumbers[maxIndex] > target) {
            maxIndex--
        } else if (sortedNumbers[minIndex] + sortedNumbers[maxIndex] < target) {
            minIndex++
        } else {
            // 2.2 再來將最小和最大數字相加，如果相加等於target，則回傳
            return [
                numbers.indexOf(sortedNumbers[minIndex]),
                numbers.lastIndexOf(sortedNumbers[maxIndex]),
            ]
        }
    }
}

export default twoSum
