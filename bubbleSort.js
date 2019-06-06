const bubbleSort = (arr) => {
    for (i = arr.length - 1; i >= 0; i--) {
        let swapped = false;
        for (j = 0; j <= i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr
}

// console.log(bubbleSort([1, 4, 6, 3, 2, 11, 33, 2, 1, 2223, 0, -4]));
console.log(bubbleSort([-2, 1, -1, 0, 1, 4, 6, 8, 9, 12, 16]));
