const str = 'abc';
const number = 1;
const bool = true;
const obj = {
    outside : {
        inside : {
            key : 'value'
        }
    }
};

console.time('전체 시간');
console.log('평범한 로그! 아래는 쉼표로 값을 구분한 것입니다요.');
console.log(str, number, bool);
console.log(`추가로 이렇게 쓸 수도 있음 str ${str}, number = ${number} bool = ${bool}`);
console.log('추가로 이렇게 쓸 수도 있음 str %s, number = %d bool = %s', str, number, bool);

console.error('에러 메시지는 console.error에');
// obj의 구조를 2 depth 까지 보여줌 -- { outside: { inside: { key: 'value' } } }
console.dir(obj, {colors:false, depth : 2});
// 1 depth 까지만 -- { outside: { inside: [Object] } }
console.dir(obj, {colors:true, depth : 1});

console.time('시간 측정');
for(let i = 0; i < 1000; i ++) {
    continue;
}
console.timeEnd('시간 측정');

function b() {
    console.trace('에러 위치 추적 추적');
}

function a() {
    b();
}

a();

console.timeEnd('전체 시간');