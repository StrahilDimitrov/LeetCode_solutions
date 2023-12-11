function palindromeNumber(x) {
    let number = x.toString();
    let result = [];

    for (let i = 0; i < number.length; i++) {
        result.push(number[i]);
    }

    result.reverse();
    return x === Number(result.join(''));
}

console.log(palindromeNumber(-121));