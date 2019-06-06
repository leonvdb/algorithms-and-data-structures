const validAnagram = (strA, strB) => {
    //create counter object
    const counter = {};
    //loop through strA and count characters by adding to counter object
    for (const char of strA) { counter[char] = counter[char] + 1 || 1 }
    //loop through strB
    for (const char of strB) {
        if (!counter[char]) {
            return false
        } else {
            counter[char] -= 1;
        }
    }
    //loop through object.values() and check that they are all 0
    for (const val of Object.values(counter)) {
        if (val) return false
    }
    return true
}

console.log(validAnagram("railsafety", "fairytales"));