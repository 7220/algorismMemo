function solution(n) {
  return String(n).split('').reduce((acc, cur) => Number(acc) + Number(cur), 0)
}
console.log(solution(10928102))

console.log(10928102+"")