// keep the page up-to-date with content from the database after refresh
let body = document.querySelector("body");
tempMsg = document.querySelector(".temp-msg");
window.onload = () => {
  if (localStorage.length !== 0) {
    tempMsg.classList.add("hide");
    let arrStorage = JSON.parse(localStorage.getItem("keyValue"));
    arrStorage.forEach((element) => {
      const ul = document.querySelector("ul"),
        li = document.createElement("li"),
        delIcon = document.createElement("i"),
        editIcon = document.createElement("i"),
        div = document.createElement("div"),
        div2 = document.createElement("div");

      const txtNode = document.createTextNode(element);
      li.appendChild(txtNode);
      div.classList.add("item-style");
      div.appendChild(li);
      div2.append(editIcon);
      div2.append(delIcon);
      div.append(div2);
      div2.classList.add("list-edit-del");
      editIcon.classList.add("fa", "fa-pencil-square", "edit-icon");
      delIcon.classList.add("fa", "fa-trash", "del-icon");
      ul.appendChild(div);
      clearInputField();
    });
  } else {
    console.log("local storage is empty");
  }
};

// array to store input values
let arr = [];

let inputField = document.querySelector(".add-task");

// fx to store list values from input field in an array
let captureInputValues = () => {
  arr.push(inputField.value);
  // call fx to store above arr in localStorage
  storeArrInLocalstorage();
};

// fx to store arr in localStorage
let storeArrInLocalstorage = () => {
  let arrStr = JSON.stringify(arr);
  window.localStorage.setItem("keyValue", arrStr);
  // call displayToList fx
  displayToList();
};

// fx to pick items from localStorage and display on a list
let displayToList = () => {
  // UI elements
  const ul = document.querySelector("ul"),
    li = document.createElement("li"),
    delIcon = document.createElement("i"),
    editIcon = document.createElement("i"),
    div = document.createElement("div"),
    div2 = document.createElement("div"),
    tempMsg = document.querySelector(".temp-msg");

  if (tempMsg.classList.contains("hide") && inputField.value === "") {
    alert("Please enter a task!");
  } else {
    // tempStore stores an array of the localStorage values
    let tempStore = JSON.parse(localStorage.getItem("keyValue"));
    tempMsg.classList.add("hide");
    // use foreach loop to iterate through the tempStore array
    tempStore.forEach((element) => {
      if (element === inputField.value) {
        const txtNode = document.createTextNode(element);
        li.appendChild(txtNode);
        div.classList.add("item-style");
        div.appendChild(li);
        div2.append(editIcon);
        div2.append(delIcon);
        div.append(div2);
        div2.classList.add("list-edit-del");
        editIcon.classList.add("fa", "fa-pencil-square", "edit-icon");
        delIcon.classList.add("fa", "fa-trash", "del-icon");
        ul.appendChild(div);
        clearInputField();
      }
    });
  }
};

// clear input field
let clearInputField = () => {
  return (inputField.value = "");
};

// add button element defined and functions defined
const addBtn = document.querySelector(".btn").addEventListener("click", () => {
  captureInputValues();
});
