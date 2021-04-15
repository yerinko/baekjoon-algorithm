// 문제
// N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.
//
// 입력
// 첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다. 모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.
//
// 출력
// 첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.
//
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const input =  [5, '20 10 35 30 7'];
const A = Number[input[0]];
const B = input[1].split(' ');

let max = Math.max.apply(null,B);
let min = Math.min.apply(null,B);


console.log(min, max);