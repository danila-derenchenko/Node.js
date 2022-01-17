const colors = require("colors");

const checkNumber = (x, y) => {
    const arg1 = Number(x);
    const arg2 = Number(y);
    console.log(arg1, arg2);
    if (arg1 > 2 || arg2 > arg1 || isNaN(arg1) != true || isNaN(arg2) != true) {
        let primeNumbers = [];
        for (let i = arg1; i <= arg2; i++) {
            let y = 0;
            for (let a = 2; a < i; a++) {
                if (i % a == 0) {
                    y = 1;
                }
            }
            if (y == 0) {
                primeNumbers.push(i);
            }
        };
        if (primeNumbers.length == 0) {
            console.log(colors.red("В указанном диапазоне нет простых чисел"));
        }
        else {
            let s = 1;
            for (let i of primeNumbers) {
                if (s == 1) {
                    console.log(colors.green(i));
                    s = 2;
                }
                else if (s == 2) {
                    console.log(colors.yellow(i));
                    s = 3;
                }
                else if (s == 3) {
                    console.log(colors.red(i));
                    s = 1;
                }
            }
        }
    }
    else if (arg1 < 2 || arg2 < arg1) {
        console.log(colors.red("Ошибка. Первый аргумент должен быть больше двух, а второй должен быть больше первого"));
    }
    else if (isNaN(arg1) === true || isNaN(arg2) === true) {
        console.log(colors.red("Ошибка. Аргументы должны быть числами"));
    }
};

checkNumber(process.argv[2], process.argv[3]);