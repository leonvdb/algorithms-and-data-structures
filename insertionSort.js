const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        const value = arr[i]
        for (let j = i - 1; j >= 0; j--) {
            if (arr[i] >= arr[j]) {
                arr.splice(i, 1)
                arr.splice(j + 1, 0, value);
                break;
            } else if (j === 0) {
                arr.splice(i, 1)
                arr.splice(j, 0, value);
            }
        }
    }
    return arr;
}

console.log(insertionSort([4, 6, 1, 8, 1, 14, 22, 19]))