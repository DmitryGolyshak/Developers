// const COLORS = {
//     red: "red",
//     green: "green",
//     blue: "blue",
// };
// const SIZE = {
//     M: "M",
//     S: "S",
//     L: "L",
// };
// const collection = [
//     {
//         id: 1,
//         color: COLORS.red,
//         size: SIZE.M,
//         isAvailable: true,
//     },
//     {
//         id: 2,
//         color: COLORS.green,
//         size: SIZE.S,
//         isAvailable: false,
//     },
//     {
//         id: 3,
//         color: COLORS.blue,
//         size: SIZE.L,
//         isAvailable: true,
//     },
//     {
//         id: 4,
//         color: COLORS.red,
//         size: SIZE.M,
//         isAvailable: false,
//     },
//     {
//         id: 5,
//         color: COLORS.red,
//         size: SIZE.M,
//         isAvailable: false,
//     }
// ]
// const getAvailableItems = items =>
//     items.filter(item => item.isAvailable);
// const getColorItems = (items, color) => items.filter(item => item.color === color);
// const getItemsBySize = (items, size) => items.filter(item => item.size === size);
// getAvailableItems(collection);
// getColorItems(collection, COLORS.red);
// getItemsBySize(collection, SIZE.M);
// const getFilteredItems = (items = [], colors = [], sizes = [], isAvailable = true) => items.filter(item => item.isAvailable === isAvailable && (!colors.length ? true : colors.some(color => color === item.color)) && (!sizes.length ? true : sizes.some(size => item.size === size)));
// getFilteredItems(collection, ['red'], ['S', 'M'], true);
//тест
//collection.find(item => item.id === 5);
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
const newCollection = {
    1: {
        id: 1,
        color: COLORS.red,
        size: SIZE.M,
        isAvailable: true,
    },
    2: {
        id: 2,
        color: COLORS.green,
        size: SIZE.S,
        isAvailable: false,
    },
    3: {
        id: 3,
        color: COLORS.blue,
        size: SIZE.L,
        isAvailable: true,
    },
    4: {
        id: 4,
        color: COLORS.red,
        size: SIZE.M,
        isAvailable: false,
    },
    5: {
        id: 5,
        color: COLORS.red,
        size: SIZE.M,
        isAvailable: false,
    }
};
newCollection[5];
//O(n) для массива временная сложность
//O(1) для объекта временная сложность
const arrayNewCollection = [];
//1 способ преобразования объекта в массив 
for (let item in newCollection) {
    arrayNewCollection.push(newCollection[item])
};
//2 способ преобразования объекта в массив (лучше)
const array1 = Object.values(newCollection);
//копирование объекта (по ссылке!)
const copy = newCollection;
//1 способ копирования объекта (по значениям!) 
const copy2 = {};
for (let item in newCollection) {
    copy2[key] = newCollection[key];
}
//2 способ копирования объекта (по значениям! (лучше)) 
const copy3 = Object.assign({}, newCollection);
//деструктуризация объекта (извлекли их из COLORS)
const { red, green, blue } = COLORS; 
const { green: green1, ...otherColors } = COLORS;
const copy4 = { ...COLORS };