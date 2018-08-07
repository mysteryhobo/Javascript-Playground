'use strict';

var test = require('./TestClass');
var test = new test('testName');

var wowFunction = function wowFunction() {
  console.log('TEST: ', this.testValue);
};

var bam = { testValue: 'boom' };
test.logSelf.bind(bam)();
test.logParent();
test.logParentAgain();
// wowFunction.call(bam)

var dictionary = {
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

dictionary.sayHi('peter');
dictionary.sayHi.call({ greeting: 'wasup' }, 'Jimmy');
dictionary.sayHi.apply({ greeting: 'bro?' }, ['Timmy']);
dictionary.sayHi.bind({ greeting: 'Duuuuuuude?' })('Robby');

console.log('----------------------------------------------');

dictionary.sayGoodBye('peter');
dictionary.sayGoodBye.call({ farewell: 'get Lost' }, 'Jimmy');
dictionary.sayGoodBye.apply({ farewell: 'bro?' }, ['Timmy']);
dictionary.sayGoodBye.bind({ farewell: 'Duuuuuuude?' })('Robby');

console.log('----------------------------------------------');

dictionary.whatsThis();

