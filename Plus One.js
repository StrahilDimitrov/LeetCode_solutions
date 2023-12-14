function plusOne(digits) {
    let result = [];
    let sumOfDigits = BigInt(digits.join(''));
    sumOfDigits += 1n;
    let converToString = sumOfDigits.toString();

    for (let i = 0; i < converToString.length; i++) {
        let currentElement = converToString[i];

        result.push(currentElement);
    }

    return result;
}

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));