function solution(s) {
  let rotation = 0
  let count = 0
  while (s !== "1") {
    const a = s.replace(/0/g, "")
    count += s.length - a.length
    s = (a.length).toString(2)
    rotation++
  }
  return [rotation, count]
}

console.log(solution(15))