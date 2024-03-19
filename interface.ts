// type과 유사
// 다른 인터페이스 확장, 병합
// 타입 안의 일부 속성만 사용 가능 (type도 마찬가지)
interface Person {
    name : string;
    age : number;
    gender : string;
}
function ggreet(person : Person) { // 매개변수 사용
    return `Hello ${person.name}! 너의 나이는 ${person.age}, 성별은 ${person.gender} `;
}
const person1: Person = {
    name: '최윤아',
    age: 17,
    gender: '여',
}

console.log(ggreet(person1));