// 문제
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
//
// 입력
// 입력은 여러 개의 테스트 케이스로 이루어져 있다.
// 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
// 력의 마지막에는 0 두 개가 들어온다.
//
// 출력
// 각 테스트 케이스마다 A+B를 출력한다.

const input = ['1 1', '2 3', '3 4', '9 8', '5 2', '0 0'];

let inputs = [];
let isNotZero = true;
let i = 0;
let result = '';

while (isNotZero) {
    if( i === 0) {
        result += '\n';
    }
    inputs.push(input[i].split(' '));
    console.log(inputs)
    let sum = Number(inputs[i][0]) + Number(inputs[i][1]);
    if (sum === 0 ) {
        isNotZero = false;
    } else {
        result += sum.toString();
        i++;
    }
}
console.log(result)