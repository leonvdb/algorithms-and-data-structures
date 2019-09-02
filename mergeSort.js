const merge = (arrA, arrB) => {
    let mergedArray = []
    let i = 0;
    let j = 0;
    while (i < arrA.length && j < arrB.length) {
        if (arrA[i] < arrB[j]) {
            mergedArray.push(arrA[i])
            i++;
        } else {
            mergedArray.push(arrB[j])
            j++
        }
    }
    if (i === arrA.length) {
        mergedArray = mergedArray.concat(arrB.slice(j))
    } else if (j === arrB.length) {
        mergedArray = mergedArray.concat(arrA.slice(i))
    }
    return mergedArray
}

console.log(merge([2, 4, 10, 12, 14, 16, 33, 240, 330, 331, 332, 333], [1, 2, 3, 5, 6, 7, 8, 9]))