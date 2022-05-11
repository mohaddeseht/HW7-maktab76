function filter(array) {
    let filteredResult = [];
    for (let x of array) {
        if (parseInt(x))
            filteredResult.push(x);
    }
    return filteredResult;
}
const array = ["a", "4", NaN, "L", null, 5]
console.log(filter(array));
// const result = array.filter(item => parseInt(item)); //does the same thing


function find(array, num) {
    for (let i = 0; i < array.length; i++) {
        let findResult = 0;
        if (array[i] > num)
            return findResult = array[i];
    }
}
const array2 = [2, 8, 15, 82, 25, 33];
console.log(find(array2, 20));
// const result = array2.find(item => item > 20);

function slice(array, start, end) {
    let slicedResult = [];
    if (start < 0)
        start += array.length;
    if (end === undefined || end >= array.length) {
        for (let i = start; i < array.length; i++) {
            slicedResult.push(array[i]);
        }
    }
    if (start === undefined && end === undefined) {
        for (let i in array) {
            slicedResult.push(array[i]);
        }
    }
    else {
        for (let i = start; i < end; i++) {
            slicedResult.push(array[i]);
        }
    }
    return slicedResult;
}
const array3 = [1, 2, 3, 4, 5, 6];
console.log(slice(array3, -3));
// const result = (array3.slice(-3)); //does the same thing


function splice(array, start, deleteCount, item) {
    let spliceResult = [];
    let arrayIs = [];
    const end = start + deleteCount;
    if (start < 0)
        start += array.length;
    for (let i = start; i < end; i++) {
        spliceResult.push(array[i]);
    }
    for (let j = 0; j < array.length; j++) {
        if (j === start) {
            j += deleteCount;
            if (item != undefined)
                arrayIs.push(item);
        }
        arrayIs.push(array[j])
    }
    return spliceResult;
}
const array4 = [1, 2, 3, 4, 5, 6];
console.log(splice(array4, 1, 3, "1.5"));
// const result = array4.splice(1, 3, "1.5") //does the same thing


function some(array) {
    let temp = false;
    for (let x of array) {
        if (x % 2 === 0)
            temp = true;
    }
    return temp;
}
const array5 = [3, 7, 5, 1, 8];
console.log(some(array5));
// const result = array5.some(item => item % 2 === 0);