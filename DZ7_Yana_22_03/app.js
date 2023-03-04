const main_info_inner = document.querySelector(".main_info_inner");

const url = "https://jsonplaceholder.typicode.com/posts";

const fetchRequest = async () => {
  try {
    const rest = await fetch(url);
    const info = await rest.json();
    info.map((item) => {
      console.log(item.title);
      const newDiv = document.createElement("div");
      newDiv.setAttribute("class", "newDiv");
      main_info_inner.append(newDiv);
      const h3 = document.createElement("h3");
      h3.innerText = item.title;
      newDiv.append(h3);
      const newDivInner = document.createElement("div");
      newDivInner.setAttribute("class", "newDivInner");
      newDiv.append(newDivInner);
      const p = document.createElement("p");
      const img = document.createElement("img");
      newDivInner.append(img);
      img.setAttribute("class", "img_info");
      newDivInner.append(p);
      p.setAttribute("class", "p_text");
      p.innerHTML = item.body;
      img.src =
        "https://cdnn1.img.sputnik-abkhazia.info/img/102951/73/1029517318_112:0:1889:1333_1920x0_80_0_0_479b92c01ccee383a0be7e65b46c1962.jpg";
    });
  } catch {
    console.error("error");
  } finally {
    console.warn("done!!!!!");
  }
};
fetchRequest();
