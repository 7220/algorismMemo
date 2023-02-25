function solution(nums) {
  const a = nums.length / 2
  const set = new Set(nums)
  const b = [...set].length
  if (a > b) return b
  return a
}

console.log(solution([3,1,2,3]))