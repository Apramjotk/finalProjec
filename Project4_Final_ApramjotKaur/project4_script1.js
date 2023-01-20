let groceryList = [];

function initialize() {
  const addButton = document.querySelector("#add1");
  addButton.addEventListener("click", add_element);
  const recordRemove = document.querySelector("#remove1");
  recordRemove.addEventListener("click", removeElementByNumber);
  const moveUpButtons = document.querySelector("#moveUp1");
  moveUpButtons.addEventListener("click", moveItemsUp);
  const moveDownButtons = document.querySelector("#moveDown1");
  moveDownButtons.addEventListener("click", moveItemsDown);
}

let add_element = () => {
  document.getElementById("list").value != "" &&
  !groceryList.includes(document.getElementById("list").value)
    ? groceryList.push(document.getElementById("list").value)
    : alert("You can't enter anything empty or a duplicate");
  document.getElementById("list").value = "";
  display();
};
function display() {
  const container = document.querySelector(".containerA"); // container div where items will be displayed
  container.textContent = "";
  for (let i = 0; i < groceryList.length; i++) {
    const item = document.createElement("div"); // create a new div for each item
    item.innerHTML = "Item " + (i + 1) + ": " + groceryList[i]; // set the content of the div to the current item
    item.classList.add("item");
    container.appendChild(item); // add the item div to the container
  }
}
let removeElementByNumber = () => {
  let number = Number(document.getElementById("remove").value);
  if (number !== "" && typeof number === "number") {
    let removing = groceryList.splice(
      document.getElementById("remove").value - 1,
      1
    );
  }
  document.getElementById("remove").value = "";
  display();
};
let selectedIndices = [];
function moveItemsUp() {
  let itemMoving = document.querySelectorAll("#moveUp")[0].value - 1;
  if (!selectedIndices.includes(itemMoving)) {
    selectedIndices.push(itemMoving);
    timesMoved = 0;
  } else {
    let index = selectedIndices.indexOf(itemMoving);
    itemMoving = selectedIndices[index];
  }
  if (itemMoving != 0) {
    let tempElement = groceryList[itemMoving - 1];
    groceryList[itemMoving - 1] = groceryList[itemMoving];
    groceryList[itemMoving] = tempElement;
    selectedIndices[selectedIndices.indexOf(itemMoving)] = itemMoving - 1;
    document.querySelectorAll("#moveUp")[0].value = itemMoving;
  } else {
    alert("You have reached the top of the list");
  }
  display();
}
let selectedIndices1 = [];

function moveItemsDown() {
  let itemMoving = document.querySelectorAll("#moveDown")[0].value - 1;
  if (!selectedIndices1.includes(itemMoving)) {
    selectedIndices1.push(itemMoving);
    timesMoved = 0;
  } else {
    let index = selectedIndices1.indexOf(itemMoving);
    itemMoving = selectedIndices1[index];
  }
  var toIndex = Number(itemMoving) + 1;
  if (toIndex < groceryList.length) {
    let tempElement = groceryList[toIndex];
    groceryList[toIndex] = groceryList[itemMoving];
    groceryList[itemMoving] = tempElement;
    selectedIndices1[selectedIndices1.indexOf(itemMoving)] = toIndex;
    document.querySelectorAll("#moveDown")[0].value = toIndex + 1;
  } else {
    alert("You have reached the end of the list");
  }
  display();
}
