'use strict';

const getData = () => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      const randValue = Math.random()
      if (randValue > .5) resolve('successfully got data' + randValue)
      else reject('Error: unable to get data: ' + randValue)
    }, 1000)
  })
}

const annotherPromise = () => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve('LOG AFTER TIMEOUT')
    }, 2000)
  })
}

// getData()
// .then((result) => {
//   console.log('RESULT1: ', result)
//   return annotherPromise()
// })
// .then((result) => {
//   console.log('RESULT2: ', result)
// })
// .catch((error) => {
//   console.log('ERROR: ', error)
// })

console.log('-------------------------------------------------')

// async function tempFunction () {
//   const testData = await getData()
//   const newTestData = await annotherPromise(testData)
//   console.log('TESTDATA: ', testData)
//   console.log('TESTDATA: ', newTestData)
// }

// const kapow = { test: 'test'}
// const whammy = { pow: 'pow', ...kapow }
// console.log('WHAMMY: ', whammy)

(async () => {
  const testData = await getData()
  const newTestData = await annotherPromise(testData)
  console.log('TESTDATA: ', testData)
  console.log('TESTDATA: ', newTestData)
})()

// tempFunction()

