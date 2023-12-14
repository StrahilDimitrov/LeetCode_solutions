function finalValue(operations) {
    let sum = 0;

    for (let i = 0; i < operations.length; i++) {
        let command = operations[i];

        switch (command) {
            case "--X":
            case "X--":
                sum -= 1;
                break;

            case "X++":
            case "++X":
                sum += 1;
                break;
        }
    }

    console.log(sum);
}

finalValue(["++X", "++X", "X++"])