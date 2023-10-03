
//Declare an empty array;
const array = []

//Declare an array with more than 5 number of elements
const numbers = [1, 2, 3, 4, 5]

//Find the length of your array
console.log(numbers.length)

//Get the first item, the middle item and the last item of the array
numbers[0]
numbers.length - 1
numbers.indexOf(3)

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, 'string', ['test'], 2, 'string']

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// ['Facebook', 'Google', 'Microsoft',     'Apple',         'IBM', 'Oracle', 'Amazon']
// ['Facebook', 'Google',      'Microsoft', 'Apple      ','IBM', 'Oracle',']

//Print the array using console.log()
console.log(itCompanies)

//Print the number of companies in the array
console.log(itCompanies.length)

// Print the first company, middle and last company
console.log(itCompanies[0])
console.log(itCompanies[itCompanies.length - 1])
console.log(itCompanies[3])

// Print out each company
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i])
}

// Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase())
    // console.log(itCompanies[i])
}
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies.slice(0, 6).join(', ')} and ${itCompanies[6]} are big IT companies`)

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const verifyCompanie = (name) => {
    if (itCompanies.includes(name)) {
        return name
    } else {
        return 'company is not found'
    }
}

console.log(verifyCompanie('pide Piper'))

// Filter out companies which have more than one 'o' without the filter method
let filterCompanies = []
for (let index = 0; index < itCompanies.length; index++) {
    const test = itCompanies[index]

    let count = 0
    for (let index = 0; index < test.length; index++) {
        if (test[index] === 'o') {
            count = count + 1
        }

    }
    if (count > 1) {
        filterCompanies.push(test)
    }
}

console.log(filterCompanies)

let result = []
for (let i = 0; i < itCompanies.length; i++) {
    let company = itCompanies[i].toLowerCase()
    let firstIndex = company.indexOf('o')
    if (firstIndex !== -1) {
        let secondIndex = company.slice(firstIndex + 1).indexOf('o')
        if (secondIndex !== -1) {
            result.push(company)
        }
    }
}

console.log(`luana esse é o resultado: ${result}`)
// Sort the array using sort() method
// Reverse the array using reverse() method
// Slice out the first 3 companies from the array
// Slice out the last 3 companies from the array
// Slice out the middle IT company or companies from the array
// Remove the first IT company from the array
// Remove the middle IT company or companies from the array
// Remove the last IT company from the array
// Remove all IT companies
