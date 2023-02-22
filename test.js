function solution(arr1, aar2) {
  const list = []
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[0].length; j++) {
      list[i][j] = arr1[i][j] + arr2[i][j]
    } 
  }
  return list
}

console.log(solution([[1,2],[2,3]], [[3,4],[5,6]]))





