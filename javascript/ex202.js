// 약속(Promise)
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Server Data");
        }, 1000);
    });
}
// Promise Chainning
fetchData() 
.then(date => {
    console.log(data);
})
.then(data => {
    data + "가공";
})
.catch(err => {
    console.log(err);
});

// 비동기 전송 방식(fetch/async/await)
async function loadData() {
    const data = await fetchData();     // 처리 결과를 가져온 후에 대입 // await이 없으면 값을 가져오는데 오래걸리면 가져오다가 null이 들어감
    console.log(data);
}

loadData();