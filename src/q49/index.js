/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
    // 儲存的物件
    const groups = {}
    // 依序循環每個 strs，將其內容字母排序後存入物件（沒有該屬性新增陣列並存入值、有則在陣列中存值）
    for(let index = 0; index < strs.length; index ++) {
        const curStr = strs[index]
        const curKey = curStr.split('').sort().join('')

        if(groups[curKey]) groups[curKey].push(curStr)
        else groups[curKey] = [curStr]
    }

    return Object.values(groups)
};