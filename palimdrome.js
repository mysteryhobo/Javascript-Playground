
const isPalimdrome = (text) => {
  return text.toLowerCase().split('').reverse().join('') === text.toLowerCase()
}

console.log(isPalimdrome('Racecar'))
console.log(isPalimdrome('hannah'))