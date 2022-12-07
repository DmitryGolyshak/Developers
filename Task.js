//функция, разбивающая число на цифры
function getBreakTheNumber(number){
    while (number >= 1) {
        if (number % 10 == 0) {
            number = number / 10;
            breakTheNumber.push(0);
        } else if (number < 10) {
            breakTheNumber.push(number);
            break;
        } else {
            breakTheNumber.push(number % 10);
            number = ((number - (number % 10)) / 10);
        }
    }
    return breakTheNumber;
}
let breakTheNumber = [];

//1.1
function calcNod(number1, number2) {
    let NOD;
    for (let divider = 1; number1 / divider >= 1 && number2 / divider >= 1; divider++) {
        if (number1 % divider == 0 && number2 % divider == 0) {
            NOD = divider;
        }
    }
    return NOD;
}//исправлены названия переменных.

//1.2
function getIsPrimeNum(a) {
    let b = 2;
    while (a % 2 !== 0 && a % b !== 0 && b <= a) {
    }
    b++;
    return b == a;
}

function getIsPrimeNum(a) {
    return (a == 2 || a == 3 || a == 5 || a == 7 || a % 2 !== 0 && a % 10 >= 0 && a % 3 !== 0 && a % 5 !== 0 && a % 7 !== 0 && a % 9 !== 0);
}//уменьшено потребление ресурсов, но простые числа до 10 - ?

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

function getSumAndNumOfNumber(number) {
    let result = [];
    getBreakTheNumber(number);
    result.push(breakTheNumber.reduce((accumulator, currentValue) => accumulator + currentValue));
    result.push(breakTheNumber.length);
    return result;
}//отдельная функция для разбивки чисел, решение через метод массива.

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

function calcPerfectNum(number) {
    let arr = [];
    for (let divider = 1; number / divider > 1; divider++) {
        if (number % divider == 0) {
            arr.push(divider);
        }
    }
    return (Object.is(arr.reduce((accumulator, currentValue) => accumulator + currentValue), number));
}//исправлены названия, while заменен на reduce

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

function getNumEqualSumCubeDigits(N) {
    for(let number = 10; number < N; number++){
        getBreakTheNumber(number);
        breakTheNumber.forEach((item) => item ** 3);
    }
    return breakTheNumber;
}//еще доделываю

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

function insertNine(number) {
    getBreakTheNumber(number);
    const newArray = breakTheNumber.reduce(function (previousValue, currentValue) {
        previousValue.push(currentValue);
        previousValue.push(9);
        return previousValue;
    }, [])
    newArray.pop();
    newArray.reverse();
    return +newArray.join('');
}//отдельная функция для разбивки чисел, решение через метод массива, возвращается число.


//1.7
function calcNumSolutions(number) {
    let x, y;
    let numSolutions = 0;
    for (x = 1; x < number; ++x) {
        for (y = 1; y < number; ++y) {
            if (x * x + y * y < number) {
                ++numSolutions;
            }
        }
    }
    return (numSolutions);
}//исправлены названия переменных.

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

function doubleMaxNum(number) {
    getBreakTheNumber(number);
    breakTheNumber.reverse();
    let max = Math.max(...breakTheNumber);
    const newArray = breakTheNumber.reduce(function (previousValue, currentValue) {
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
doubleMaxNum(564638642);//отдельная функция для разбивки чисел, изменены названия переменных.

//1.9
function getNumWithoutRepeat() {
    let result = [];
    for (let hundreds = 1; hundreds <= 9; hundreds++) {
        for (let tens = 0; tens <= 9; tens++) {
            if (hundreds != tens) {
                for (let units = 0; units <= 9; units++) {
                    if ((units != hundreds) & (units != tens)) {
                        let numWithoutRepeat = hundreds * 100 + tens * 10 + units;
                        result.push(numWithoutRepeat);
                    }
                }
            }
        }
    }
    return result;
}//изменены названия переменных.