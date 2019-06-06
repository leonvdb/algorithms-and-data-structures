const same = (array, quadraticValues) => {
    const counter = {}
    array.forEach(number => {
        const quadratic = number * number
        counter[quadratic] = counter[quadratic] + 1 || 1
    })
    for (let value of quadraticValues) {
        if (!counter[value]
        ) {
            return false
        } else {
            counter[value] -= 1
        }
    }
    for (let value of Object.values(counter)) {
        if (value) return false
    }
    return true
}


// console.log(same([2, 4, 8], [4, 16, 64]));















// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

const sameFrequency = (intA, intB) => {
    const counter = {}
    //turn int to string to iterate through digits
    //iterate through digits of intA and for each add to counter 
    //iterate through digits of intB and check counter[digitIntB] if 0 return false else -=1
    //iterate through object.values(counter) and check that they are all 0
    for (const digit of intA.toString()) {
        counter[digit] = counter[digit] + 1 || 1;
    }
    for (const digit of intB.toString()) {
        if (counter[digit]) {
            counter[digit] -= 1;
        } else {
            return false;
        }
    }
    for (const value of Object.values(counter)) {
        if (value > 0) return false;
    }
    return true;
}

console.log(sameFrequency(4323, 7777))