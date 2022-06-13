let combinationSum = function (candidates, target) {
    const result = []
    calculate(0, 0, [])
    return result


    function calculate(preventIndex, preventSum, preventArray) {
        if(preventSum > target) return
        if(preventSum === target) {
            result.push(preventArray)
        }
        for(let i = preventIndex; i < candidates.length; i++) {
            const currentIndex = i
            const currentSum = preventSum + candidates[i]
            const currentArray = [...preventArray, candidates[i]]
            calculate(currentIndex, currentSum, currentArray)
        }
    }
}