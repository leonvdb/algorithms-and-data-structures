const linearSearch = (arr, val) => {
    for (const [index, el] of arr.entries()) {
        if (el === val) return index
    }
    return -1
}

console.log(linearSearch([4, 2, 14, 55], 14))