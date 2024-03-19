function g(name?: string) { // ?는 일수도있고 아닐수도 있을 때 사용
    if (name) {
        console.log(`Hello, ${name}!`);
    } else {
        console.log('Hello, hahaha');
    }
}

g(); // "Hello, there!"
g("최윤아"); // "Hello, 최윤아!"