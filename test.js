function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(' ') >= 0) return false
    if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) return false
    if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) return false
    if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) return true 
  }
  return false
}

function solution2(s) {
  const a = 'abcdefghijklmnopqrstuvwxyz '
  const A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ '
  if (s.length !== 4 && s.length !== 6) return false
  for (let i = 0; i < a.length; i++) {
    if (s.indexOf(a[i])) return false
    if (s.indexOf(A[i])) return false
  }
  return true
}

console.log(solution2("1235"))





