"use strict";

var tableBody = document.getElementById('tableBody');

function update() {
  var str = "";

  if (localStorage.getItem('itemsJson') != null) {
    itemsJson = JSON.parse(localStorage.getItem('itemsJson'));
    itemsJson.forEach(function (element, index) {
      str += "\n    <tr>\n    <th scope=\"row\">".concat(index + 1, "</th>\n    <td>").concat(element[0], "</td>\n    <td>").concat(element[1], "</td>\n    <td><button id=\"dBtn\" onclick=\"deleted(").concat(index, ");\">Delete</button>  <button id=\"eBtn\">Edit</button></td>\n    </tr>");
    });
  }

  tableBody.innerHTML = str;
}

update();

function deleted(itemIndex) {
  console.log("button clicked", itemIndex);
  itemsJson = JSON.parse(localStorage.getItem('itemsJson')); //Delete 

  itemsJson.splice(itemIndex, 1);
  localStorage.setItem('itemsJson', JSON.stringify(itemsJson));
  update();
}