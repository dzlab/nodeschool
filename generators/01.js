function *range(from, to) {
  current = from
  while(current<=to) {
    yield current  
    current ++
  }
}

for(var r of range(5, 10)) {
  console.log(r)
}
