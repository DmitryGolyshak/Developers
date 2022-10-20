const COLORS = {
    red: "red",
    green: "green",
    blue: "blue",
};
const SIZE = {
    M: "M",
    S: "S",
    L: "L",
};
const collection = [
    {
        id: 1,
        color: COLORS.red,
        size: SIZE.M,
        isAvailable: true,
    },
    {
        id: 2,
        color: COLORS.green,
        size: SIZE.S,
        isAvailable: false,
    },
    {
        id: 3,
        color: COLORS.blue,
        size: SIZE.L,
        isAvailable: true,
    },
    {
        id: 4,
        color: COLORS.red,
        size: SIZE.M,
        isAvailable: false,
    },
    {
        id: 5,
        color: COLORS.red,
        size: SIZE.M,
        isAvailable: false,
    }
]
const getAvailableItems = items =>
    items.filter(item => item.isAvailable);
const getColorItems = (items, color) => items.filter(item => item.color === color);
const getItemsBySize = (items, size) => items.filter(item => item.size === size);
getAvailableItems(collection);
getColorItems(collection, COLORS.red);
getItemsBySize(collection, SIZE.M);


2.1
function getSumNumArray(arr) {
    return arr.reduce((previousValue, currentValue) => previousValue + currentValue);
}
getSumNumArray([4, 2, 5, 3, 6, 7, 3, 5]);

2.2
function getSortArray(arr) {
    return arr.sort((a, b) => a - b);
}
getSortArray([1, 2, 18, 5, 13, 0, 7, 24, 15]);

2.3
function getLastElementsOfArray(arr, n) {
    return arr.splice(arr.length - n, n);
}
getLastElementsOfArray([1, 2, 18, 5, 13, 0, 7, 24, 15], 5);

2.4
function getNumOfRepeat(arr) {
    let repeat = {};
    for (let item of arr) {
        if (repeat[item] === undefined) {
            repeat[item] = 1;
        } else {
            repeat[item]++;
        }
    }
    for (let index in repeat) {
        if (repeat[index] == 1) {
            delete repeat[index];
        }
    }
    return (repeat);
}
getNumOfRepeat([1, 2, 0, 18, 2, 5, 13, 18, 0, 7, 24, 0, 15]);

2.5
function getOpenArray(arr) {
    return arr.reduce(function (perviousValue, currentValue) {
        if (Array.isArray(currentValue)) {
            perviousValue.push(...getOpenArray(currentValue));
        } else {
            perviousValue.push(currentValue);
        }
        return perviousValue;
    }, []);
}
getOpenArray([3, 5, [[[6, 7, [654, [432, 146, 754, [54, 65, 789]]]]]]]);

function getOpenArray(arr) {
    arr.reduce((perviousValue, currentValue) => Array.isArray(currentValue) ? perviousValue.push(...getOpenArray(currentValue)) : perviousValue.push(currentValue), []);
}
getOpenArray([3, 5, [[[6, 7, [654, [432, 146, 754, [54, 65, 789]]]]]]]);

2.6
function getRandomElemOfArr(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
getRandomElemOfArr([1, 2, 0, 18, 2, 5, 13, 18, 0, 7, 24, 0, 15]);

2.7
function getArrNumPlusOne(a, b) {
    let arr = [];
    arr.push(a);
    while (arr.length < b) {
        arr.push(arr[arr.length - 1] + 1);
    }
    return arr;
}
getArrNumPlusOne(25, 8);

2.8
function getArrWithFlipEvenNum(arr) {
    const newArray = arr.reduce(function (previousValue, currentValue) {
        if (currentValue % 2 == 0) {
            let a = currentValue;
            let temporaryArray = [];
            while (a >= 1) {
                if (a % 10 == 0) {
                    a = a / 10;
                    temporaryArray.push(0);
                } else if (a < 10) {
                    temporaryArray.push(a);
                    break;
                } else {
                    temporaryArray.push(a % 10);
                    a = (a - (a % 10)) / 10;
                }
            }
            a = temporaryArray.join('');
            a = +a;
            previousValue.push(currentValue, a);
        } else {
            previousValue.push(currentValue);
        }
        return (previousValue);
    }, [])
    return newArray;
}
getArrWithFlipEvenNum([24, 441, 511, 644, 28, 999, 952, 17, 31, 48]);

2.9
function findIndexOfElementInArray(arr, n) {
    let indexNum = arr.reduce(function (previousValue, currentValue) {
        if (currentValue == n) {
            previousValue.push(arr.indexOf(currentValue));
            delete arr[arr.indexOf(currentValue)];
        }
        return (previousValue);
    }, [])
    return indexNum;
}
findIndexOfElementInArray([644, 24, 441, 511, 644, 28, 999, 644, 952, 17, 31, 28, 48, 644], 28);

function findIndexOfElementInArray(arr, n) {
    arr.reduce((previousValue, currentValue) => currentValue == n ? (previousValue.push(arr.indexOf(currentValue)), delete arr[arr.indexOf(currentValue)]), []);
    return (previousValue);
}
findIndexOfElementInArray([644, 24, 441, 511, 644, 28, 999, 644, 952, 17, 31, 28, 48, 644], 28);

2.10
function getSornMinToMax(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
function getMergeSortArray(arr1, arr2) {
    return [...arr1, ...arr2].sort(getSornMinToMax);
}
getMergeSortArray([24, 441, 511, 644, 28, 999, 952, 17, 31, 48], [1, 2, 0, 18, 2, 5, 13, 18, 0, 7, 24, 0, 15]);

2.11
function getSortArrayLengthElem(arr) {
    arr.sort((a, b) => a.length - b.length);
    return arr;
}
getSortArrayLengthElem(['Хирургия', 'ЛОР', 'ОченьДлинноеНазвание', 'Реаниматология', 'Педиатрия']);

2.12
function getNewArrayAToB(arr, a, b) {
    let c = arr.indexOf(b) - arr.indexOf(a);
    return (arr.splice(arr.indexOf(a), c + 1));
}
getNewArrayAToB([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 5, 12);