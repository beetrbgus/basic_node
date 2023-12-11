const A = require('./globalA');

/**
 * globalA에서 사용한 global 객체를 
 * globalB에서도 별 다른 것 없이 동일하게 사용할 수 있음.
 */
global.message = '안녕하세ㅇㅛ!';

console.log(A());