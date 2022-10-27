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
const getFilteredItems = (items = [], colors = [], sizes = [], isAvailable = true) => items.filter(item => item.isAvailable === isAvailable && (!colors.length ? true : colors.some(color => color === item.color)) && (!sizes.length ? true : sizes.some(size => item.size === size)));
getFilteredItems(collection, ['red'], ['S', 'M'], true);
//тест