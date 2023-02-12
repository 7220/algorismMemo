function solution(my_string) {
  const list = []
  for (let i = 0; i < my_string.length; i++) {
      const c = my_string.charCodeAt(i)
      if (c >= 48 && c <= 57) list.push(String.fromCharCode(c))
  }
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (list[j] > list[j + 1]) {
      const a = list[j]
      list[j] = list[j + 1]
      list[j + 1] = a
      }
    }
  }
  const result = list.map(x => parseInt(x))
  return result
}
console.log(solution("hi1240897124"))