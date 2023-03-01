const block = document.querySelector(".block");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
let count = 1;

const fetchingData = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            block.innerHTML = `
        <h2>${data.title}</h2>
        <span>${data.id}</span>
        <h3>${data.complete}</h3>
    `
        })
}

btnNext.onclick = () => {
    count++
    fetchingData()
}


btnPrev.onclick = () => {
    if (count > 1 ) {
        count--
        fetchingData()
    } else{
        console.log('false ')
    }
}

fetchingData()

let url = `https://jsonplaceholder.typicode.com/posts`

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
