/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Modal.js":
/*!**********************!*\
  !*** ./src/Modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Modal: () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\n    constructor(classes) {\n        this.classes = classes;\n        this.modal = '';\n        this.modalContent = '';\n        this.modalCloseBtn = '';\n        this.overlay = '';\n    }\n\n    buildModal(content) {\n        this.overlay = this.createDomNode(this.overlay, 'div', 'overlay', 'overlay_modal');\n        this.modal = this.createDomNode(this.modal, 'div', 'modal', this.classes);\n\n        this.modalContent = this.createDomNode(this.modalContent, 'div', 'modal__content');\n\n        this.modalCloseBtn = this.createDomNode(this.modalCloseBtn, 'span', 'modal__close-icon');\n        this.modalCloseBtn.innerHTML =\n            '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"52\" height=\"52\" viewBox=\"0 0 52 52\" fill=\"none\">' +\n            '<rect x=\"1\" y=\"1\" width=\"50\" height=\"50\" rx=\"25\" stroke=\"#F1CDB3\" stroke-width=\"2\"/>' +\n            '<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M27.4262 26L31.7046 21.7216C32.0985 21.3277 32.0985 20.6892 31.7046 20.2954C31.3108 19.9016 30.6723 19.9016 30.2785 20.2954L26 24.5739L21.7215 20.2954C21.3276 19.9015 20.6892 19.9015 20.2953 20.2954C19.9016 20.6892 19.9016 21.3277 20.2953 21.7215L24.5738 26L20.2953 30.2785C19.9016 30.6723 19.9016 31.3108 20.2953 31.7046C20.6892 32.0985 21.3276 32.0985 21.7215 31.7046L26 27.4261L30.2785 31.7046C30.6723 32.0985 31.3108 32.0985 31.7046 31.7046C32.0985 31.3108 32.0985 30.6723 31.7046 30.2785L27.4262 26Z\" fill=\"#292929\"/>' +\n            '</svg>'\n\n        this.setContent(content);\n        this.appendModalElements();\n        this.bindEvents();\n        this.openModal();\n    }\n\n    createDomNode(node, element, ...classes) {\n        node = document.createElement(element);\n        node.classList.add(...classes);\n        return node\n    };\n\n    setContent(content) {\n        if (typeof content === 'string') {\n            this.modalContent.innerHTML = content;\n        } else {\n            this.modalContent.innerHTML = '';\n            this.modalContent.appendChild(content);\n        }\n    }\n\n    appendModalElements() {\n        this.modal.append(this.modalCloseBtn);\n        this.modal.append(this.modalContent);\n        this.overlay.append(this.modal);\n    }\n\n    bindEvents() {\n        this.modalCloseBtn.addEventListener('click', this.closeModal);\n        this.overlay.addEventListener('click', this.closeModal);\n    }\n\n    openModal() {\n        console.log(this.overlay);\n        document.body.append(this.overlay);\n        document.body.style.overflow = 'hidden';\n\n    }\n\n    closeModal(e) {\n        let classes = e.target.classList;\n        if (classes.contains('overlay') || classes.contains('modal__close-icon')) {\n            let overlay = document.querySelector('.overlay');\n            if(overlay){\n                overlay.remove()\n            }\n           \n            document.body.style.overflow = 'auto';\n        }\n    }\n} \n\n//# sourceURL=webpack:///./src/Modal.js?");

/***/ }),

/***/ "./src/PetCard.js":
/*!************************!*\
  !*** ./src/PetCard.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PetCard: () => (/* binding */ PetCard)\n/* harmony export */ });\nclass PetCard {\n  constructor({ id, img, name }) {\n    this.id = id;\n    this.urlToImage = img;\n    this.name = name;\n  }\n\n  generatePetCard() {\n    let template = '';\n    let pet = document.createElement('div');\n    pet.className = 'section-pets__card';\n    pet.setAttribute('data-id', this.id);\n\n    this.urlToImage &&\n      (template += `<img class=\"pet__image\" src=${this.urlToImage} alt=\"pet\">`);\n\n    this.name &&\n      (template += `<p class=\"section-pets__name\">${this.name}</p>`);\n\n    template += ` <button class=\"button_bodered\">Learn more</button>`\n    template += `</div>`;\n\n    pet.innerHTML = template;\n    return pet;\n  }\n}\n\n//# sourceURL=webpack:///./src/PetCard.js?");

/***/ }),

/***/ "./src/PetModal.js":
/*!*************************!*\
  !*** ./src/PetModal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PetModal: () => (/* binding */ PetModal)\n/* harmony export */ });\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ \"./src/Modal.js\");\n\n\nclass PetModal extends _Modal__WEBPACK_IMPORTED_MODULE_0__.Modal {\n    constructor(classes, { id, name, img, type, breed, description, age, inoculations, diseases, parasites }) {\n        super(classes);\n        this.id = id;\n        this.name = name;\n        this.breed = breed;\n        this.urlToImage = img;\n        this.type = type;\n        this.description = description;\n        this.age = age;\n        this.inoculations = inoculations;\n        this.diseases = diseases;\n        this.parasites = parasites;\n    }\n\n    generateContent() {\n        let template = '';\n        let pet = document.createElement('div');\n        pet.className = 'pet-modal__content';\n\n        this.urlToImage &&\n            (template += `<img class=\"pet__image\" src=${this.urlToImage} alt=\"pet-image\">`)\n\n\n        template += `<div class=\"pet__content\">`\n\n        this.name &&\n            (template += `<h3 class=\"h3 pet__name\">${this.name}</h3>`)\n\n        template += `<h4 class=\"h4 pet__breed\">${this.type} - ${this.breed}</h4>`;\n\n        this.description &&\n            (template += `<h5 class=\"h5 pet__text\">${this.description}</h5>`)\n\n\n        template += `<ul class=\"pet__parameters\">`;\n        template += `<li class=\"pet__parameters\"><h5 class=\"h5\"><b>Age: </b>${this.age}</h5></li>`;\n        template += `<li class=\"pet__parameters\"><h5 class=\"h5\"><b>Inoculations: </b>${this.inoculations.join(',')}</h5></li>`;\n        template += `<li class=\"pet__parameters\"><h5 class=\"h5\"><b>Diseases: </b>${this.diseases.join(',')}</h5></li>`;\n        template += `<li class=\"pet__parameters\"><h5 class=\"h5\"><b>Parasites:</b> ${this.parasites.join(',')}</h5></li>`;\n\n        template += `</ul>`\n\n        template += `</div>`\n\n        pet.innerHTML = template;\n        return pet;\n    }\n\n    renderModal() {\n        let content = this.generateContent();\n        console.log(content)\n        super.buildModal(content);\n    }\n}\n\n//# sourceURL=webpack:///./src/PetModal.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PetCard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PetCard.js */ \"./src/PetCard.js\");\n/* harmony import */ var _PetModal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PetModal.js */ \"./src/PetModal.js\");\n\n\nconsole.log(\n  \"1. Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14\\n\\\n  * блок <header>: +2\\n\\\n  * блок Not only: +2\\n\\\n  * блок About: +2\\n\\\n  * блок Our Friends: +2\\n\\\n  * блок Help: +2\\n\\\n  * блок In addition: +2\\n\\\n  * блок <footer>: +2\\n\\\n2. Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14\\n\\\n  * блок <header>: +2\\n\\\n  * блок Not only: +2\\n\\\n  * блок About: +2\\n\\\n  * блок Our Friends: +2\\n\\\n  * блок Help: +2\\n\\\n  * блок In addition: +2\\n\\\n  * блок <footer>: +2\\n\\\n3. Вёрстка страницы Main соответствует макету при ширине экрана 320px: +6(14)\\n\\\n  * блок <header>: +2\\n\\\n  * блок Not only: +0\\n\\\n  * блок About: +0\\n\\\n  * блок Our Friends: +0\\n\\\n  * блок Help: +2\\n\\\n  * блок In addition: +2\\n\\\n  * блок <footer>: +0\\n\\\n4. Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6\\n\\\n  * блок <header>: +2\\n\\\n  * блок Our Friends: +2\\n\\\n  * блок <footer>: +2\\n\\\n5. Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +4\\n\\\n  * блок <header>: +2\\n\\\n  * блок Our Friends: +2\\n\\\n  * блок <footer>: +0\\n\\\n6. Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +2\\n\\\n  * блок <header>: +2\\n\\\n  * блок Our Friends: +0 \\n\\\n  * блок <footer>: +0 \\n\\\n7. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20 \\n\\\n  * нет полосы прокрутки при ширине страницы Main от 1280рх до 768рх: +5\\n\\\n  * нет полосы прокрутки при ширине страницы Main от 768рх до 320рх: +5\\n\\\n  * нет полосы прокрутки при ширине страницы Pets от 1280рх до 768рх: +5 \\n\\\n  * нет полосы прокрутки при ширине страницы Pets от 768рх до 320рх: +5 \\n\\\n  8. Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции(Примеры неправильной и правильной реализации): +8\\n\\\n* на странице Main: +4\\n\\\n  * на странице Pets: +4\\n\\\n  9. При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер - меню: +4\\n\\\n  Открытие меню при клике на иконку бургер - меню на текущем этапе не проверяется\\n\\\n10. Верстка обеих страниц валидная: \\n\\\nдля проверки валидности вёрстки используйте сервис https://validator.w3.org/ : +8\\n\\\nTotal - 86\"\n);\n\nconst pets_data =\n  [{\n    \"id\": 1,\n    \"name\": \"Katrine\",\n    \"img\": \"./assets/pets-katrine.png\",\n    \"type\": \"Cat\",\n    \"breed\": \"British Shorthair\",\n    \"description\": \"Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.\",\n    \"age\": \"6 months\",\n    \"inoculations\": [\"panleukopenia\"],\n    \"diseases\": [\"none\"],\n    \"parasites\": [\"none\"]\n  },\n  {\n    \"id\": 2,\n    \"name\": \"Jennifer\",\n    \"img\": \"./assets/pets-jennifer.png\",\n    \"type\": \"Dog\",\n    \"breed\": \"Labrador\",\n    \"description\": \"Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.\",\n    \"age\": \"2 months\",\n    \"inoculations\": [\"none\"],\n    \"diseases\": [\"none\"],\n    \"parasites\": [\"none\"]\n  },\n  {\n    \"id\": 4,\n    \"name\": \"Sophia\",\n    \"img\": \"./assets/pets-sophia.png\",\n    \"type\": \"Dog\",\n    \"breed\": \"Shih tzu\",\n    \"description\": \"Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.\",\n    \"age\": \"1 month\",\n    \"inoculations\": [\"parvovirus\"],\n    \"diseases\": [\"none\"],\n    \"parasites\": [\"none\"]\n  },\n  {\n    \"id\": 3,\n    \"name\": \"Woody\",\n    \"img\": \"./assets/pets-woody.png\",\n    \"type\": \"Dog\",\n    \"breed\": \"Golden Retriever\",\n    \"description\": \"Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.\",\n    \"age\": \"3 years 6 months\",\n    \"inoculations\": [\"adenovirus\", \"distemper\"],\n    \"diseases\": [\"right back leg mobility reduced\"],\n    \"parasites\": [\"none\"]\n  },\n  {\n    \"id\": 5,\n    \"name\": \"Scarlett\",\n    \"img\": \"./assets/pets-scarlett.png\",\n    \"type\": \"Dog\",\n    \"breed\": \"Jack Russell Terrier\",\n    \"description\": \"Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.\",\n    \"age\": \"3 months\",\n    \"inoculations\": [\"parainfluenza\"],\n    \"diseases\": [\"none\"],\n    \"parasites\": [\"none\"]\n  },\n  {\n    \"id\": 6,\n    \"name\": \"Timmy\",\n    \"img\": \"./assets/pets-timmy.png\",\n    \"type\": \"Cat\",\n    \"breed\": \"British Shorthair\",\n    \"description\": \"Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.\",\n    \"age\": \"2 years 3 months\",\n    \"inoculations\": [\"calicivirus\", \"viral rhinotracheitis\"],\n    \"diseases\": [\"kidney stones\"],\n    \"parasites\": [\"none\"]\n  },\n  {\n    \"id\": 7,\n    \"name\": \"Freddie\",\n    \"img\": \"./assets/pets-freddie.png\",\n    \"type\": \"Cat\",\n    \"breed\": \"British Shorthair\",\n    \"description\": \"Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.\",\n    \"age\": \"2 months\",\n    \"inoculations\": [\"rabies\"],\n    \"diseases\": [\"none\"],\n    \"parasites\": [\"none\"]\n  },\n  {\n    \"id\": 8,\n    \"name\": \"Charly\",\n    \"img\": \"./assets/pets-charly.png\",\n    \"type\": \"Dog\",\n    \"breed\": \"Jack Russell Terrier\",\n    \"description\": \"This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.\",\n    \"age\": \"8 years\",\n    \"inoculations\": [\"bordetella bronchiseptica\", \"leptospirosis\"],\n    \"diseases\": [\"deafness\", \"blindness\"],\n    \"parasites\": [\"lice\", \"fleas\"]\n  }\n  ];\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  document.getElementById(\"our_pets\").addEventListener(\"click\", function () {\n    window.location.href = \"our_pets.html#pets\";\n  });\n});\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  document.getElementById(\"make_friend\").addEventListener(\"click\", function () {\n    window.location.href = \"index.html#pets\";\n  });\n});\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const burgerMenu = document.getElementById('burgerMenu');\n  const adaptiveMenu = document.getElementById('adaptiveMenu');\n\n  // Функция для открытия/закрытия меню\n  function toggleMenu() {\n    adaptiveMenu.classList.toggle('menu-active');\n    menuOverlay.classList.toggle('overlay-active');\n    burgerMenu.classList.toggle('burger-active');\n\n    // Блокировка скролла страницы\n    document.body.style.overflow = adaptiveMenu.classList.contains('menu-active') ? 'hidden' : 'auto';\n  }\n\n  // Обработчик клика по бургер-иконке\n  burgerMenu.addEventListener('click', toggleMenu);\n\n  // Обработчик клика по затемняющему фону\n  menuOverlay.addEventListener('click', toggleMenu);\n\n  // Обработчик кликов по ссылкам в меню\n  document.querySelectorAll('.adaptive-menu a').forEach(link => {\n    link.addEventListener('click', toggleMenu);\n  });\n});\n\nwindow.addEventListener('resize', handleResize);\n\nconst carouselTrack = document.querySelector('.section-pets__carusel-cards');\nconst buttonLeft = document.querySelector('.arrow-left');\nconst buttonRight = document.querySelector('.arrow-right');\n\nlet currentIndex = 0;\nlet visibleCards = 3;\nlet totalCards = pets_data.length;\n\nlet currentCards = [];\nlet previousCards = [];\nlet cardsToShow = calculateCardsToShow();\n\nwindow.onload = function () {\n  if (pets_data) {\n    initializeCarousel();\n  }\n}\n\nfunction initializeCarousel() {\n  generateRandomCards();\n  renderCards();\n}\n\nfunction calculateCardsToShow() {\n  const width = window.innerWidth;\n  if (width >= 1060) return 3;\n  if (width >= 700) return 2;\n  return 1;\n}\n\nfunction generateRandomCards() {\n  const shuffledAnimals = shuffleArray([...pets_data]);\n  currentCards = shuffledAnimals.slice(0, cardsToShow);\n}\n\n// Обработчик клика для кнопки влево\nbuttonLeft.addEventListener('click', () => {\n  slide('left');\n});\n\n// Обработчик клика для кнопки вправо\nbuttonRight.addEventListener('click', () => {\n  slide('right')\n   //moveCarousel('right');\n});\n\n// Функция для анимации сдвига карусели\nfunction moveCarousel(direction) {\n  const shift = direction === 'right' ? -100 : 100;\n  carouselTrack.style.transition = 'transform 0.5s ease';\n  carouselTrack.style.transform = `translateX(${shift}%)`;\n\n  setTimeout(() => {\n      carouselTrack.style.transition = 'none';\n      if (direction === 'right') {\n          currentIndex = (currentIndex + visibleCards) % totalCards;\n      } else {\n          currentIndex = (currentIndex - visibleCards + totalCards) % totalCards;\n      }\n      updateCarouselPosition();\n  }, 500);\n}\n\nfunction renderCards_orig() {\n  const carousel = document.getElementById(\"carousel\");\n  carousel.innerHTML = '';\n  currentCards.forEach(animal => {\n      const card = document.createElement(\"div\");\n      card.className = \"card\";\n      card.innerHTML = `<img src=\"${animal.image}\" alt=\"${animal.name}\"><h3>${animal.name}</h3>`;\n      carousel.appendChild(card);\n  });\n}\n\nfunction renderCards() {\n  let petsWrapper = getPetsWrapper();\n  \n  generatePets(currentCards).forEach(pet => {\n    petsWrapper.append(pet.generatePetCard())\n  })\n\n  addPetsClickHandler();\n}\n\nfunction slide_old(direction) {\n  const carousel = document.getElementById(\"carousel\");\n  const remainingAnimals = pets_data.filter(animal => !currentCards.includes(animal));\n  const shuffledAnimals = remainingAnimals.sort(() => 0.5 - Math.random());\n  \n  previousCards = currentCards.slice();\n\n  if (direction === \"right\") {\n      currentCards = shuffledAnimals.slice(0, cardsToShow);\n      carousel.style.transform = 'translateX(-100%)';\n  } else if (direction === \"left\") {\n      currentCards = shuffledAnimals.slice(0, cardsToShow);\n      carousel.style.transform = 'translateX(100%)';\n  }\n  \n  setTimeout(() => {\n      renderCards();\n      carousel.style.transition = 'none';\n      carousel.style.transform = 'translateX(0)';\n      setTimeout(() => carousel.style.transition = 'transform 0.5s ease', 0);\n  }, 500);\n}\n\nfunction slide(direction) {\n  const carousel = document.getElementById(\"carousel\");\n  const remainingAnimals = pets_data.filter(animal => !currentCards.includes(animal));\n  const shuffledAnimals = remainingAnimals.sort(() => 0.5 - Math.random());\n  \n  // Создаем новые карточки\n  const newCards = shuffledAnimals.slice(0, cardsToShow);\n  \n  // Добавляем новые карточки на DOM, но вне видимой области\n  const newCarousel = document.createElement('div');\n  newCarousel.className = 'section-pets__carusel-cards';\n  newCarousel.style.position = 'absolute';\n  newCarousel.style.top = '0';\n  newCarousel.style.width = carousel.offsetWidth  + 'px';\n\n  generatePets(newCards).forEach(pet => {\n    newCarousel.appendChild(pet.generatePetCard())\n  })\n\n  // Определяем направление\n  if (direction === 'right') {\n      newCarousel.style.transform = 'translateX(100%)';\n      carousel.parentNode.appendChild(newCarousel);\n      \n      setTimeout(() => {\n          carousel.style.transform = 'translateX(-100%)';\n          newCarousel.style.transform = 'translateX(0)';\n      }, 20);\n  } else if (direction === 'left') {\n      newCarousel.style.transform = 'translateX(-100%)';\n      carousel.parentNode.appendChild(newCarousel);\n      \n      setTimeout(() => {\n          carousel.style.transform = 'translateX(100%)';\n          newCarousel.style.transform = 'translateX(0)';\n      }, 20);\n  }\n\n  // Завершаем анимацию и обновляем слайды\n  setTimeout(() => {\n      carousel.remove();\n      newCarousel.style.position = 'relative';\n      newCarousel.style.transform = 'translateX(0)';\n      newCarousel.className = 'section-pets__carusel-cards'; \n      newCarousel.id = 'carousel';\n      newCarousel.style.width = '100%'\n      \n      currentCards = newCards;\n  }, 520); // время дольше анимации, чтобы избежать сбоев\n}\n\nconst renderPetsToDom = () => {\n  let petsWrapper = getPetsWrapper();\n\n  // Генерация первого слайда при загрузке страницы\n  currentSlideData = createSlide(pets_data, currentSlide);\n  currentSlide = currentSlideData.map(pet => pet.id);\n\n  generatePets(currentSlideData).forEach(pet => {\n    petsWrapper.append(pet.generatePetCard())\n  })\n\n  addPetsClickHandler();\n}\n\nfunction duplicateCards() {\n  const firstSet = carouselTrack.innerHTML;\n  const lastSet = carouselTrack.innerHTML;\n\n  carouselTrack.innerHTML = `${lastSet}${carouselTrack.innerHTML}${firstSet}`;\n}\n\nfunction updateCarouselPosition() {\n  const offset = -(currentIndex + visibleCards) * 100 / (visibleCards * 3);\n  carouselTrack.style.transform = `translateX(${offset}%)`;\n}\n\nconst getPetsWrapper = () => {\n  const petsConstainer = document.querySelector('.section-pets__carusel-cards');\n  petsConstainer.innerHTML = '';\n  return petsConstainer;\n}\n\nconst generatePets = (data) => {\n  let pets = [];\n  data.forEach(pet => {\n    pets.push(new _PetCard_js__WEBPACK_IMPORTED_MODULE_0__.PetCard(pet))\n  });\n  return pets;\n}\n\nfunction generateRandomCards_old(pets, numCards, lastSlide = []) {\n  // Перемешиваем массив питомцев\n  const shuffledPets = shuffleArray([...pets]);\n\n  // Фильтруем карточки, которые уже есть в предыдущем слайде\n  const filteredPets = shuffledPets.filter(pet => !lastSlide.includes(pet.id));\n\n  // Выбираем первые 'numCards' элементов после фильтрации\n  const selectedCards = filteredPets.slice(0, numCards);\n\n  return selectedCards;\n}\n\nfunction createSlide(petsData, currentSlide, numCards = 3) {\n  // Генерируем следующий набор карточек\n  const nextSlide = generateRandomCards(petsData, numCards, currentSlide);\n  return nextSlide;\n}\n\nfunction shuffleArray(array) {\n  // Функция для случайного перемешивания массива\n  return array.sort(() => Math.random() - 0.5);\n}\n\nconst addPetsClickHandler = () => {\n  document.querySelector('.section-pets__carusel-cards').addEventListener('click', (e) => {\n    if (e.target.closest('.section-pets__card')) {\n      let clickedPetId = e.target.closest('.section-pets__card').getAttribute('data-id');\n      let clickedPetData = getClickedData(clickedPetId);\n\n      renderPetModalWindow(clickedPetData);\n    }\n  })\n}\n\nconst getClickedData = (id) => {\n  return pets_data.find(pet => pet.id == id);\n}\n\nconst renderPetModalWindow = (content) => {\n  let modal = new _PetModal_js__WEBPACK_IMPORTED_MODULE_1__.PetModal('pet-modal', content);\n  modal.renderModal();\n}\n\nfunction handleResize() {\n  const newCardsToShow = calculateCardsToShow();\n  if (newCardsToShow !== cardsToShow) {\n      cardsToShow = newCardsToShow;\n      generateRandomCards();\n      renderCards();\n  }\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;