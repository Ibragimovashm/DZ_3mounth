const block = document.querySelector(".block");
let positionX = 0;
let positionY = 0;
let positionX_true = false;
let positionX_false = false;
let start = 1;

const move = () => {
    if (start === 1) {
        if (positionX_true === false && positionX <= 440) {
            positionX += 15;
            block.style.left = `${positionX}px`;
            setTimeout(move, 10);
        } else if (positionX >= 440 && positionY <= 440) {
            positionY += 15;
            block.style.top = `${positionY}px`;
            setTimeout(move, 10);
        } else if (positionX > 0 && positionY >= 440) {
            positionX_true = true;
            positionX -= 15;
            block.style.left = `${positionX}px`;
            setTimeout(move, 10);
        } else if (positionX_false === false && positionY > 0) {
            if (positionY === 10) positionX_true = false;
            positionY -= 10;
            block.style.top = `${positionY}px`;
            setTimeout(move, 10);
        }
    }
};
move();
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////
const newTime = document.querySelector("#p_time");
const btn = document.querySelector("#btn");
const btn_stop = document.querySelector("#btn_stop");

let i = 0;

btn.addEventListener("click", () => {
    const time = setInterval(() => {
        i++;
        newTime.innerHTML = i;
    }, 100);
    btn_stop.addEventListener("click", () => {
        clearInterval(time);
    });
});