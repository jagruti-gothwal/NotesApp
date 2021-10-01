let tableBody = document.getElementById("tableBody");

// push the data in localstorage
function fetchNotes() {
  let str = "";
  if (localStorage.getItem("itemsJson") != null) {
    itemsJson = JSON.parse(localStorage.getItem("itemsJson"));
    itemsJson.forEach((element, index) => {
      str += `
            <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button id="dBtn" onclick="deleteNotes(${index});">Delete</button></td>
            </tr>`;
    });
  } else {
    console.log("Error in adding notes");
  }
  tableBody.innerHTML = str;
}
fetchNotes(); //calling update to update table

//deletes the data from table and localstorage
function deleteNotes(itemIndex) {
  console.log("button clicked", itemIndex);
  itemsJson = JSON.parse(localStorage.getItem("itemsJson"));
  //Delete
  itemsJson.splice(itemIndex, 1);
  localStorage.setItem("itemsJson", JSON.stringify(itemsJson));
  fetchNotes();
}

//Clear  LocalStorage
clearStorage.addEventListener("click", () => {
  if (confirm("Are you sure you want to delete this note!")) {
    console.log("yes");
    localStorage.clear();
  } else {
    console.log("no");
  }
  fetchNotes();
});