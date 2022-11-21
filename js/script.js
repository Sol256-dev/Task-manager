let inputField = document.querySelector(".add-task"),
  ul = document.querySelector("ul"),
  li = document.createElement("li"),
  tempMsg = document.querySelector(".temp-msg");

function addToList() {
  if (ul.childNodes != li) {
    ul.appendChild(li);
    li.innerHTML = inputField.value;
    tempMsg.classList.add("hide");
  } else {
    console.log("hello");
  }

  inputField.value = "";
}

let submitBtn = document
  .querySelector(".btn")
  .addEventListener("click", addToList);
