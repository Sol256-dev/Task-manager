let list = [];
// list.forEach((element) => {});

// when button is clicked, this runs first
let btn = document.querySelector(".btn").addEventListener("click", () => {
  let inputField = document.querySelector(".add-task");
  console.log('querySelector for inputfield is running');

  list.push(inputField.value);
  console.log('array push is running');

  for (let i = 0; i < list.length; i++) {
    let h = window.localStorage.setItem(i, JSON.stringify(list[i]));
    console.log("storing to localstorage is running");
    let s = JSON.parse(localStorage.getItem(i))
    
    // first error below here
    let txtNode = document.createTextNode(s);
    console.log("create node is running");
    let ul = document.querySelector("ul");
    console.log("ul queryselector is running");
    let li = document.createElement("li");
    console.log('li create element is running');

    li.appendChild(txtNode);
    console.log('append txtnode to li is running');
    ul.appendChild(li);
    console.log('append li to ul is running');
  }

  console.log(list);
});
