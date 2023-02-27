function solution(n) {
  const list = []
  for (let i = 2; i < n; i++) {
    if (n % i === 0) list.push(i)
  }
  console.log(list)
}

console.log(solution(10))