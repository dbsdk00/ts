const MAX_ALLOWED_AGE = 18;
let userAge: number = 15;
let finalMessage: string = '';

if( userAge >= MAX_ALLOWED_AGE ) {
    finalMessage = 'You are allowed to this site';
} else {
    finalMessage = 'Get Back!!'
}

console.log(finalMessage);


// 매우 쉬운 다른 방법
const MAX = 18;
let Age: number = 15;

if( Age >= MAX ) {
    console.log('You are allowed to this site');
} else {
   console.log('Get Back!!'); 
}