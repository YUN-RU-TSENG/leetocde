/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (!lists.length) return null

    // 創建迴圈，當 lists 內部還有數值，繼續執行
    // 比較 lists 內部的 listNode 差，返回排序過的 listNode
    while (lists.length > 1) {
        // 取首端排序
        const a = lists.shift()
        const b = lists.shift()
        const news = compareLinkList(a, b)

        // 末端存比較的，不要一直重複拿比較合併過的比較省運算
        lists.push(news)
    }

    return lists[0]
}

// 比較兩者 listNode 大小，反回升冪 listNode
function compareLinkList(a, b) {
    // 創建新的 newLinkedList
    const newLinkedList = { head: -1, next: null }
    // 為了更方便的存取 newLinkedList 指向的最新 listNode 而建立
    let point = newLinkedList

    // 當 a、b 有值，比較當前大小，小的收錄到 newLinkList 中
    while (a && b) {
        if (a.val > b.val) {
            point.next = b
            b = b.next
        } else {
            point.next = a
            a = a.next
        }
        // 重新指向當前最新的 listNode 以供下次回圈收錄最新的 listNode
        point = point.next
    }

    // 剩餘的 listNode 將被指向最末端
    if (a) point.next = a
    else if (b) point.next = b

    // 返回合併排序過的第一個 listNode
    return newLinkedList.next
}
