// 간단한 출력과 콜백지옥
let name = "백시연";
let age = 18;

console.log(`Name: ${name}`);

function fnc1(a, b) {
    return a+b;
}
let fnc2 = function(a, b) {
    return a-b;
};

let val1 = fnc1(10, 20);
let val2 = fnc2(20, 10);

// 콜백 지옥 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
/*
login(UserActivation, () => {
    getProfile(() => {
        getPosts(() => {
            getSiyeon(() => {

            });
        });
    });
});
*/

// 분리
function fetchData(callback) {
    setTimeout(() => {
    console.log(`age: ${age}`);
    }, 2000);
}

fetchData((data) => {
    console.log(data);
});