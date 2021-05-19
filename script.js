'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

const modalOpen = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const modalClose = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener('click', modalOpen);

btnCloseModal.addEventListener('click', modalClose);
overlay.addEventListener('click', modalClose);
