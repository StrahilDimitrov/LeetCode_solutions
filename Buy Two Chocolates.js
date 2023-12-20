function buyTwoChocolates(prices, money) {
    prices = prices.sort((a, b) => a - b);
    a = prices[0];
    b = prices[1];
    var sum = a + b;
    if (money < sum) {
        return money;
    }
    return money - sum;
}

console.log(buyTwoChocolates([98, 54, 6, 34, 66, 63, 52, 39], 62));