function solution(chicken) {
  let order = 0;
  let coupon = 0
  let bonusChicken = 0

  for (let i = 1; i <= chicken; i++ ) {
    order++
    coupon++
    if (coupon !== 0 && coupon % 10 === 0) {
      coupon++
      bonusChicken++
    }
  }
  return bonusChicken
}


console.log(solution(1081))

