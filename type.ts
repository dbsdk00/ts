// 타입 별칭 정의

type PPerson = { // 
    name: string;
    age: number;
    gender: 'male' | 'female' | 'other'; // union 사용 |(파이프)
};

// 함수 정의 (매개변수로 타입 사용)
function greet(person: PPerson): string {
    return `Hello, ${person.name}! You are ${person.age} years old and ${person.gender}.`;
}

// 객체 생성
const person2: PPerson = {
    name: "Alice",
    age: 30,
    gender: 'female'
};

const person3: PPerson = {
    name: "Bob",
    age: 25,
    gender: 'male'
};

// 함수 호출
console.log(greet(person2)); // 출력: Hello, Alice! You are 30 years old and female.
console.log(greet(person3)); // 출력: Hello, Bob! You are 25 years old and male.
