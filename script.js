'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

// open and close functions
const modalOpen = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const modalClose = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// opening modal when clicking button (use for loop because 3 buttons all have the same class in html)
for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener('click', modalOpen);

// closing modal when clicking close button
btnCloseModal.addEventListener('click', modalClose);

// closing modal when clicking outside of the modal (= clicking on the overlay)
overlay.addEventListener('click', modalClose);

// closing the modal when escape key is pushed
window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modalClose();
  }
});
