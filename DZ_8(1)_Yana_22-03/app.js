const parent_block = document.querySelector(".parent_block");
const urlInfo = "https://jsonplaceholder.typicode.com/photos";
const fetchRequest = async () => {
  try {
    const response = await fetch(urlInfo);
    const info = await response.json();
    info.map((item) => {
      const innerBlock = document.createElement("div");
      const span = document.createElement("span");
      innerBlock.setAttribute("class", "inner_block");
      parent_block.append(innerBlock);
      const h4 = document.createElement("h4");
      innerBlock.append(h4);
      innerBlock.append(span);
      span.innerText = item.id;
      h4.innerHTML = item.title;
      const blockContent = document.createElement("div");
      blockContent.setAttribute("class", "block_content");
      innerBlock.append(blockContent);
      const img1 = document.createElement("img");
      img1.setAttribute("class", "img1");
      const img2 = document.createElement("img");
      img2.setAttribute("class", "img2");
      blockContent.append(img1);
      blockContent.append(img2);
      img1.src = item.url;
      img2.src = item.thumbnailUrl;
    });
  } catch {
    console.error("error");
  } finally {
    console.warn("done!!!!");
  }
};
fetchRequest();
