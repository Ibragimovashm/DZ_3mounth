const main_info_inner = document.querySelector(".main_info_inner");

const block = document.querySelector(".block");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
let count = 1;

const fetchRequest = async () => {
  try {
    const rest = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${count}`
    );
    const info = await rest.json();
    main_info_inner.append(block);
    block.innerHTML = `
    <h3>${info.title}</h3>
    <span class="span">${info.id}</span>
    <div class="block_info"> 
    <img class="img_peek" src="https://cdnn1.img.sputnik-abkhazia.info/img/102951/73/1029517318_112:0:1889:1333_1920x0_80_0_0_479b92c01ccee383a0be7e65b46c1962.jpg"
    >
    <p class="p_body">${info.body}<p>

    </div>
   `;
  } catch {
    console.error("error");
  } finally {
    console.warn("done!!!!!");
  }
};
fetchRequest();
btnNext.addEventListener("click", () => {
  if (count <= 100) {
    count++;
    fetchRequest();
  } else {
    alert("stopped");
  }
});

btnPrev.addEventListener("click", () => {
  if (count > 1) {
    count--;
    fetchRequest();
  } else {
    alert("error");
  }
});
