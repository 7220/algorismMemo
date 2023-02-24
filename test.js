function solution(strings, n) {
  return strings.sort((a, b) => {
    const A = a.charAt(n)
    const B = b.charAt(n)
    return A < B ? -1 : A === B ? a.localeCompare(b) : 1
    }
  )
}

console.log(solution(["abce", "abcd", "cdx"], 2))