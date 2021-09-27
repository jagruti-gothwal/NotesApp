let tableBody = document.getElementById('tableBody');
function update(){
    let str ="";
    if (localStorage.getItem('itemsJson')!=null) {
    itemsJson = JSON.parse(localStorage.getItem('itemsJson'));
   
    itemsJson.forEach((element, index) => {
    str+= `
    <tr>
    <th scope="row">${index+1}</th>
    <td>${element[0]}</td>
    <td>${element[1]}</td>
    <td><button id="dBtn">Delete</button>  <button id="eBtn">Edit</button></td>
    </tr>`;
});
}
tableBody.innerHTML = str;
}
update();

