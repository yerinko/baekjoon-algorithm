// 문제
// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
// 하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.
//
// 입력
// 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.
//
// 출력
// 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
const input = [5];
const count = Number(input[0]);

result ='';

for (let i = 0; i < count; i++) {
    for (let j = 0; j <= count - i - 1; j++) {
        // for (let j = num - 1; j > i; j--) {
        result += ' ';
    }

    for (let k = 0; k <=i; k++) {
        result += '*';
    }
    result += '\n';
}

console.log(result);