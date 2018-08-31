'use strict'
console.log('\n********************************************************************')
console.log('************************  OBJECT.CREATE  *************************')
console.log('********************************************************************\n')

const parent = {
  test: 'test',
  testObj: {test: 'test'}
}

const child1 = Object.create(parent)
const child2 = Object.assign({}, parent)

console.log('CHILD1: ', child1)
child1.woah = 'woah'
console.log('CHILD1: ', child1)
parent.newValue = 'woah'
console.log('CHILD1: ', child1.__proto__)


console.log('CHILD1.test: ', child1.test)
console.log('CHILD2.test: ', child2.test)

parent.test = 'new test value'

console.log('CHILD1.test: ', child1.test) //only child1 updates
console.log('CHILD2.test: ', child2.test)

console.log('\n************************  Change Prototype value  *************************\n')

const child3 = Object.create(parent)
const child4 = Object.create(parent)

console.log('CHILD3.test: ', child3.test)
console.log('CHILD4.test: ', child4.test)

parent.test = 'new new test value'

console.log('CHILD3.test: ', child3.test)
console.log('CHILD4.test: ', child4.test)

child3.test = 'only change child3'

console.log('CHILD3.test: ', child3.test) // only child changed
console.log('CHILD4.test: ', child4.test)

console.log('\n************************  Change Prototype reference  *************************\n')

console.log('CHILD3.Obj: ', child3.testObj)
console.log('CHILD4.Obj: ', child4.testObj)

child3.testObj.test = 'only change child3' //changes all childern since it is a reference

console.log('CHILD3.Obj: ', child3.testObj)
console.log('CHILD4.Obj: ', child4.testObj)

console.log('\n********************************************************************')
console.log('************************  FUNCTION CONSTRUCTOR  *************************')
console.log('********************************************************************\n')

function Person (firstname) {
  this.bam = 'wow'
}

Person.prototype.test = 'test'
Person.prototype.thing = {thing: 'thing'}

const person1 = new Person('Morty')
const person2 = new Person('Morty')

console.log('PERSON1: ', person1)
console.log('PERSON2: ', person2)

console.log('PERSON1.test: ', person1.test)
console.log('PERSON2.test: ', person2.test)

//change test value
Person.prototype.test = 'newTest'

console.log('PERSON1.test: ', person1.test)
console.log('PERSON2.test: ', person2.test)

console.log('\n************************  FUNCTION CONSTUCTOR CHANGE REF  *************************\n')

console.log('PERSON1.thing: ', person1.thing)
console.log('PERSON2.thing: ', person2.thing)

Person.prototype.thing = {thing: 'new Thing'}

console.log('PERSON1: ', person1.thing)
console.log('PERSON2: ', person2.thing)

console.log('\n********************************************************************')
console.log('************************  CLASSES  *************************')
console.log('********************************************************************\n')

class Guy {
  constructor() {}
  testFunc () { //sits on the prototype of the created object
    console.log('test')
  }

  static staticTestFunc () {
    console.log('STATIC TEST FUNCTION LOG: ', Guy.staticValue1 * 2)
  }
}

const terrance = new Guy()
console.log(terrance)
console.log(terrance.testFunc)
console.log(terrance.staticTestFunc) //static so it belongs to the class instead

Guy.staticValue1 = 25 //static values can also be applied to the class itself
console.log(terrance.staticValue1)
console.log(Guy.staticValue1)

Guy.staticTestFunc()

console.log(terrance.test)
Guy.prototype.test = 'test'
console.log(terrance.test)


class Morty {
  constructor (name) {
    this.name = name //all Morty's have their own name
  }

  saySomethingStupid() { // all Morty's reference this function on the prototype
    console.log("aww geez Rick, I don't know if this is a good idea")
  }
}

