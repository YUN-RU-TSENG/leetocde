/**
 * Returns maxArea of a given array
 * @param {number[]} height - heights of each bar
 * @return {number} max area
 */
function maxArea(height) {
    if (!Array.isArray(height)) throw new Error('height is not correct type')
    if (!height.length) return 0

    let result = 0

    for (let i = 0; i < height.length; i++) {
        for (let j = height.length - 1; j >= 0; j--) {
            const area = Math.min(height[i], height[j]) * (j - i)
            if (area > result) result = area
        }
    }

    return result
}

export default maxArea
// let left = 0, right = height.length - 1, max = 0;
// while (left < right) {
//     max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
//     if (height[left] < height[right]) left++;
//     else right--;
// }
// return max;
