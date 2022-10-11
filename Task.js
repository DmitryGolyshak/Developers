1.1
function calcNod(a, b) {
    let arr = [];
    for (let c = 1; a / c >= 1 & b / c >= 1; c++) {
        if (a % c == 0 & b % c == 0) {
            arr.push(c);
        }
    }
    return (arr[arr.length - 1]);
}
calcNod(24, 56);

1.2
function getPrimeNum(a) {
    let b = 2;
    while (a % b !== 0 & b <= a) {
        ++b;
    }
    if (b == a) {
        return ('Данное натуральное число является простым');
    } else {
        return ('Данное натуральное число не является простым');
    }
}
getPrimeNum(13);

1.3
function getSumNumber(a) {
    let b = 0;
    let c = 0;
    while (a >= 1) {
        if (a % 10 == 0) {
            a = a / 10;
            c = c + 1;
        } else if (a < 10) {
            b = b + a;
            c = c + 1;
            break;
        } else {
            b = b + (a % 10);
            a = a - (a % 10);
        }
    }
    return (`Сумма цифр данного числа - ${b}, число состоит из ${c} цифр`);
}
getSumNumber(24);

1.4
function calcPerfectNum(a) {
    let arr = [];
    for (let b = 1; a / b > 1; b++) {
        if (a % b == 0) {
            arr.push(b);
        }
    }
    let c = 0;
    while (arr.length >= 1) {
        c = arr[arr.length - 1] + c;
        arr.pop();
    }
    if (c == a) {
        return ('Введенное число является совершенным');
    } else {
        return ('Введенное число не является совершенным');
    }
}
calcPerfectNum(28);


1.5
function getSumCube(x) {
    let a = "";
    while (x < 1000) {
        let b = x % 10;
        let c = ((x - b) / 10) % 10;
        let d = (((x - b) / 10) - c) / 10;
        if (b ** 3 + c ** 3 + d ** 3 == x) {
            a = a + x + " ";
        }
        x += 1;
    }
    return a;
}
getSumCube(100);


1.6
function insertNine(a) {
    let arr = [];
    while (a >= 1) {
        if (a % 10 == 0) {
            a = a / 10;
            arr.push(0);
        } else if (a < 10) {
            arr.push(a);
            break;
        } else {
            arr.push(a % 10);
            a = ((a - (a % 10)) / 10);
        }
    }
    let b = 0;
    while (arr.length >= 1) {
        if (arr.length > 1) {
            b = b + arr[arr.length - 1] + '9';
        } else {
            b = b + arr[arr.length - 1];
        }
        arr.pop();
    }
    return (b);
}
insertNine(3475);

1.7
function calcNumSolutions(n) {
    let x, y;
    let c = 0;
    for (x = 1; x < n; ++x) {
        for (y = 1; y < n; ++y) {
            if (x * x + y * y < n) {
                c = c + 1;
            }
        }
    }
    return (c);
}
calcNumSolutions(18);

1.8
function doubleMaxNum(a) {
    let arr = [];
    let arr2 = [];
    while (a >= 1) {
        if (a % 10 == 0) {
            a = a / 10;
            arr.push(0);
            arr2.push(0);
        } else if (a < 10) {
            arr.push(a);
            arr2.push(a);
            break;
        } else {
            arr.push(a % 10);
            arr2.push(a % 10);
            a = ((a - (a % 10)) / 10);
        }
    }
    let max = arr[arr.length - 1];
    for (let a = arr.length - 1; arr.length >= 1;) {
        if (arr[arr.length - 1] > max) {
            max = arr[arr.length - 1];
        }
        arr.pop();
        a = arr[arr.length - 1];
    }
    let arr3 = [];
    while (arr2.length >= 1) {
        if (arr2[arr2.length - 1] == max) {
            arr3.push(arr2[arr2.length - 1], arr2[arr2.length - 1]);
        } else {
            arr3.push(arr2[arr2.length - 1]);
        }
        arr2.pop();
    }
    let num = (arr3.toString()).replaceAll(',', '');
    return (num);
}
doubleMaxNum(5574522);


1.9
function getNum() {
    let arr = [];
    for (let i = 1; i <= 9; i++) {
        for (let j = 0; j <= 9; j++) {
            if (i != j) {
                for (let k = 0; k <= 9; k++) {
                    if ((k != i) & (k != j)) {
                        let a = i * 100 + j * 10 + k;
                        arr.push(a);
                    }
                }
            }
        }
    }
    return arr;
}