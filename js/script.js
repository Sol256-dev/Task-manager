let inputField = document.querySelector(".add-task"),
  ul = document.querySelector("ul"),
  li = document.createElement("li"),
  tempMsg = document.querySelector(".temp-msg");

function addToList() {
  if (inputField.value === "") { //check if the input field is empty
    alert("Please enter a task!");
  } else { // if not empty perform tasks below
    li.innerHTML = inputField.value; // equate the value of the input field to the list item
    ul.appendChild(li); // add li item to the ul
    tempMsg.classList.add("hide"); // add .hide class to tempMsg
  }

  inputField.value = "";
}

let submitBtn = document
  .querySelector(".btn")
  .addEventListener("click", addToList);
