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
  //   call displayToList fx
  displayToList();
};

// fx to pick items from localStorage and display on a list
let displayToList = () => {
  // UI elements
  const ul = document.querySelector("ul"),
    li = document.createElement("li"),
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
        ul.appendChild(li);
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
