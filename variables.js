const _ = require('lodash')

console.log('******************  Reference VS value  ******************')
// primitives are passed via value copy
const a = 5
let b = a
b = 1
console.log('A:', a) // outputs 5 (original value)


//objects are passed via reference 
const obj1 = {test: 'test'}
const obj2 = obj1
obj2.test = 'not test'

console.log('Obj1: ', obj1.test) //outputs 'not test'

console.log('******************  Equality Check  ******************')

const copyObj = {test: 'not test'}

console.log('Obj1 === Obj2:', obj1 === obj2) // true (same reference)
console.log('Obj1 === copyObj', obj1 === copyObj) //false (different reference) 
console.log('Obj1 equals Obj2:', _.isEqual(obj1, obj2)) // true (same reference)
console.log('Obj1 equals copyObj', _.isEqual(obj1, copyObj)) // true (different reference, same values)

console.log('******************  HOISTING FUNCTIONS  ******************')

console.log('functionDefinition === undefined:', functionDefinition === undefined)
try {
  functionExpression()
} catch (err) {
  console.log(err.message)
}

function functionDefinition () {  
  console.log('MURMAN! MURMAN!!!!!!!!!')
}

const functionExpression = function () {
  console.log("I'm all hopped up on Mountain Dew!")
}

console.log('******************  HOISTING VARIABLES  ******************')

console.log('varVariable === undefined:', varVariable === undefined) //declared but not defined
try {
  letVariable = 'test' //this will error not declared or defined
} catch (err) {
  console.log(err.message)
}

var varVariable = 'test'
let letVariable = 'test'

console.log('******************  VARIABLE SCOPE  ******************')

{
  const blockedScopedVariable = 'test'
  var functionScopedVariavle = 'test'
}

console.log('functionScopedVariavle:', functionScopedVariavle)
try {
  console.log('blockedScopedVariable:', blockedScopedVariable) //this will error not declared or defined
} catch (err) {
  console.log(err.message)
}


console.log('******************  CONST OBJECTS  ******************')

const testObj = {test: 'test'}
testObj.test = 'newValue'
console.log('NEW VALUE: ', testObj.test) // changed
Object.freeze(testObj)
testObj.test = 'newnewValue' //throws error in strict mode
console.log('NEW NEW VALUE: ', testObj.test) // unchanged


console.log('******************  STRICT MODE  ******************')

globalVariable = 'test' // no error

const addStrictMode = function(){
  'use strict'
  try {
    globalVariable2 = 'test' //throws error now
  } catch (err) {
    console.log(err.message)
  }

  console.log(this) //no longer coerced to global object
}()
