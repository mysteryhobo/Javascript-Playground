/* Examples of various object methods demonstraiting their uses */

console.log('************************  VALUES  ************************')

testObj1 = {age: 24, name: 'peter', dimension: 'C-137'}
console.log(Object.values(testObj1))

console.log('************************  KEYS  ************************')

testObj2 = {age: 24, name: 'peter', dimension: 'C-137'}
console.log(Object.keys(testObj2))

console.log('************************  ENTRIES  ************************')

testObj3 = {age: 24, name: 'peter', dimension: 'C-137'}
console.log(Object.entries(testObj3))

console.log('************************  SPREAD  ************************')

testObj4 = {age: 24, name: 'peter', dimension: 'C-137'}
testObj5 = {age: 42, name: 'milton', getsCake: false}
console.log({...testObj4, ...testObj5})

console.log('************************  REST  ************************')

const testFunc = (...list) => {
  list.forEach((currString) => { console.log(currString) })
}
testFunc('test', 'test2', 'test3')

console.log('************************  FREEZE  ************************')

const testObj6 = {test: 'test'}
Object.freeze(testObj6)
testObj6.value = 'boom' //doesn't do anything
console.log(testObj6)

console.log('************************  SEAL  ************************')

const testObj7 = {test: 'test'}
Object.seal(testObj7)
testObj7.value = 'boom' //doesn't work
testObj7.test = 'newTestValue' //does work
console.log(testObj7)

console.log('************************  ASSIGN  ************************')

//not a deep clone use spread instead
const testObj8 = {test: 'test', test2: 'test2'}
const testObj9 = {test: 'newtest'}
const testObj10 = Object.assign(testObj8, testObj9)
console.log(testObj10)