/* Examples of various array methods demonstraiting their uses */

console.log('************************  FILTER  ************************')

const testArray1 = ['testValue', 'wow', 'peter', 'testString']
console.log(testArray1.filter((currElement) => currElement.startsWith('test')))

console.log('************************  MAP  ************************')

const testArray2 = ['testValue', 'wow', 'peter', 'testString']
console.log(testArray2.map((currElement) => 'test' + currElement))

console.log('************************  REDUCE  ************************')

const testArray3 = ['testValue', 'wow', 'peter', 'testString']
console.log(testArray3.reduce((accum, currString) => accum += currString.length, 0))

console.log('************************  FOR EACH  ************************')

const testArray4 = ['testValue', 'wow', 'peter', 'testString']
testArray4.forEach((currString) => testArray4[currString] = true)
console.log(testArray4)

console.log('************************  SOME  ************************')

const testArray5 = ['testValue', 'wow', 'peter', 'testString']
console.log(testArray5.some((currSting) => currSting.endsWith('Value')))

console.log('************************  EVERY  ************************')

const testArray6 = ['testValue', 'wow', 'peter', 'testString']
console.log(testArray6.every((currElement) => typeof currElement === 'string'))
console.log(testArray6.every((currElement) => currElement.startsWith('test')))

console.log('************************  INCLUDES  ************************')

const testArray7 = ['testValue', 'wow', 'peter', 'testString']
console.log(testArray7.includes('peter'))
console.log(testArray7.includes('TIMMY!'))

console.log('************************  FROM  ************************')

console.log(Array.from('testString'))
console.log('testString'.split('')) //same as above

console.log('************************  SPREAD  ************************')
//remove element without modifying array

testArray1 = ['eat', 'sleep', 'workout', 'planning to plan']
console.log([...testArray1.slice(0,2), ...testArray1.slice(3)]) //remove element 3