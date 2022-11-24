// // =====================================================================
// // having all list item stored with one key...sort of like an array

// let listItems = [];
// let singleElementFromStoredArray = ""; // to store the values from localstorage

// // function to call a click event
// let subBtn = document.querySelector(".btn").addEventListener("click", () => {
//   let ul = document.querySelector("ul"),
//     inputField = document.querySelector(".add-task").value;

//   listItems.push(inputField);
//   localStorage.setItem("value", JSON.stringify(listItems));
//   let arrStored = JSON.parse(localStorage.getItem("value"));

//   arrStored.forEach((element) => { // to check for matching element with the input value
//     if (element === inputField) {
//       singleElementFromStoredArray = element;
//     }
//   });

//   let txtNode = document.createTextNode(singleElementFromStoredArray),
//     li = document.createElement("li"),
//     tempMsg = document.querySelector(".temp-msg"),
//     //input field querySelector
//     inpf = document.querySelector(".add-task");

//   if (inputField === "") {
//     alert("Please enter a task!");
//   } else {
//     tempMsg.classList.add("hide");
//     li.appendChild(txtNode);
//     ul.appendChild(li);
//   }

//   // reset the input field
//   inpf.value = "";
// });

// =====================================================================
// having each list item stored with its own key

let list = [];

// when button is clicked, this runs first
let btn = document.querySelector(".btn").addEventListener("click", () => {
  let inputField = document.querySelector(".add-task");// ====
  let li = document.createElement("li"),
    ul = document.querySelector("ul");

  list.push(inputField.value);

  for (let i = 0; i < list.length; i++) {
    window.localStorage.setItem(i, JSON.stringify(list[i]));

    let localStore = window.localStorage.getItem(i),
      tempMsg = document.querySelector(".temp-msg"),
      txtNode = document.createTextNode(JSON.parse(localStore));

    console.log(txtNode);

    tempMsg.classList.add("hide");

    li.appendChild(txtNode);
    ul.appendChild(li);

    // reset the input field after button click
    inputField.value = "";
    // break;
  }
});

    
