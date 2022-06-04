/**
 * 合併兩個升冪的 LinkList 成為一個新的 LinkList
 * @param {ListNode} list1 head
 * @param {ListNode} list2 head
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
    // 創建一個虛假的 linkList
    // currentFakeLinkListNode 是為了指向當前虛假的 linkList 的 next node，這樣才可以 currentFakeLinkListNode.next = xxx 而不用隨著更多層 fakeLinkList.next.next.next
    let fakeLinkList = {
            head: null,
            next: null,
        },
        currentFakeLinkListNode = fakeLinkList

    // 比較 list1 list2 當 list1.value < list2.value ，則虛假 linkList next 指向 list2
    while (list1 && list2) {
        if (list1.val > list2.val) {
            currentFakeLinkListNode.next = list2
            list2 = list2.next
        } else {
            currentFakeLinkListNode.next = list1
            list1 = list1.next
        }
        currentFakeLinkListNode = currentFakeLinkListNode.next
    }

    // 若 list1 list2 一方比較完，但另一方還有剩，虛假 linkList next 則指向它
    currentFakeLinkListNode.next = list1 || list2

    return fakeLinkList.next
}
