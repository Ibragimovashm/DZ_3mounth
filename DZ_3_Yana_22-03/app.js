////////////////////меню/////////////////////
const tabParent = document.querySelector(".tabheader__items");
const tabItems = document.querySelectorAll(".tabheader__item");
const tabContent = document.querySelectorAll(".tabcontent");

const hideContent = () => {
    tabContent.forEach((i) => {
        i.style.display = "none";
    });
    tabItems.forEach((j) => {
        j.classList.remove("tabheader__item_active");
    });
};

hideContent();

const showContent = (n = 0) => {
    tabContent[n].style.display = "block";
    tabItems[n].classList.add("tabheader__item_active");
};

showContent();

let c = 0;
const slider = () => {
    setInterval(() => {
        if (c === 4) c = 0;
        hideContent();
        showContent(c);
        c++;
    }, 1500);
};

slider();
////////////////////////////////////////////////////////

tabParent.addEventListener("click", (e) => {
    const target = e.target;
    if (!target.classList.contains("tabheader__item_active")) {
        tabItems.forEach((item, index) => {
            if (item === target) {
                hideContent();
                showContent(index);
            }
        });
        if (condition) {
        }
    }
});

///////////////модалка/////////////////

const modal = document.querySelector(".modal");
const open = document.querySelector("#open_modal");
const close = document.querySelector("#close_modal");
const btnTwo = document.querySelector("#btn_two");
const body = document.querySelector("body");

open.addEventListener("click", () => {
    modal.style.display = "block";
    body.style.overflow = "hidden";
});

btnTwo.addEventListener("click", () => {
    modal.style.display = "block";
    body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
    modal.style.display = "none";
    body.style.overflow = "visible";
});

////////////////////////////////////////////

window.addEventListener("scroll", () => {
    const bbb = document.getElementById("newCordinates");
    bbb.innerHTML = pageYOffset;
    if (bbb.innerHTML > 4400) {
        modal.style.display = "block";
    }
});
