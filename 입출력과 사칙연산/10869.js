// 문제
// 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오.
//
//     입력
// 두 자연수 A와 B가 주어진다. (1 ≤ A, B ≤ 10,000)
//
// 출력
// 첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const input = [7,3];
const A = parseInt(input[0]);
const B = parseInt(input[1]);
console.log(A+B);
console.log(A-B);
console.log(A*B);
console.log(Math.floor(A/B)); // 정수만 계산
console.log(A%B); // 나머지 계산

