function smallestEvenMultile(n) {
    let i = 1;

    while (true) {
        if (i % n === 0 && i % 2 === 0) {
            return i;
        }

        i++;
    }
}

console.log(smallestEvenMultile(5))