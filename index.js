const map = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r'],
  '8': ['s', 't', 'u'],
  '9': ['v', 'w', 'x'],
  '0': ['y', 'z']
}


function runner(input) {
  return getCombinations(input, [])
}

function getCombinations(input, res) {
  while (input.length > 0) {
    res = combine(map[input.pop()], res)
  }

  return res
}

// NOTE: combine two arrays with the same principal as in opening brackets for multiplication of sums:
// For example: (a + b) * (c + d) = (ac + ad + bc+ bd)
function combine(a, b) {
  if (b.length === 0) {
    b = [...a]
    return b
  }

  let res = []
  for (let i = 0; i < a.length; i++) {
    res = res.concat(...(b.map(el => `${a[i]}${el}`)))
  }

  return res
}

let input
let output

input = ['2']
output = ['a', 'b', 'c']
console.log('input', ['2'], 'output', runner(input), 'expected', output)

input = ['2', '3']
output = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
console.log('input', ['2', '3'], 'output', runner(input), 'expected', output)

input = ['2', '2']
output = ['aa', 'ab', 'ac', 'ba', 'bb', 'bc', 'ca', 'cb', 'cc']
console.log('input', ['2', '2'], 'output', runner(input), 'expected', output)

input = ['2', '3', '4']
// XXX too hard to generate manually
output = map
console.log('input', ['2', '3', '4'], 'output', runner(input), 'check against', output)
