const testModuleValue = 'testModuleValue'
this.wow = 'testInModule'
const testFunction = () => {
  console.log('moduleValue:', this.wow);
}

const testFunctionAlso = function () {
  console.log('moduleValueAlso:', this.wow)
}

module.exports = {
  testFunction,
  testFunctionAlso
}