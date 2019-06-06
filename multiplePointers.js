const countUniqueValues = (sortedArray) => {
    if (sortedArray.length === 0) return 0
    let i = 0;
    let j = 1;
    for (let j = 1; j < sortedArray.length; j++) {
        if (sortedArray[j] > sortedArray[i]) {
            i++;
            sortedArray[i] = sortedArray[j];
        }
    }
    return i + 1
    //while j < sortedArray.length
    //if sortedArray[j]> sortedArray[i] move i up and insert sortedArray[j] at that index
    //increase j
    //return i+1
}

// console.log(countUniqueValues([0, 2, 2, 2, 14, 15, 16])) // should return 7

// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates 
// which accepts a variable number of arguments, 
// and checks whether there are any duplicates among the arguments passed in. 
// You can solve this using the frequency counter pattern 
// OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 
// Restrictions:

// Time - O(n)

// Space - O(n)

const areThereDuplicates = (...args) => {
    //iterate through args
    //
}

areThereDuplicates("bla", 4, "blllluuubb", false, true, true, 19);