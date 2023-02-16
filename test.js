function combination(n, r) {
  let numerator = 1;
  for (let i = n; i > n - r; i--) {
    numerator *= i;
  }
  let denominator = 1;
  for (let i = 1; i <= r; i++) {
    denominator *= i;
  }
  return numerator / denominator;
}

function solution(balls, share) {
  return combination(balls, share);
}