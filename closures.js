

// Broken (all 5s)
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// FIXED
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// FIXED
for (let i = 0; i < 5; i++) {
  ((j) => {
    setTimeout(() => console.log(j), 1000);
  })(i)
}
