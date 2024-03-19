// array
// 배열
let ar1: number[] = [1,2,3];
let ar2: Array<number> = [1,2,3];
// console.log(ar1); // [1, 2, 3]

// tuple
// 배열의 길이가 고정되고 각 요소의 타입이 지정되어 있는 배열 형식
let arr: [string, number] = ['hi', 10];
// console.log(arr); // ['hi', 10]

// enum
// 열거
// 특정 값(상수)들의 집합을 정의
// 멤버(apple, banana...)에 값을 할당하지 않았으므로
// 기본값인 apple은 0, banana는 1 출력
// enum fruits { apple, banana, orange}
// let a : fruits = fruits.apple;
// console.log(a); // 0

// enum fruits { apple, banana, orange}
// let a : string = fruits[0];
// console.log(a); // apple

// 멤버(apple)에 값(12)을 할당했기 때문에
// apple은 12를 반환, banana는 13을 반환, orange는 14를 반환함 
enum fruits { apple = 12, banana, orange}
let a : string = fruits[12]; // 0을 넣으면 undefined
// console.log(a); // apple

// any