'use strict';
var test = require('./TestClass').testClass
var test = new test('testName')
var testModule = require('./testModule')

const wowFunction = function() {
  console.log('TEST: ', this.testValue)
}


const bam = {testValue: 'boom'}
test.logSelf.bind(bam)()
test.logParent()
test.logParentAgain()
// wowFunction.call(bam)

const dictionary = {
  greeting: 'hello',
  farewell: 'goodbye',
  sayHi: function (name) {
    console.log(this.greeting, name)
    const internalFunc = function () {
      console.log('INTERNAL THIS: ', this)
    }
    internalFunc()
  },
  sayGoodBye: name => {
    console.log(this.farewell, name)
  },
  whatsThis: () => {
    console.log('WHATS THIS: ', this)
  }
}

this.farewell = 'WAAAAAA?'

dictionary.sayHi('peter')
// dictionary.sayHi.call({greeting: 'wasup'}, 'Jimmy')
// dictionary.sayHi.apply({greeting: 'bro?'}, ['Timmy'])
// dictionary.sayHi.bind({greeting: 'Duuuuuuude?'})('Robby')

// console.log('----------------------------------------------')

// dictionary.sayGoodBye('peter')
// dictionary.sayGoodBye.call({farewell: 'get Lost'}, 'Jimmy')
// dictionary.sayGoodBye.apply({farewell: 'bro?'}, ['Timmy'])
// dictionary.sayGoodBye.bind({farewell: 'Duuuuuuude?'})('Robby')

console.log('----------------------------------------------')

// (() => {
//   console.log('BALLS')
// })()

//todo create an iffy in node js module aka here
//todo create closure with iify
// (async () => { console.log('IIFE') })();
const iifefunc = () => {
  (() => { 
    console.log('test') })();
}

iifefunc()

dictionary.whatsThis()

console.log('----------------------------------------------')

this.wow = 'test'
testModule.testFunction()
testModule.testFunctionAlso()

console.log('----------------------------------------------')

// console.log('BAM: ', this.wow)


const baseFunction = function () {
  // const testFunction = function() {console.log('METHOD THIS: ', this)}

  console.log('THIS: ', this)
  // testFunction();

  newfunc1()
  // const newfunc1 = () => {
  //   console.log('FUNC1 THIS: ', this)
  //   newfunc2()
  // }

  // const newfunc2 = () => {
  //   console.log('FUNC2 THIS: ', this)
  // }
  // newfunc1()
}

const newfunc1 = function() {
  console.log('FUNC1 THIS: ', this)
  newfunc2()
}

const newfunc2 = function() {
  console.log('FUNC2 THIS: ', this)
}

console.log('----------------------------------------------')
// scope chain

const booom = 'boooooooooom';
const test1 = function () {
  const test2 = function () {
    const test3 = function () {
      const test4 = function () {
        console.log('BOOM:', booom)
      }
      test4() 
    }
    test3()
  }
  test2()
}
test1()

// newfunc1()
// console.log('wow: ', this.wow)
// console.log('notwow', this.notwow)
baseFunction.call({baseThis: 'baseThis'})

console.log('----------------------------------------------')

const Person = function () {
  console.log('TEST')
}

console.log('PROTOTYPE:', Person.prototype)
console.log('__PROTO__:', Person.__proto__)

console.log('----------------------------------------------')


let Dog = function () {
  this.name = 'woof'
  console.log('THIS:', this)
  this.makeNoise = function () {
    console.log(this.name)
  }

  this.oldSkill = function () {
    console.log('OLD SKILL THIS: ', this)
  }

  this.makeNoiseArrow = () => {
    console.log(this.name)
  }
}

Dog.prototype = {test: 'muhahahhahahahahha'}

const woof = new Dog()
const secondWoof = new Dog()

Dog.prototype.newSkill = () => { console.log('newSkill this: ', this) }


console.log('NEW DOG: ', woof)
for (let prop in woof) {
  console.log('CURR PROP: ', prop, ': ', woof[prop])
}

woof.newSkill()
secondWoof.newSkill()

woof.oldSkill()

Dog.prototype.newOldSkill = woof.oldSkill

woof.newOldSkill()

// woof.type = 'new type'
// console.log('NEW DOG: ', woof)

// woof.makeNoise()
// woof.makeNoiseArrow()


console.log('----------------------------------------------')


const TestNewObject = function(firstName) {
  this.firstname = firstName
  return this;
}

const newThing = new TestNewObject('peter');


console.log('NEW OBJECT: ', newThing)
console.log('FIRST NAME: ', newThing.firstname)
console.log('NEW OBJECT.prototype', newThing.prototype)
console.log('NEW OBJECT.__proto__', newThing.__proto__)

console.log('----------------------------------------------')

const TestNewObject2 = {
  firstname: 'peter'
}

const createdObject = Object.create(TestNewObject2)
console.log('NEW OBJECT: ', createdObject)
console.log('FIRST NAME: ', createdObject.firstname)
console.log('NEW OBJECT.prototype', createdObject.prototype)
console.log('NEW OBJECT.__proto__', createdObject.__proto__)

console.log('----------------------------------------------')

class TestNewObject3 {
  constructor() {
    this.firstname = 'peter'
  }

  testMethod () {
    console.log('FIRSTNAME: ', this.firstname)
  }
}

const createdObject2 = new TestNewObject3

console.log('NEW OBJECT: ', createdObject2)
console.log('FIRST NAME: ', createdObject2.firstname)
console.log('NEW OBJECT.prototype', createdObject2.prototype)
console.log('NEW OBJECT.__proto__', createdObject2.__proto__)

TestNewObject3.prototype.test = 'test'

console.log('NEW OBJECT.__proto__', TestNewObject3.prototype)
console.log('FIRST NAME: ', createdObject2.test)

console.log('----------------------------------------------')

const testObject2 = {};
// console.log(testObject.test) //throws error
testObject2.test = undefined
console.log(testObject2.test) //doesn't throw error


console.log('----------------------------------------------')

// functions in methods:

//value2 = 'notwow'  //fails in strict mode

// console.log(global.value2)

// const testFunc2 = function() {
//   console.log('VALUE: ', this.value2)
// }

// const testObject3 = {
//   value2: 'wow',
//   method: function(fn) {
//     const testFunc3 = function () {
//       console.log('VALUE2: ', this.value2)
//     }
//     fn()
//     testFunc3()
//   }
// }

// testObject3.method(testFunc2)

var dictionary2 = {
  greeting: 'hello',
  farewell: 'goodbye',
  sayHi: function sayHi(name) {
    console.log(this.greeting, name);
  },
  sayGoodBye: function sayGoodBye(name) {
    console.log(undefined.farewell, name);
  },
  whatsThis: function whatsThis() {
    console.log('WHATS THIS: ', undefined);
  }
};

dictionary2.sayHi('peter');
dictionary2.sayHi.call({ greeting: 'wasup' }, 'Jimmy');
dictionary2.sayHi.apply({ greeting: 'bro?' }, ['Timmy']);
dictionary2.sayHi.bind({ greeting: 'Duuuuuuude?' })('Robby');

console.log('----------------------------------------------');

dictionary2.sayGoodBye('peter');
dictionary2.sayGoodBye.call({ farewell: 'get Lost' }, 'Jimmy');
dictionary2.sayGoodBye.apply({ farewell: 'bro?' }, ['Timmy']);
dictionary2.sayGoodBye.bind({ farewell: 'Duuuuuuude?' })('Robby');

console.log('----------------------------------------------');

dictionary2.whatsThis();