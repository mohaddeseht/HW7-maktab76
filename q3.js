function getLength(array) {
    const flatten = array.flat(Infinity).length;
    return flatten;
}
console.log(getLength([1, [2, 3]]));