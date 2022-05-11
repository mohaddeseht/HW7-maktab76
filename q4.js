const array = ["abc", "hello2", "bye", "qwerty58", "try"];
function func(array) {
    const result = array.map(str => {
        if (str.match(/\d+/))
            return str;
    }).filter(item => item)

    return result
}
console.log(func(array));