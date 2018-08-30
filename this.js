// Eplores the many faces of 'this' in javascript
this.test = 'test'

//Used to log the 'this' or 'GLOBAL' for readability sake
const logThis = function(tag, _this) {
  if (_this == global) console.log(tag, 'GLOBAL')
  else console.log(tag, _this)
}

const strictFunction = function () {
  "use strict"

  console.log('**************************  Senario 1  **************************')
  console.log('Basic function')
  // Function logs undefined
  let fn1 = function () {
    logThis('Function1:', this) //undefined
  }

  fn1()

  console.log('**************************  Senario 2  **************************')
  console.log('Basic function invoked inside another function')
  // Inner function logs undefined
  fn1 = function () {
    fn2()
  }

  let fn2 = function () {
    logThis('Function2:', this) //undefined
  }

  fn1()

  console.log('**************************  Senario 3  **************************')
  console.log('Basic function defined and invoked inside another function')
  // Inner function logs undefined
  fn1 = function() {
    const fn2 = function() {
      logThis('Function2:', this) // undefined
    }
    fn2()
  }

  fn1()

  console.log('**************************  Senario 4  **************************')
  console.log('Arrow function')
  // Functions logs this from where it was defined
  fn1 = () => {
    logThis('Function1:', this)
  }

  fn1()

  console.log('**************************  Senario 5  **************************')
  console.log('Arrow function invoked inside another function')
  // Inner function logs this from where it was defined
  fn1 = () => {
    fn2()
  }

  fn2 = () => {
    logThis('Function2:', this)
  }

  fn1()

  console.log('**************************  Senario 6  **************************')
  console.log('Arrow function defined and invoked inside another function')
  // Inner function logs this from where it was defined
  fn1 = () => {
    const fn2 = () => {
      logThis('Function2:', this)
    }
    fn2()
  }

  fn1()

  console.log('**************************  Senario 7  **************************')
  console.log('basic method')
  // logs object that defines method
  let testObj = {
    value: 'value',
    method: function () {
      logThis('Function1:', this)
    }
  }

  testObj.method()

  console.log('**************************  Senario 8  **************************')
  console.log('Arrow method')
  //logs 'this' from where the object was defined
   testObj = {
    value: 'value',
    method: () => {
      logThis('Function1:', this)
    }
  }

  testObj.method()

  console.log('**************************  Senario 9  **************************')
  console.log('basic function invoked inside a method')
  // logs undefined 
  fn1 = function () {
    logThis('Function1:', this)
  }

   testObj = {
    value: 'value',
    method: function() {
      fn1()
    }
  }

  testObj.method()
}

strictFunction.call({test: 'test'})

console.log('')
console.log('********************************************************************')
console.log('************************  STRICT MODE OFF  *************************')
console.log('********************************************************************')
console.log('')

console.log('*********************  Senario 1 (NON STRICT)  *********************')
  console.log('Basic function')
  // Function logs global
  let fn1 = function () {
    logThis('Function1:', this) //global
  }

  fn1()

  console.log('*********************  Senario 2 (NON STRICT)  *********************')
  console.log('Basic function invoked inside another function')
  // Inner function logs global
  fn1 = function () {
    fn2()
  }

  let fn2 = function () {
    logThis('Function2:', this) //global
  }

  fn1()

  console.log('*********************  Senario 3 (NON STRICT)  *********************')
  console.log('Basic function defined and invoked inside another function')
  // Inner function logs global
  fn1 = function() {
    const fn2 = function() {
      logThis('Function2:', this) //global
    }
    fn2()
  }

  fn1()

  console.log('*********************  Senario 4 (NON STRICT)  *********************')
  console.log('Arrow function')
  // Functions logs this from where it was defined
  fn1 = () => {
    logThis('Function1:', this)
  }

  fn1()

  console.log('*********************  Senario 5 (NON STRICT)  *********************')
  console.log('Arrow function invoked inside another function')
  // Inner function logs this from where it was defined
  fn1 = () => {
    fn2()
  }

  fn2 = () => {
    logThis('Function2:', this)
  }

  fn1()

  console.log('*********************  Senario 6 (NON STRICT)  *********************')
  console.log('Arrow function defined and invoked inside another function')
  // Inner function logs this from where it was defined
  fn1 = () => {
    const fn2 = () => {
      logThis('Function2:', this)
    }
    fn2()
  }

  fn1()

  console.log('**************************  Senario 7 (NON STRICT)  **************************')
  console.log('basic method')
  // logs object that defines method
  let testObj = {
    value: 'value',
    method: function () {
      logThis('Function1:', this)
    }
  }

  testObj.method()

  console.log('**************************  Senario 8 (NON STRICT)  **************************')
  console.log('Arrow method')
  //logs 'this' from where the object was defined
   testObj = {
    value: 'value',
    method: () => {
      logThis('Function1:', this)
    }
  }

  testObj.method()

  console.log('**************************  Senario 9 (NON STRICT)  **************************')
  console.log('basic function invoked inside a method')
  // logs global 
  fn1 = function () {
    logThis('Function1:', this)
  }

   testObj = {
    value: 'value',
    method: function() {
      fn1()
    }
  }

  testObj.method()

console.log('')
console.log('********************************************************************')
console.log('************************  CALL APPLY BIND *************************')
console.log('********************************************************************\n')

var dictionary = {
  greeting: 'hello',
  farewell: 'goodbye',
  sayHi: function (name) {
    console.log(this.greeting, name);
  },
  sayGoodBye: (name) => {
    console.log(this.farewell, name);
  },
  whatsThis: function whatsThis() {
    console.log('WHATS THIS: ', this);
  }
};

dictionary.whatsThis();

console.log('\n**************************  Senario 1  **************************\n')
console.log('Basic method defined in object')

dictionary.sayHi('peter');
dictionary.sayHi.call({ greeting: 'wasup' }, 'Jimmy');
dictionary.sayHi.apply({ greeting: 'bro?' }, ['Timmy']);
dictionary.sayHi.bind({ greeting: 'Duuuuuuude?' })('Robby');

console.log('\n**************************  Senario 2  **************************\n')
console.log('Arrow method defined in object')

this.farewell = 'LEAVE'

dictionary.sayGoodBye('peter');
dictionary.sayGoodBye.call({ farewell: 'get Lost' }, 'Jimmy');
dictionary.sayGoodBye.apply({ farewell: 'bro?' }, ['Timmy']);
dictionary.sayGoodBye.bind({ farewell: 'Duuuuuuude?' })('Robby');

