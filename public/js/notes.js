let tableBody = document.getElementById("tableBody");

// push the data in localstorage
function fetchNote() {
  let str = "";
  if (localStorage.getItem("itemsJson") != null) {
    itemsJson = JSON.parse(localStorage.getItem("itemsJson"));
    itemsJson.forEach((element, index) => {
      str += `
            <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button id="dBtn" onclick="deleteNote(${index});">Delete</button></td>
            </tr>`;
    });
  } else {
    console.log("Error in adding notes");
  }
  tableBody.innerHTML = str;
}
fetchNote(); //calling update to update table

//deletes the data from table and localstorage
function deleteNote(itemIndex) {
  console.log("button clicked", itemIndex);
  itemsJson = JSON.parse(localStorage.getItem("itemsJson"));
  //Delete
  itemsJson.splice(itemIndex, 1);
  localStorage.setItem("itemsJson", JSON.stringify(itemsJson));
  fetchNote();
}

//Clear  LocalStorage
clearStorage.addEventListener("click", () => {
  if (confirm("Are you sure you want to delete this note!")) {
    console.log("yes");
    localStorage.clear();
  } else {
    console.log("no");
  }
  fetchNote();
});