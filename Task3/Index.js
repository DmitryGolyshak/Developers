//3.1
function getCheckValue(value) {
    const characters = value.split('');
        const hasEquelValues = characters.some((a, indexA) => characters.some((b, indexB) => indexA !== indexB && a === b));
    function checkNumInValue() {
        return characters.some(function (element) {
            if (isNaN(element)) {
                return false;
            } else {
                return true;
            }
        });
    }
    return value.length <= 7 && value[0] == value[0].toUpperCase() && !hasEquelValues && !checkNumInValue();
}
getCheckValue('Дмитрий');

//3.2
function textEditing(text) {
    text = text.replace(/\.(\s)+/g, '.');
    text = text.replace(/\,(\s)+/g, ',');
    text = text[0].toUpperCase() + text.slice(1);
    let point = '.';
    let comma = ',';
    for (let index = 1; index < text.length - 1; index++) {
        if (text[index] === point) {
            text = text.slice(0, index + 1) + ' ' + text[index + 1].toUpperCase() + text.slice(index + 2);
        }
    }
    for (let index = 1; index < text.length - 1; index++) {
        if (text[index] === comma) {
            text = text.slice(0, index + 1) + ' ' + text.slice(index + 1);
        }
    }
    return text;
}
textEditing('дан,абзац.Дан, абзац. дан,абзац.');


//3.3
function deleteDuplicateWords(text) {
    let NumDeleteElement = 0;
    let arr = text.split(', ');
    arr.forEach(function (currentValue, index) {
        for (let i = index + 1; i <= arr.length - 1; i++) {
            if (currentValue == arr[i]) {
                arr.push(arr.splice(i, 1));
                arr.pop();
                index = index - 1;
                ++NumDeleteElement;
            }
        }
    });
    return [...arr, NumDeleteElement];
}
deleteDuplicateWords('хирургия, педиатрия, хирургия, анестезиология, ЛОР, педиатрия');