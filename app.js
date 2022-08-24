import data from './data.js'

const items = document.querySelector('.items')

function createListItem({ app, img }) {
   const li = document.createElement("li");
   const span = document.createElement("span");
   const image = document.createElement("img");

   span.textContent = app;
   image.src = img;
   li.append(span, image);

   return li;
}

function populateList() {
    data.forEach(itemData => {
        const item = createListItem(itemData);
        items.insertAdjacentElement("beforeend", item);
    })
}

populateList();
