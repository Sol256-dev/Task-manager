let ul = document.querySelector("ul");

// check localStorage for tasks in database
window.onload = () => {
  if (localStorage.length !== 0) {
    for (let i = 1; i <= localStorage.length; i++) {
      let temporaryStore = JSON.parse(localStorage.getItem(`task ${i}`));
      let textNode = document.createTextNode(temporaryStore.task);
      let li = document.createElement("li"),
        delIcon = document.createElement("i"),
        editIcon = document.createElement("i"),
        div = document.createElement("div"),
        div2 = document.createElement("div"),
        tempMsg = document.querySelector(".temp-msg");
      tempMsg.classList.add("hide");
      li.appendChild(textNode);
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

      // task delete button
      delIcon.addEventListener("click", () => {
        localStorage.removeItem(`task ${i}`);
        location.reload();
      });

      // task edit button
      editIcon.addEventListener("click", () => {
        temporaryStore.task = inputField.value;
      });

      // check task as done
      li.addEventListener("click", () => {
        defaultTaskState = true;
        let temporaryStore2 = JSON.parse(localStorage.getItem(`task ${i}`));
        if (temporaryStore2.state === true) {
          li.classList.add("done");
        }
        let valueDictionary2 = {
          state: defaultTaskState,
          task: temporaryStore.task,
        };
        localStorage.setItem(`task ${i}`, JSON.stringify(valueDictionary2));
      });
    }
  } else {
    console.log("localStorage empty");
  }
};

// array to store input values
let arr = [];
let defaultTaskState = false;

let inputField = document.querySelector(".add-task");

// fx to store list values from input field in an array
let captureInputValues = () => {
  arr.push(inputField.value);
  // call fx to store above arr in localStorage
  storeArrInLocalstorage();
};

// fx to store arr in localStorage
let storeArrInLocalstorage = () => {
  for (let i = 0; i < arr.length; i++) {
    let valueDictionary = { state: defaultTaskState, task: arr[i] };
    localStorage.setItem(`task ${i + 1}`, JSON.stringify(valueDictionary));
  }
  // call displayToList fx
  displayToList();
};

// fx to pick items from localStorage and display on a list
let displayToList = () => {
  // UI elements
  let li = document.createElement("li"),
    delIcon = document.createElement("i"),
    editIcon = document.createElement("i"),
    div = document.createElement("div"),
    div2 = document.createElement("div"),
    tempMsg = document.querySelector(".temp-msg");

  for (let i = 1; i <= arr.length; i++) {
    let temporaryStore = JSON.parse(localStorage.getItem(`task ${i}`));
    if (temporaryStore.task === inputField.value) {
      let textNode = document.createTextNode(temporaryStore.task);
      tempMsg.classList.add("hide");
      li.appendChild(textNode);
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

      // task delete button
      delIcon.addEventListener("click", () => {
        localStorage.removeItem(`task ${i}`);
        location.reload();
      });

      // task edit button
      editIcon.addEventListener("click", () => {
        console.log("hello world2");
      });

      // check task as done
      li.addEventListener("click", () => {
        defaultTaskState = true;
        let valueDictionary2 = {
          state: defaultTaskState,
          task: temporaryStore.task,
        };
        localStorage.setItem(`task ${i}`, JSON.stringify(valueDictionary2));
        let temporaryStore2 = JSON.parse(localStorage.getItem(`task ${i}`));
        if (temporaryStore2.state === true) {
          li.classList.add("done");
        }
      });
    }
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
