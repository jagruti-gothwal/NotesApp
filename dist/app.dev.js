"use strict";

// const userList = document.querySelector(".name-list");
// const listInput = document.querySelector(".list-input");
// const addListBtn = document.querySelector(".addListBtn");
// addListBtn.addEventListener("click", function(){
//     const newLi = document.createElement('LI');
//     const liContent = document.createTextNode(listInput.value);
//     newLi.appendChild(liContent);
//     userList.appendChild(newLi);
// })
var card = document.querySelector('.card');
var noteTitle = document.querySelector('.note-title');
var noteDescription = document.querySelector('.note-description');
var addNoteBtn = document.querySelector('.addNoteBtn');
var noteInput = document.querySelector('.note-input');
addNoteBtn.addEventListener('click', function () {
  var newCard = document.createElement('DIV');
  var noteTitle = document.createElement(noteTitle.value);
  var noteDescription = document.createElement(noteDescription.value);
  newLi.appendChild(noteTitle);
  newLi.appendChild(noteDescription);
  userList.appendChild(newLi);
});