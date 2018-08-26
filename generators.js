function * createBasicGenerator(max) {
  for (let i = 0; i < max; i ++) {
    yield i
  }
}

const basicGenerator = createBasicGenerator(5)
console.log(basicGenerator.next()) 
console.log(basicGenerator.next())
console.log(basicGenerator.next())
console.log(basicGenerator.next())
console.log(basicGenerator.next())
console.log(basicGenerator.next())
