// 예외 및 오류 처리
async function getData() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            if (!res.ok) {
                throw new Error("Server Error");
            }
            const data = await res.json();
            console.log(data);
    } catch(e) {
        console.error("error!!!!!!!!!!!!!!", e.message);
    }
}

getData();