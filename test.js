function solution(s) {
  let count = 0

  for (let i = 0; i < s.length; i++) {
    const list = []
    let r = s.slice(i) + s.slice(0, i)
    let c = true

    for (let j = 0; j < r.length; j++) {
      if (r[j] === '{' || r[j] === '(' || r[j] === '[') list.push(r[j])
      else {
        if (list.length === 0) {
          c = false
          break
        }
        let t = list.pop()
        if ((t === '(' && r[j] === ')') || (t === '{' && r[j] === '}') || (t === '[' && r[j] === ']')) {
          c = false
          break
        }
      }
    }
    if (list.length !== 0) {
      c =false
    }
    if (c) {
      count++ 
    }
  }
  return count
}



console.log(solution("[](){}"))