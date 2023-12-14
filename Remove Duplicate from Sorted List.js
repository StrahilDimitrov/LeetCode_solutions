function remove(head) {
    let result = [];

    for (let i = 0; i < head.length; i++) {
        for (let j = i + 1; j < head.length; j++) {
            if(head[i] === head[j]){
                head.splice(i, 1);
            }
        }
        result.push(head[i]);
    }

    return result;
}

console.log(remove([1, 1, 2, 3, 3]));

console.log('----------');

// Ready code
function removeDuplicate(head) {

    for (let i = 0; i < head.length; i++) {
        for (let j = i + 1; j < head.length; j++) {
            if (head[i] === head[j]) {
                head.splice(i, 1);
            }
        }
    }

    return head;
}

console.log(removeDuplicate([1, 1, 2, 3, 3]));