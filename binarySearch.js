const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1
    let pivot = (Math.floor(arr.length / 2))
    while (left <= right) {
        if (arr[pivot] === target) {
            return pivot
        } else if (arr[pivot] > target) {
            right = pivot - 1;
        } else if (arr[pivot] < target) {
            left = pivot + 1;
        }
        pivot = Math.floor((left + right) / 2)
    }
    return -1;
}

console.log(binarySearch([1, 3, 4, 6, 8, 9, 11], 5))