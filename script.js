// script.js

function addListItems() {
  const list = document.getElementById("infi-list");
  for (let i = 0; i < 2; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(listItem);
  }
}

for (let i = 0; i < 10; i++) {
  addListItems();
}

window.onscroll = function () {
  const list = document.getElementById("infi-list");
  const lastItem = list.lastElementChild;
  const lastItemPosition = lastItem.getBoundingClientRect();
  
  if (lastItemPosition.bottom <= window.innerHeight) {
    addListItems();
  }
};
