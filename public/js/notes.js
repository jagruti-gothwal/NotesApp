let tableBody = document.getElementById("tableBody");

// updates the data in localstorage
function update() {
  let str = "";
  if (localStorage.getItem("itemsJson") != null) {
    itemsJson = JSON.parse(localStorage.getItem("itemsJson"));
    itemsJson.forEach((element, index) => {
      str += `
            <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button id="dBtn" onclick="deleted(${index});">Delete</button></td>
            </tr>`;
    });
  } else {
    console.log("Error in adding notes");
  }
  tableBody.innerHTML = str;
}
update(); //calling update to update table

//deletes the data from table and localstorage
function deleted(itemIndex) {
  console.log("button clicked", itemIndex);
  itemsJson = JSON.parse(localStorage.getItem("itemsJson"));
  //Delete
  itemsJson.splice(itemIndex, 1);
  localStorage.setItem("itemsJson", JSON.stringify(itemsJson));
  update();
}
