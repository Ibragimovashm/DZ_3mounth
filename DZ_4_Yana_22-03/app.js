const btn = document.querySelector(".btn");
const wrapper = document.querySelector(".wrapper");
btn.addEventListener("click", () => {
    const request = new XMLHttpRequest(); // создание запроса
    request.open("GET", "data.json"); // объявление метода запроса и указание пути
    request.setRequestHeader("Content-type", "application/json"); // указывание заголовка
    request.send(); // отправка запроса

    request.addEventListener("load", () => {
        const data = JSON.parse(request.response);
        data.map((i) => {
            console.log(i);
            let divParent = document.createElement("div");
            let pName = document.createElement("li");
            let pAge = document.createElement("span");
            wrapper.append(divParent);
            divParent.append(pName);
            divParent.append(pAge);
            pName.innerText = i.name;
            pAge.innerHTML = i.age;
        });
    });
});
