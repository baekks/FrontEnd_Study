// 구조 분해 할당과 Spread / Rest 연산자
const user = {
    name: "siyeon",
    age: 22
};

console.log("객체");
console.log(user.name);
console.log(user.age);

const {name, age} = user;       // 구조 분해 할당

console.log(name, age);

const arr = [10, 20, 30];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

const [a, b, c] = arr;      // 구조 분해 할당
console.log(a, b, c);

const arr1 = [1, 2];
const arr2 = [3, 4];

const merged = [...arr1, ...arr2];  // Spread

console.log(merged);

const person = {name: "myong"};
const newPerson = {...person, age: 22}; // Rest
console.log(newPerson);