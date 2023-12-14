function removeDublicate(head) {
    if (head == null) {
        return null;
    }

    let current = head;

    while (current.next != null) {
        let curVal = current.val;
        let nextVal = current.next.val;

        if (curVal == nextVal) {
            current.next = current.next.next;
        }
        else {
            current = current.next
        }
    }

    return head;
}

console.log(removeDublicate([1, 1, 2, 3, 3]));