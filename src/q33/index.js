/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
    const center = nums[Math.floor(nums.length - 1)]

    let answer = -1

    // binary search
    // 要達成 o(log n) ，由於是旋轉陣列，需要比較要找的數值比較接近頭部還是尾部，再從那個位置往下找
    if (target < center) {
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
