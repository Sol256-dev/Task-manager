let subBtn = document
  .querySelector(".btn")
  .addEventListener("click", function () {
    let ul = document.querySelector("ul"),
      inputField = document.querySelector(".add-task").value,
      txtNode = document.createTextNode(inputField),
      li = document.createElement("li"),
      tempMsg = document.querySelector(".temp-msg");

    if (inputField === "") {
      alert("Please enter a task!");
    } else {
      tempMsg.classList.add("hide");
      li.appendChild(txtNode);
      ul.appendChild(li);
    }
    inputField.value = "";
  });
