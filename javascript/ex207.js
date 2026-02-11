const obj = {name: "SiyeonBAEK", age: 22};      // 자바스크립트 객체
const jsonStr = '{"name": "sIYEONbaek", "age": 33}';        // Json 객체

const objData = JSON.stringify(obj);    // js => json
const jsonData = JSON.parse(jsonStr);   // json => js

console.log(obj);
console.log(objData);
console.log("---------------------------------");
console.log(jsonStr);
console.log(jsonData);
