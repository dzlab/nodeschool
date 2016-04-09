function *factorial(n) {
  var result = 1
  for(var i=2; i<=n+1; i++) {
    yield result
    result *= i
  }
}

for(var n of factorial(5)) {
  console.log(n)
}
