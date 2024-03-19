// return값이 있을 때 타입 사용
function add(a:number, b:number): number { // 반환 값이 있기 때문에 타입 명시
    return a + b;
}
console.log(add(2, 3));

function greetingg(name : string): void { // 반환 값이 없을 땐 void를 사용하는게 적절함
    console.log(`Hello ${name}!`);
}
greetingg("윤아");