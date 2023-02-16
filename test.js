function solution(numbers, k) {
  let count = 1
  for (let i = 0; ; i += 2) {
    i %= numbers.length
    const a = numbers[i]
    if (count === k) return a
    count++
  }
}
console.log(solution([1,2,3,4], 2))