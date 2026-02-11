/*
function add(a, b) {
    return a+b;
}
*/
// 화살표 함수(람다식)
const add = (a,b) => a+b;

const hello = (name, age) => {
    // 템플릿 리터널(백틱으로 감싼다)
    const msg = `이름: ${name}, 나이: ${age}`;
    console.log(msg);
}


console.log(add(10,20));
hello("hell", 22);
