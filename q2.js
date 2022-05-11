function recurIndex(str) {
    let obj = {};
    let index = [];
    if (Boolean(str) === false) {
        return obj;
    }
    const array = str.split("");
    let temp = array.find((item, i) => array.indexOf(item) !== i);
    array.forEach((value, i) => {
        if (value === temp)
            index.push(i);
    })
    obj[temp] = index.splice(0, 2);
    return obj;
}
console.log(recurIndex("AREDCBSDERD"));