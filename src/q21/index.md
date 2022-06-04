# LeetCode 21

###### `leetcode` `easy`

## 題目

[Merge Two Sorted Lists - LeetCode](https://leetcode.com/problems/merge-two-sorted-lists/)

## 解題思路

-   創建一個虛假的 `fakeLinkList`
-   創建一個 `currentFakeLinkListNode` 指向 `fakeLinkList`（這是因為若沒有此幫助，會需要 `fakeLinkList.next....next = listN` 這樣寫
-   當 `list1`、`list` 都還有 `node`，比較 `list1`、`list2` 當前 `node` 大小，`currentFakeLinkListNode.next` 會指向較小的 `node`，並將 `listN`（較小的）指向 `listN.next` 下一個，繼續比較
-   比較到 `list1`、`list2` 其中一方沒了，則 `currentFakeLinkListNode.next` 指向兩者仍有剩餘的
-   返回 `fakeLinkList.next`
-   記住 `list1`、`list2` 是 `linkListNode`

```javascript
/**
 * 合併兩個升冪的 LinkList 成為一個新的 LinkList
 * @param {ListNode} list1 head
 * @param {ListNode} list2 head
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
    // 創建一個虛假的 linklist
    // currentFakeLinklistNode 是為了指向當前虛假的 linklist 的 next node，這樣才可以 crt.next = xxx 而不用隨著更多層 fakeLinkList.next.next.next
    let fakeLinkList = {
            head: null,
            next: null,
        },
        currentFakeLinklistNode = fakeLinkList

    // 比較 list1 list2 當 list1 現在的 node 小，則虛假 linklist next 指向 list2
    while (list1 && list2) {
        if (list1.val > list2.val) {
            currentFakeLinklistNode.next = list2
            list2 = list2.next
        } else {
            currentFakeLinklistNode.next = list1
            list1 = list1.next
        }
        currentFakeLinklistNode = currentFakeLinklistNode.next
    }

    // 若 list1 list2 一方比較完，但另一方還有剩，虛假 linklist next 則指向它
    currentFakeLinklistNode.next = list1 || list2

    return fakeLinkList.next
}
```
