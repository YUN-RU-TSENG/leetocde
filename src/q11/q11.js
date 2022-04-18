/**
 * Returns maxArea of a given array
 * @param {number[]} height - heights of each bar
 * @return {number} max area
 */
function getMaxArea(height) {
    if (!Array.isArray(height)) throw new Error('height is not correct type')
    if (!height.length) return 0

    let result = 0,
        right = height.length - 1,
        left = 0

    while (left < right) {
        result = Math.max(Math.min(height[left], height[right]) * (right - left), result)

        if (height[left] < height[right]) left++
        else right--
    }

    return result
}

export default getMaxArea
