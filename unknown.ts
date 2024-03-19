// 런타임 에러를 방지
// 타입을 알 수 없는 경우에 사용

let z: unknown = 'hello';
if (typeof z === 'string') { // 만약 z가 string?
    console.log(z.length); // z가 string 타입일 때만 접근 가능한 속성
}


let w: unknown = '졸렬쯎ㄷ';
if (typeof w === 'string') {
    console.log(w.length);
}


let nnum: unknown = 3.14159;
if (typeof nnum === 'number') {
    console.log(nnum.toFixed(0)); // num이 number 타입일 때만 toFixed 메서드 사용 가능
} // () 원하는 소수점 이하의 자릿수
