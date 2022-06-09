/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    const last = nums[nums.length - 1]
    let answer = -1

    if (target > last) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === target) answer = i
        }
    } else {
        for (let i = nums.length - 1; i > -1; i--) {
            if (nums[i] === target) answer = i
        }
    }

    return answer
}
