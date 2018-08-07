
class testClassParent {
  constructor() {
    this.parentValue = 'parentValue'
  }
  
  logParent () {
    console.log('PARENT METHOD')
  }

  logParentAgain () {
    conosle.log('PARENT METHOD AGAIN')
  }
}

class testClass  extends testClassParent{
  constructor(name) {
    super()
    this.testValue = name
  }

  logSelf () {
    console.log(this.testValue)
  }

  logParentAgain() {
    console.log('NOT PARENT METHOD', this.parentValue)
  }
}

module.exports = {
  testClass
}