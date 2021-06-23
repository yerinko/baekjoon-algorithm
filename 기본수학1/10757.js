// 문제
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
//
//     입력
// 첫째 줄에 A와 B가 주어진다. (0 < A,B < 1010000)
//
// 출력
// 첫째 줄에 A+B를 출력한다.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ').map(e => BigInt(e));
    const result = input[0] + input[1];
    console.log(result.toString());
})
    .on('close', function () {
        process.exit();
    });