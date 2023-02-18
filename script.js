const input = document.querySelector(".taskName");
const addButton = document.querySelector(".addTaskButton");
const list = document.querySelector(".list");
const deleteButton = document.querySelector(".deleteTask");
const emptyBlock = document.querySelector(".emptyBlock");

addButton.addEventListener("click", (e) => {
  if (input.value === "") return;
  createTasks(input.value);
  console.log(input.value);
  input.value = "";
});

function createTasks(value) {
  const listItem = document.createElement("div");
  listItem.className = "list__item";
  listItem.innerHTML = `<div>${value}</div><input type="checkbox">`;
  list.append(listItem);
  emptyBlock.style.display = "none";
  deleteButton.removeAttribute("disabled");
}

deleteButton.addEventListener("click", (e) => {
  list.remove();
  emptyBlock.style.display = "block";
  deleteButton.setAttribute("disabled", true);
});
//после очищения списка новые задачи не добавляются!!!!!!!!!!!
