const sum = function (val1, val2){
  if (arguments.length === 1) { //doesn't work with arrow function since they have additional arguments added automatically?
    return (val2) => {
      return val1 + val2
    }
  } else {
    return val1 + val2
  }
}

console.log(sum(1, 2))
console.log(sum(1)(2))

// OR

const sum2 = (val1, val2) => {
  if (val2 === undefined) {
    return (val2) => {
      return val1 + val2 //val1 exists though closure
    }
  }
  return val1 + val2
}

console.log(sum2(1, 2))
console.log(sum2(1)(2))