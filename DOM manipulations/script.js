'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const header = document.querySelector('.header');


/////////////////////////////////////////////////
// Modal window

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
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

/////////////////////////////////////////////////

// Display / Remove cookie message
const cookieMessage = document.createElement('div');
cookieMessage.innerHTML = `We use cookies for improved functionality and analytics.
    <button class="btn btn--close-cookie">Got it</button>`
cookieMessage.classList.add('cookie-message')
cookieMessage.style.backgroundColor = '#37383d';
cookieMessage.style.width = '120%'
cookieMessage.style.height = Number.parseFloat(getComputedStyle(cookieMessage).height) + 30 + 'px';
header.append(cookieMessage)

document.querySelector('.btn--close-cookie').addEventListener(
  'click', function () {
    cookieMessage.remove()
  }
)

/////////////////////////////////////////////////

// Implementing smooth scrolling

btnScrollTo.addEventListener('click', function () {
  section1.scrollIntoView({behavior:"smooth"})
})

// Page Navigation
// document.querySelectorAll('.nav__link').forEach(
//   function (el) {
//     el.addEventListener('click', function (e) {
//       e.preventDefault()
//       // console.log('LINK');
//       const id = this.getAttribute('href')
//       document.querySelector(id).scrollIntoView({behavior: 'smooth'})
//       console.log(id);

//     })
//   }
  
// )

// Add event listener to common parent element
// 2. Determine what element originated the event


document.querySelector('.nav__links').addEventListener(
  'click', function (e) {
    e.preventDefault();
    // figure where the event originate from
    // We only want to work with clicks that come from the links
    // console.log(e.target);
    if (e.target.classList.contains('nav__link')) {

            const id = e.target.getAttribute('href')
            document.querySelector(id).scrollIntoView({behavior: 'smooth'})
    }
  }
)



// Tabbed Component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // Active tab
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'))
clicked?.classList.add('operations__tab--active');
  console.log(clicked);


// Activate content area

})



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
// const header = document.querySelector('.header');
// console.log(document.documentElement);
// const allSections = document.querySelectorAll('.section');
// console.log(allSections[0]);

// const allButtons = document.getElementsByTagName('button')
// console.log(allButtons);

// Creating and inserting elemnets
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML = `We use cookies for improved functionality and analytics.
//   <button class="btn btn--close-cookie">Got it!</button>`;
// we inserted it as the first element
// header.append(message);
// it moves the element from the first to the last child element
// header.append(message)

// header.after(message)

//  Deleting Element
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// We can only manipulate styles that we set manually.
// We cannot get a style hidden in a class

// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

// Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// It returns an absolute url
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = 'beautiful minimalist logo'

// Non-standard
// relative url
// console.log(logo.getAttribute('src'))

// Data attribute

// classes
// logo.classList.add()
// logo.classList.remove()
// logo.classList.toggle()
// logo.classList.contains()

// IMPLEMENTING SMOOTH SCROLLING
// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (e) {
//   // first get the coordinates of the element we want to scroll to
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);

  // console.log(e.target.getBoundingClientRect());

  // y is the distance from the current position of the viewport to the to of the page
  // console.log('current scroll(x/y)', window.pageXOffset, window.pageYOffset);

  // Reading the height and width of the current viewport
  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth,
  // );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );


// SMOOTH SCROLLING
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // })

//   // Modern Approach
//   section1.scrollIntoView({behavior: 'smooth'})

// });

// NB: BoundingClientRect() is relative to the visible viewport
//


//  WORKING WITH EVENTS
/* 
An event is a signal that is generated by a certain dom node, which means something has happened
we can listen for events.
*/

// const h1 = document.querySelector('h1')

// h1.addEventListener('mouseenter', function () {
//   console.log('something just happened');
// })

// listening for an event just once

// const alertH1 = function () {
//   alert('You are reading the heading')

//   h1.removeEventListener('mouseenter', alertH1)
// }

// h1.addEventListener('mouseenter', alertH1)



// Event propagation
// Event target refers to where the action originated from, and not where the eventhandler is attached
// it is where the click happened
// current target refers to the event which the event handler is attached


// rgb(255, 255, 255)
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// console.log(randomColor());

// document.querySelector('.nav__link').addEventListener(
//   'click', function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('LINK', e.target, e.currentTarget);
//     // this points to the element which the eventhandler is attached to
//     console.log(e.currentTarget === this);

//     // stopping propagation : not advisable in practice
//     e.stopPropagation()
//   }
// )

// document.querySelector('.nav__links').addEventListener(
//   'click', function (e) {
//     this.style.backgroundColor = randomColor();
//      console.log('Container', e.target, e.currentTarget);
//   }
// )

// document.querySelector('.nav').addEventListener(
//   'click', function (e) {
//     this.style.backgroundColor = randomColor();
//      console.log('Nav', e.target, e.currentTarget);
//   }
// )


// TRAVERSING THE DOM
// const h1 = document.querySelector('h1');

// going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.children);
// h1.firstElementChild.style.color = 'red';
// h1.lastElementChild.style.color = 'white'

// Going Upwards: parents
// console.log(h1.parentNode)
// console.log(h1.parentElement)

// gets the parent closest to the h1 element
// console.log(h1.closest('.header'));

// Going sideways: siblings
// console.log(h1.nextElementSibling);

// console.log(h1.parentElement.children);



// Building a tabbed component

















