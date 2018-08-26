
console.log('FALSY VALUES')
console.log(Boolean(''))
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(NaN))
console.log(Boolean(false))

console.log('-------------------------------------------------')


// null has type object
const test1 = null
console.log('Type: ', typeof test1)

console.log('-------------------------------------------------')

//array also has type object
const test2 = []
console.log('Type: ', typeof test2)

//check if array is actually an array
console.log(Array.isArray(test2))


console.log('-------------------------------------------------')

//functions are type function luckily
const test3 = () => {}
console.log('Type: ', typeof test3)

console.log('-------------------------------------------------')

//to check if is object and not array or null
const test4 = {}
const test5 = null
const test6 = []

const isObject = (value) => value !== null && value.constructor === Object

console.log('IS OBJECT: ', isObject(test4))
console.log('IS OBJECT: ', isObject(test5))
console.log('IS OBJECT: ', isObject(test6))

console.log('-------------------------------------------------')

//undefined checks
let test7;
console.log(test7 === undefined)
console.log(typeof test7 === 'undefined')

console.log('-------------------------------------------------')

const test8 = NaN
console.log('TYPEOF: ', typeof test8) //typeof number
console.log(test8 === test8) //return false!

//to check if is NaN
console.log('IsNaN: ', test8 !== test8)
console.log('IsNaN: ', Number.isNaN(test8))

console.log('-------------------------------------------------')

//number compare
const test9 = 0.3
const test10 = 0.2 + 0.1
console.log('ARE NUMBERS EQUAL: ', test9 === test10)
console.log('ARE NUMBERS EQUAL: ', Math.abs(test9 - test10) < Number.EPSILON)


console.log('-------------------------------------------------')

//is integer
// ES6
const test11 = -19
console.log(Number.isInteger(test11))
//pre ES6
console.log(Math.round(test11) === test11)

