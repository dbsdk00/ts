// 병합 X 
 
try {
    throw new Error('Ooooooops Error error hahaha') // 오류를 발생시키기 위한 코드
} catch(error) {
    console.error(error); // try에서 오류 발생시 /console.log(error) =Ooooooops
}


try {
    console.log('in try'); // 요거 실행됨
} catch(error) {
    console.log('in catch');
}


try {
    throw new Error('Oooops bㅠㅠㅠㅠㅠ') // 오류를 발생시켰지만
} catch(error) {
    console.log('hehe error') // (error)가 아니기고 ('hehe ...')요거 출력
}