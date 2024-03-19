// 삼항 연산자
// (조건) ? value1 : value2
// 결과 = 조건이 참이면 1반환, 거짓이면2 반환
const number1: number = 12;
let number2: number = 10;
let reresult =  number1 < number2 ? `${number1}는 ${number2} 보다 작습니다` : `${number1}는 ${number2} 보다 큽니다`;

console.log(reresult);