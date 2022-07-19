// Template literals AKA formatted strings
// f"{ person_name }" in Python
// """
// Multiple line string
// """
let personName = "Christopher"
let pet = "dog"
let number = 1

let templateString = `${personName} has ${number + 2} pet ${pet}s.`

let templateStringMultiline = `${personName} has 
    test middle text
${number + 2} pet ${pet}s.`

console.log(templateString)

console.log(templateStringMultiline)

/* 
* Array methods
* Map, Reduce, Filter, forEach
*/

// MAP method
let myNumbers = [1,2,3,4,5]

console.log(myNumbers)

/* myNumbers = myNumbers.map(function(n) {
    return n*2
}); */

//myNumbers = myNumbers.map((n) => n * 2); 

function doubleNums(n) {
    return n * 2;
}

myNumbers = myNumbers.map(doubleNums)

console.log(myNumbers)

// FILTER method
myNumbers = [1,2,3,4,5]

myNumbers = myNumbers.filter((n) => n % 2 == 0)

console.log(myNumbers)

let studentNames = ["Jen", "Jake", "Harry", "Mindy", "Liam", "Adam"]

// studentNames = studentNames.filter((currName) => currName >= "Jake")


function customFilter(array, callback) {
    resultArr = []

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            resultArr.push(array[i])
        }
    }

    return resultArr
}

studentNames = customFilter(studentNames, (currName) => currName >= "Liam")

console.log(studentNames)

myNumbers = [1,2,3,4,5]

myNumbers = customFilter(myNumbers, (n) => n % 2 == 0)

console.log(myNumbers)

// forEach

// ANOTHER for loop
studentNames = ["Jen", "Jake", "Harry", "Mindy", "Liam", "Adam"]

for (let name of studentNames) {
    console.log(name)
}

studentNames.forEach((currName) => {
    console.log(currName)
})

studentNames.forEach((currName, index) => {
    console.log(index, currName)
})

// reduce
myNumbers = [1,2,3,4,5]

// Sum
let result = myNumbers.reduce((prev, curr) => {
    console.log(prev, curr)
    return prev + curr;
})

console.log(result)

// Factorial
// 5! = 5 * 4 * 3 * 2 * 1
let factorial = myNumbers.reduce((prev, curr) => {
    console.log(prev, curr)
    return prev * curr;
})

console.log(factorial)

// Mean
let mean = myNumbers.reduce((prev, curr) => {
    return prev + curr
})

mean = mean / myNumbers.length

console.log(mean)

function customReduce(array, callback) {
    let runningResult = array[0]

    for (let i = 1; i < array.length; i++) {
        runningResult = callback(runningResult, array[i])
    }

    return runningResult
}

myNumbers = [1,2,3,4,5]

// Sum WITH custom reduce
let sum = customReduce(myNumbers, (prev, curr) => {
    console.log(prev, curr)
    return prev + curr;
})

console.log(sum)
