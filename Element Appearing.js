function appearingElement(arr) {
    let counter = 0;
    let lastNumber = 1;
    let minimum = arr.length / 4;

    for (let i of arr) {
        if (lastNumber !== i) {
            counter = 0;
            lastNumber = i;
        }
        counter++;

        if (counter > minimum) {
            return lastNumber;
        }
    }

    return 1;
}

console.log(appearingElement([1, 2, 2, 6, 6, 6, 6, 7, 10]));