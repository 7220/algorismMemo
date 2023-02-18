function solution(n) {
  const list = []

  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      list.push(i)
      n /= i
    }
  }

  const set = new Set(list)
  
  return [...set]
}


console.log(solution("420"))