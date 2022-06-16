function maxSubArray(nums) {
    let pre = 0
    let maxSum = Number.NEGATIVE_INFINITY

    for (let index = 0; index < nums.length; index++) {
        pre = Math.max(nums[index], pre + nums[index])
        maxSum = Math.max(maxSum, pre)
    }

    return maxSum
}
