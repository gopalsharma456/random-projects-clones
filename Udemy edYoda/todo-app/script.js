let button = document.getElementById("btn");
let ulList = document.getElementById("list-item");
let inputBox = document.getElementById("add-item");
let count = 1;

let currentInputValue = "";

function handleInputBox(e) {
  currentInputValue = e.target.value;
}

function CreateLiItem() {
  let liItem = document.createElement("li");
  let deleteBtn = document.createElement("button");
  let content = document.createTextNode(currentInputValue);
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", function () {
    ulList.removeChild(liItem);
  });

  liItem.appendChild(content);
  liItem.setAttribute("id", `${count}`);
  liItem.appendChild(deleteBtn);

  ulList.appendChild(liItem);
  count += 1;

  inputBox.value = "";
  currentInputValue = "";

  return liItem;
}

function addFunction() {
  if (
    currentInputValue !== undefined &&
    currentInputValue !== null &&
    currentInputValue !== ""
  ) {
    CreateLiItem();
  } else {
    alert("Please input value");
  }
}


inputBox.addEventListener("input", handleInputBox);

inputBox.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    addFunction();
  }
});

button.addEventListener("click", addFunction);

