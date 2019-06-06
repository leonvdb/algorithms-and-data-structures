// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent. 
// This function should mimic the functionality of Math.pow() 
// do not worry about negative bases and exponents.

const power = (base, exponent) => {
    if (exponent === 0) return 1;
    if (exponent === 1) return base;
    return base * power(base, exponent - 1)
}

// Write a function factorial which accepts a number and returns the factorial of that number.
// A factorial is the product of an integer and all the integers below it; 
// e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  
// factorial zero (0!) is always 1.

const factorial = (num) => {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}
