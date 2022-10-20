//1.1
function calcNod(a, b) {
    let NOD;
    for (let c = 1; a / c >= 1 && b / c >= 1; c++) {
        if (a % c == 0 && b % c == 0) {
            NOD = c;
        }
    }
    return NOD;
}

//1.2
function getIsPrimeNum(a) {
    let b = 2;//*
    while (a % 2 !== 0 && a % b !== 0 && b <= a) {//оптимизация
        ++b;
    }

    return b == a;
}

//1.3
function getSumNumber(a) {
    let sum = 0;
    let count = 0;
    while (a >= 1) {//упростить
        let lastNum = a % 10;
        if (lastNum == 0) {
            a = a / 10;
            count++;
        } else if (a < 10) {
            sum += a;
            count++;
            break;
        } else {
            sum = sum + lastNum;
            a = a - lastNum;
        }
    }
    return ({ sum, count });
}

//1.4
function calcPerfectNum(a) {
    let arr = [];
    for (let b = 1; a / b > 1; b++) {//название переменных, с reduce в while
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

//1.5
function getSumCube(x) { //для всех чисел
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

//1.6
function insertNine(a) {//использовать методы массивов, названия переменных, вернуть число
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

//1.7
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

//1.8
function doubleMaxNum(a) {//разбивка цифер как отдельная функция
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

//1.9
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

function doubleMaxNum(a) {
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
            a = (a - (a % 10)) / 10;
        }
    }
    arr.reverse();
    let max = Math.max(...arr);
    const newArray = arr.reduce(function (previousValue, currentValue) {
        if (currentValue == max) {
            previousValue.push(currentValue);
        }
        previousValue.push(currentValue);
        return (previousValue);
    }, [])
    //for (let i = 0; i < arr.length-1; i++)
    // previousValue = previousValue.join('');
    return newArray.join('');
}
doubleMaxNum(564638642);