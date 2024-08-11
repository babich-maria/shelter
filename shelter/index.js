console.log(
  "1 Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +13(14)\n\
  * блок <header>: +2\n\
  * блок Not only: +2\n\
  * блок About: +2\n\
  * блок Our Friends: +1(2)\n\
  * блок Help: +2\n\
  * блок In addition: +2\n\
  * блок <footer>: +2\n\
2 Вёрстка страницы Main соответствует макету при ширине экрана 768px: +11(14)\n\
  * блок <header>: +2\n\
  * блок Not only: +2\n\
  * блок About: +2\n\
  * блок Our Friends: +1(2)\n\
  * блок Help: +2\n\
  * блок In addition: +2\n\
  * блок <footer>: +0(2)\n\
3 Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +5\n\
  * блок <header>: +2\n\
  * блок Our Friends: +1(2)\n\
  * блок <footer>: +2\n\
4 Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля.Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +5\n\
  * нет полосы прокрутки при ширине страницы Main от 1280рх до 768рх: +5\n\
  5 Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции(Примеры неправильной и правильной реализации): +2(8) \n\
  * на странице Main: +2\n\
  6 Верстка обеих страниц валидная: для проверки валидности вёрстки используйте сервис https://validator.w3.org/ : +8\n\
  Total - 39\n\")"
);

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("our_pets").addEventListener("click", function () {
    window.location.href = "our_pets.html#pets";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("make_friend").addEventListener("click", function () {
    window.location.href = "index.html#pets";
  });
});