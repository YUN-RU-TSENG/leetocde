/**
 * 拿走 LinkedList 倒數第 n 個的 node
 * @param {LinkedList Node} head
 * @param {number} n
 * @returns {LinkedList Node} head
 */
function removeNthFromEnd(head, n) {
    let slow = head,
        fast = head

    for (let i = 0; i < n; i++) {
        fast = fast.next
    }

    if (!fast) {
        head = head.next
        return head
    }

    while (fast.next) {
        fast = fast.next
        slow = slow.next
    }

    slow.next = slow.next.next

    return head
}
