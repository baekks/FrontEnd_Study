// POST 요청 비동기 데이터 전송
async function createBoard() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "appliction/json"
        },
        body: JSON.stringify({
            title: "제목",
            body: "내용",
            userId: 1
        })
    });

    const data = await res.json();
    console.log(data);
}
createBoard();