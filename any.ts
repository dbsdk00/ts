// 동적타입
// 어떤 타입이든 될 수 있음

// 안전성을 저해하고 코드의 가독성과 유지보수성을 낮출
let value : any;

value = 123; // 숫자
console.log(value);

value = 'hello';// 문자문자열`
console.log(value);

value = true; // 불리언
console.log(value);