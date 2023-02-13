function solution(num, k) {
  let n = String(num)
  const list = []
  for (let i = 0; i < n.length; i++) {
      list.push(n[i])
  }
  for (let i = 0; i < list.length; i++) {
      if (list[i] === k) return i + 1
  }
  console.log(list)
  return -1
}
console.log(solution(98273, 3))