/**
 * @param {ListNode} list1 head
 * @param {ListNode} list2 head
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    // 創建一個虛假的 linklist
    let fakeLinkList = {
            head: null,
            next: null,
        },
        crt = fakeLinkList

    // 比較 list1 list2 當 list1 現在的 node 小，則虛假 linklist next 指向 list2
    while (list1 && list2) {
        if (list1.val > list2.val) {
            crt.next = list2
            list2 = list2.next
        } else {
            crt.next = list1
            list1 = list1.next
        }
        crt = crt.next
    }

    // 若 list1 list2 一方比較完，但另一方還有剩，虛假 linklist next 則指向它
    crt.next = list1 || list2

    return fakeLinkList.next
}
