const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let minimumIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minimumIndex]) minimumIndex = j;
        }
        if (minimumIndex !== i) [arr[i], arr[minimumIndex]] = [arr[minimumIndex], arr[i]]
    }
    return arr
}

console.log(selectionSort([-2, 3, 2, 66, 3, 12, 90, 137, 1, -2000, 1, 1, 4, 20]))