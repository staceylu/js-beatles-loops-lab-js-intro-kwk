function theBeatlesPlay(musicians, instruments) {
  const array = []
  for (let i = 0, m = musicians.length; i < m; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  const factsPlus = [];
  let i = 0;
  while (i < facts.length) {
    factsPlus.push(`${facts[i]}!!!`)
    i++
  }
  return factsPlus
}
/* remember that what you need to do each time goes in do and
what you want to do last goes after everything, but before the
closing curly braces*/
function iLoveTheBeatles(n) {
  var arrays = [];
  do { arrays.push("I love the Beatles!")
    n++
  } while (n < 15)
  return arrays
}
