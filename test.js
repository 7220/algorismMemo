function solution(my_string, n) {
  const newString = []
  for (let i = 0; i < my_string.length; i++) {
      for (let j = 0; j < n; j++) {
          newString.push(my_string[i])

      }
  }
  return newString.join('')
}
console.log(solution('hello', 5))