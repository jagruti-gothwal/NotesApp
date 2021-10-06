let tableBody = document.getElementById("tableBody");

// pulling the data from localstorage
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
            <td><button id="deleteBtn" onclick="deleteNote(${index});">Delete</button></td>
            </tr>`;
    });
  } else {
    console.log("Error in adding notes");
  }
  tableBody.innerHTML = str;
}
fetchNotes(); 

//deletes the data from table and localstorage
function deleteNote(itemIndex) {
  console.log("button clicked", itemIndex);
  itemsJson = JSON.parse(localStorage.getItem("itemsJson"));
  //Delete
  itemsJson.splice(itemIndex, 1);
  localStorage.setItem("itemsJson", JSON.stringify(itemsJson));
  fetchNotes();
}

//Clear the data from table and localstorage
clearStorage.addEventListener("click", () => {
  if (confirm("Are you sure you want to delete this note!")) {
    console.log("yes");
    localStorage.clear();
  } else {
    console.log("no");
  }
  fetchNotes();
});