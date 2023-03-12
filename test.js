function solution(n, left, right) {
  const result = []
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const n = Math.max(i, j) + 1
      if (left <= j && j <= right) result.push(n)
    }
  } 
  return result
}

console.log(solution(3, 2, 5))
