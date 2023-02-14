function solution(age) {
  let str = 'abcdefghij'
  return Array.from(String(age)).map(a => str[a]).join('')
}
console.log(solution(100))