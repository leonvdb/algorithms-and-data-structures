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

// console.log(merge([2, 4, 10, 12, 14, 16, 33, 240, 330, 331, 332, 333], [1, 2, 3, 5, 6, 7, 8, 9]))

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr
    const left = mergeSort(arr.slice(0, Math.round(arr.length / 2)))
    const right = mergeSort(arr.slice(Math.round(arr.length / 2)))
    return merge(left, right)
}

console.log(mergeSort([4, 1, 5, 2, 12, 2, 3, 7, 24, 290, 6, 12, 3]))