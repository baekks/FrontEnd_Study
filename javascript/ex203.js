function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("서버 데이터");
        }, 1000);
    });
}

//비동기 전송 방식(fetch/async/await)
async function loadData() {
    const data = await fetchData();   //처리 결과를 가져온 후에 대입
    console.log(data);
}

loadData();