
const addNote = document.getElementById('addNote');
addNote.addEventListener('click', () => {
    console.log("Updating...");
    const tit = document.getElementById('title').value;
    const desc = document.getElementById('description').value;

    if(localStorage.getItem('itemsJson') == null){
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }else{
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
});