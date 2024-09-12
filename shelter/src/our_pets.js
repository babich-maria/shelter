import { PetCard } from './PetCard.js'
import { PetModal } from './PetModal.js'
console.log(
  "1. Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14\n\
  * блок <header>: +2\n\
  * блок Not only: +2\n\
  * блок About: +2\n\
  * блок Our Friends: +2\n\
  * блок Help: +2\n\
  * блок In addition: +2\n\
  * блок <footer>: +2\n\
2. Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14\n\
  * блок <header>: +2\n\
  * блок Not only: +2\n\
  * блок About: +2\n\
  * блок Our Friends: +2\n\
  * блок Help: +2\n\
  * блок In addition: +2\n\
  * блок <footer>: +2\n\
3. Вёрстка страницы Main соответствует макету при ширине экрана 320px: +6(14)\n\
  * блок <header>: +2\n\
  * блок Not only: +0\n\
  * блок About: +0\n\
  * блок Our Friends: +0\n\
  * блок Help: +2\n\
  * блок In addition: +2\n\
  * блок <footer>: +0\n\
4. Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6\n\
  * блок <header>: +2\n\
  * блок Our Friends: +2\n\
  * блок <footer>: +2\n\
5. Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +4\n\
  * блок <header>: +2\n\
  * блок Our Friends: +2\n\
  * блок <footer>: +0\n\
6. Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +2\n\
  * блок <header>: +2\n\
  * блок Our Friends: +0 \n\
  * блок <footer>: +0 \n\
7. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20 \n\
  * нет полосы прокрутки при ширине страницы Main от 1280рх до 768рх: +5\n\
  * нет полосы прокрутки при ширине страницы Main от 768рх до 320рх: +5\n\
  * нет полосы прокрутки при ширине страницы Pets от 1280рх до 768рх: +5 \n\
  * нет полосы прокрутки при ширине страницы Pets от 768рх до 320рх: +5 \n\
  8. Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции(Примеры неправильной и правильной реализации): +8\n\
* на странице Main: +4\n\
  * на странице Pets: +4\n\
  9. При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер - меню: +4\n\
  Открытие меню при клике на иконку бургер - меню на текущем этапе не проверяется\n\
10. Верстка обеих страниц валидная: \n\
для проверки валидности вёрстки используйте сервис https://validator.w3.org/ : +8\n\
Total - 86"
);

const pets_data =
  [{
    "id": 1,
    "name": "Katrine",
    "img": "./assets/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id": 2,
    "name": "Jennifer",
    "img": "./assets/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id": 4,
    "name": "Sophia",
    "img": "./assets/pets-sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id": 3,
    "name": "Woody",
    "img": "./assets/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "id": 5,
    "name": "Scarlett",
    "img": "./assets/pets-scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id": 6,
    "name": "Timmy",
    "img": "./assets/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "id": 7,
    "name": "Freddie",
    "img": "./assets/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id": 8,
    "name": "Charly",
    "img": "./assets/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
  ];

document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.getElementById('burgerMenu');
  const adaptiveMenu = document.getElementById('adaptiveMenu');

  // Функция для открытия/закрытия меню
  function toggleMenu() {
    adaptiveMenu.classList.toggle('menu-active');
    menuOverlay.classList.toggle('overlay-active');
    burgerMenu.classList.toggle('burger-active');

    // Блокировка скролла страницы
    document.body.style.overflow = adaptiveMenu.classList.contains('menu-active') ? 'hidden' : 'auto';
  }

  // Обработчик клика по бургер-иконке
  burgerMenu.addEventListener('click', toggleMenu);

  // Обработчик клика по затемняющему фону
  menuOverlay.addEventListener('click', toggleMenu);

  // Обработчик кликов по ссылкам в меню
  document.querySelectorAll('.adaptive-menu a').forEach(link => {
    link.addEventListener('click', toggleMenu);
  });
});

let totalPages = 0;
let currentPage = 1;
let petsPerPage = 8; // Количество питомцев на одной странице для ширины экрана >= 1280px
let shuffledPetsData = [];

function calculateTotalPages() {
  const width = window.innerWidth;
  if (width >= 1280) {
    totalPages = 6;
  } else if (width >= 768) {
    totalPages = 8;
  } else {
    totalPages = 16;
  }
}

window.onload = function () {
  if (pets_data) {
    initializePetsData();
    calculateTotalPages();
    renderCurrentPage();
  }
  addPetsClickHandler2();
}

function initializeCarousel() {
  generateRandomCards();
  renderCards();
}

function calculateCardsToShow() {
  const width = window.innerWidth;
  if (width >= 1280) {
    petsPerPage = 8;
    
  } else if (width >= 768) {
    petsPerPage = 6;
  } else {
    petsPerPage = 3;
  }

  return petsPerPage;
}

window.addEventListener('resize', () => {
  handleResize();
  calculateTotalPages();
  renderCurrentPage();
});

let currentCards = [];
let cardsToShow = calculateCardsToShow();

function generateRandomCards() {
  const shuffledAnimals = shuffleArray([...pets_data]);
  currentCards = shuffledAnimals.slice(0, cardsToShow);
}

function initializePetsData() {
  shuffledPetsData = [];
  for (let i = 0; i < 6; i++) {
    shuffledPetsData = shuffledPetsData.concat(shuffleArray([...pets_data]));
  }
  shuffledPetsData = shuffleArray(shuffledPetsData);
}

function renderCards() {
  let petsWrapper = getPetsWrapper();

  generatePets(currentCards).forEach(pet => {
    petsWrapper.append(pet.generatePetCard())
  })
}

function renderCurrentPage() {
  let petsWrapper = getPetsWrapper();
  const startIndex = (currentPage - 1) * petsPerPage;
  const endIndex = startIndex + petsPerPage;
  const pagePets = shuffledPetsData.slice(startIndex, endIndex);

  generatePets(pagePets).forEach(pet => {
    petsWrapper.append(pet.generatePetCard())
  })

  updatePaginationControls();
}

function updatePaginationControls() {
  document.querySelector('.circle-active').innerText = currentPage;

  document.querySelector('.circle:first-child').classList.toggle('circle-disabled', currentPage === 1);
  document.querySelector('.circle:nth-child(2)').classList.toggle('circle-disabled', currentPage === 1);

  document.querySelector('.circle:nth-last-child(2)').classList.toggle('circle-disabled', currentPage === totalPages);
  document.querySelector('.circle:last-child').classList.toggle('circle-disabled', currentPage === totalPages);
}

document.querySelector('.circle:first-child').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage = 1;
    renderCurrentPage();
  }
});

document.querySelector('.circle:nth-child(2)').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderCurrentPage();
  }
});

document.querySelector('.circle:nth-last-child(2)').addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    renderCurrentPage();
  }
});

document.querySelector('.circle:last-child').addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage = totalPages;
    renderCurrentPage();
  }
});

const getPetsWrapper = () => {
  const petsConstainer = document.querySelector('.section-pets__carusel-cards');
  petsConstainer.innerHTML = '';
  return petsConstainer;
}

const generatePets = (data) => {
  let pets = [];
  data.forEach(pet => {
    pets.push(new PetCard(pet))
  });
  return pets;
}

function shuffleArray(array) {
  // Функция для случайного перемешивания массива
  return array.sort(() => Math.random() - 0.5);
}

const addPetsClickHandler2 = () => {
  document.querySelector('.section-pets__carusel-cards').addEventListener('click', (e) => {
    if (e.target.closest('.section-pets__card')) {
      let clickedPetId = e.target.closest('.section-pets__card').getAttribute('data-id');
      let clickedPetData = getClickedData(clickedPetId);

      renderPetModalWindow(clickedPetData);
    }
  })
}

const getClickedData = (id) => {
  return pets_data.find(pet => pet.id == id);
}

const renderPetModalWindow = (content) => {
  let modal = new PetModal('pet-modal', content);
  modal.renderModal();
}

function handleResize() {
  const newCardsToShow = calculateCardsToShow();
  if (newCardsToShow !== cardsToShow) {
    cardsToShow = newCardsToShow;
    calculateTotalPages();
    renderCurrentPage();
  }
}