function solution(numbers) {
  const str = numbers.map(n => String(n))
  const sortedStr = str.sort((a, b) => (b + a) - (a + b))
  const result = sortedStr.join('')
  return result[0] === '0' ? '0' : result 
}


console.log(solution([6, 10, 2]))
