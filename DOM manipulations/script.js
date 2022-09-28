'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});








// Lectures

/* 
The DOM is an interface btw our js code and the browser
We can write js to create, modify and delete html elements; set styles,
 classes and attributes and listen and respond to events

 DOM tree is generated from an html document, which we can then interact with

 DOM is a very complex API that contains lots of methods and properties to interact with the dom tree

Every single NODE in the DOM tree is of the type NODE
Each NODE is represented by an object, this object gets access to loads of methods and properties
NODE: Element type, Text type, Comment type, Document type
The Element node gives the element access to a ton on useful properties and methods such as:
.innerHTML, .classList, .remove() , .setAttribute() etc
EACH ELEMENT IS REPRESENTED INTERNALLY AS AN OBJECT

ALL THE CHILD TYPES WILL HAVE ACCESS TO THE PROPERTIES AND METHODS OF THEIR PARENT NODE TYPE

THE EVENT TARGET IS A PARENT TO THE NODE TYPE AND THE WINDOW TYPE





*/


// SELECTING, CREATING, AND DELETING ELEMENTS
const header = document.querySelector('.header')
// console.log(document.documentElement);
const allSections = document.querySelectorAll('.section')
// console.log(allSections[0]);


// const allButtons = document.getElementsByTagName('button')
// console.log(allButtons);


// Creating and inserting elemnets
const message = document.createElement('div');
message.classList.add('cookie-message')
message.innerHTML = `We use cookies for improved functionality and analytics.
  <button class="btn btn--close-cookie">Got it!</button>`;
  // we inserted it as the first element
header.append(message)
// it moves the element from the first to the last child element
// header.append(message)

// header.after(message)


//  Deleting Element
document.querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
  message.remove()
})




