function romanToIntegers(s) {
    let number = 0;
    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "I":
                number = 1;
                sum += number;
                break;

            case "V":
                number = 5;
                if(s[i - 1] === "I"){
                    number = 3;
                }
                sum += number;
                break;

            case "X":
                number = 10;
                if(s[i - 1] === "I"){
                    number = 8;
                }
                sum += number;
                break;

            case "L":
                number = 50;
                if(s[i - 1] === "X"){
                    number = 30;
                }
                sum += number;
                break;

            case "C":
                number = 100;
                if(s[i - 1] === "X"){
                    number = 80;
                }
                sum += number;
                break;

            case "D":
                number = 500;
                if(s[i - 1] === "C"){
                    number = 300;
                }
                sum += number;
                break;

            case "M":
                number = 1000;
                if(s[i - 1] === "C"){
                    number = 800;
                }
                sum += number;
                break;
        }
    }

    return sum;
}

romanToIntegers("IX")