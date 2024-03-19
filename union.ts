// 여러개중 하나 (타입, 문자열 등)

type P = {
    name: string;
    age: number;
    gender: 'male' | 'female' | 'other'; // | 기호는 유니온 타입(union type)
};