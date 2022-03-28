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
 * return index of element in array that equals target
 * @param {Array} numbers
 * @param {Number} target
 * @return {Array}
 */
export default function twoSum(numbers, target) {
    if (!Array.isArray(numbers)) throw new Error()
    if (typeof target !== 'number') throw new Error()

    // 解法：1 一個一個迴圈比較直到相加相同
    // 解法二：2 先排序，再比較
    // 2.1 先按照大小排序
    const sortedNumbers = numbers.slice().sort((a, b) => a - b)
    let minIndex = 0
    let maxIndex = numbers.length - 1
    // 2.2 再來將最小和最大數字相加，如果相加等於target，則回傳
    // 2.3 如果相加不等於target，若是大於 target 則最大值向左一格；反之則小於 target 則最小值向右一格
    while (true) {
        if (sortedNumbers[minIndex] + sortedNumbers[maxIndex] > target) {
            maxIndex--
        } else if (sortedNumbers[minIndex] + sortedNumbers[maxIndex] < target) {
            minIndex++
        } else {
            return [
                numbers.indexOf(sortedNumbers[minIndex]),
                numbers.lastIndexOf(sortedNumbers[maxIndex]),
            ]
        }
    }
}
